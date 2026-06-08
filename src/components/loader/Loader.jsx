import { useRef, useState } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import { useAppStore } from '../../store/useAppStore'
import { usePreloader } from './usePreloader'

// Branded intro: animated % counter + neon bar, then a curtain wipe that
// reveals the site. Sets introDone on completion (releases the scroll lock).
export default function Loader() {
  const rootRef = useRef()
  const numRef = useRef()
  const barRef = useRef()
  const labelRef = useRef()
  const [hidden, setHidden] = useState(false)

  const loadProgress = useAppStore((s) => s.loadProgress)
  const isLoaded = useAppStore((s) => s.isLoaded)
  const reducedMotion = useAppStore((s) => s.reducedMotion)
  const setIntroDone = useAppStore((s) => s.setIntroDone)

  usePreloader()

  // Smoothly drive the displayed % toward the real load progress.
  const shown = useRef({ val: 0 })
  useGSAP(
    () => {
      gsap.to(shown.current, {
        val: loadProgress * 100,
        duration: reducedMotion ? 0 : 0.6,
        ease: 'power1.out',
        onUpdate() {
          if (numRef.current) numRef.current.textContent = String(Math.round(shown.current.val)).padStart(3, '0')
          if (barRef.current) barRef.current.style.transform = `scaleX(${shown.current.val / 100})`
        },
      })
    },
    { dependencies: [loadProgress, reducedMotion] },
  )

  // When loading finishes, play the reveal.
  useGSAP(
    () => {
      if (!isLoaded) return

      const finishIntro = () => {
        setIntroDone(true)
        setHidden(true)
      }

      if (reducedMotion) {
        gsap.set(rootRef.current, { autoAlpha: 0 })
        finishIntro()
        return
      }

      const tl = gsap.timeline({ onComplete: finishIntro })
      tl.to(shown.current, {
        val: 100,
        duration: 0.4,
        ease: 'power2.inOut',
        onUpdate() {
          if (numRef.current) numRef.current.textContent = String(Math.round(shown.current.val)).padStart(3, '0')
          if (barRef.current) barRef.current.style.transform = `scaleX(${shown.current.val / 100})`
        },
      })
        .to(labelRef.current, { y: -12, opacity: 0, duration: 0.4, ease: 'power2.in' }, '+=0.15')
        .to(
          rootRef.current,
          { clipPath: 'inset(0 0 100% 0)', duration: 0.9, ease: 'expo.inOut' },
          '-=0.1',
        )
    },
    { dependencies: [isLoaded, reducedMotion] },
  )

  if (hidden) return null

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 bg-base flex flex-col items-center justify-center"
      style={{ clipPath: 'inset(0 0 0% 0)' }}
    >
      <div ref={labelRef} className="flex flex-col items-center gap-y-8 px-6">
        <span className="font-techno text-[11px] tracking-[0.5em] uppercase text-white/45">
          Usman Haider — Portfolio
        </span>

        <div className="flex items-end gap-x-2">
          <span ref={numRef} className="font-display text-7xl sm:text-8xl text-white text-glow-cyan leading-none">
            000
          </span>
          <span className="font-techno text-neon-cyan text-xl mb-2">%</span>
        </div>

        <div className="w-56 sm:w-72 h-px bg-white/10 overflow-hidden">
          <div ref={barRef} className="h-full bg-neon-cyan origin-left" style={{ transform: 'scaleX(0)' }} />
        </div>

        <span className="font-techno text-[10px] tracking-[0.4em] uppercase text-white/30">
          Initializing&nbsp;render&nbsp;//&nbsp;WebGL
        </span>
      </div>
    </div>
  )
}
