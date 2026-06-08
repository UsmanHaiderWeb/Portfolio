// Lenis smooth scroll, bridged to GSAP ScrollTrigger via a single gsap.ticker
// rAF. Also feeds normalized scroll progress to the shader (frame.scroll).
// Disabled under reduced-motion (native scroll, but still track progress).
import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { useAppStore } from '../store/useAppStore'
import { scroll } from '../store/frame'

export function useLenis() {
  const reducedMotion = useAppStore((s) => s.reducedMotion)
  const introDone = useAppStore((s) => s.introDone)

  // Native-scroll fallback: keep frame.scroll in sync without Lenis.
  useEffect(() => {
    if (!reducedMotion) return
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      scroll.value = max > 0 ? window.scrollY / max : 0
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [reducedMotion])

  // Lenis init + ScrollTrigger bridge.
  useEffect(() => {
    if (reducedMotion) return
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })

    lenis.on('scroll', (e) => {
      ScrollTrigger.update()
      scroll.value = e.progress ?? 0
    })

    const ticker = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(ticker)
    gsap.ticker.lagSmoothing(0)

    // start stopped — the intro reveal releases the lock
    if (!useAppStore.getState().introDone) lenis.stop()

    // expose for the loader to start it
    useLenis._instance = lenis

    return () => {
      gsap.ticker.remove(ticker)
      lenis.destroy()
      useLenis._instance = null
    }
  }, [reducedMotion])

  // Lock/unlock with the intro.
  useEffect(() => {
    const lenis = useLenis._instance
    if (!lenis) return
    if (introDone) lenis.start()
    else lenis.stop()
  }, [introDone])
}
