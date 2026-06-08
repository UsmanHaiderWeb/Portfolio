// Detects device/user capabilities once at boot and writes them to the store.
// These gate the WebGL canvas, the cursor trail, Lenis smooth scroll and all
// "maximal" motion so the site degrades gracefully.
import { useEffect } from 'react'
import { useAppStore } from '../store/useAppStore'
import { isWebGLAvailable } from '../lib/webgl'

export function useCapabilities() {
  const setCapabilities = useAppStore((s) => s.setCapabilities)

  useEffect(() => {
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const touchMq = window.matchMedia('(pointer: coarse)')

    const apply = () =>
      setCapabilities({
        reducedMotion: motionMq.matches,
        isTouch: touchMq.matches || 'ontouchstart' in window,
        webglEnabled: isWebGLAvailable() && !motionMq.matches,
      })

    apply()
    motionMq.addEventListener?.('change', apply)
    touchMq.addEventListener?.('change', apply)
    return () => {
      motionMq.removeEventListener?.('change', apply)
      touchMq.removeEventListener?.('change', apply)
    }
  }, [setCapabilities])
}
