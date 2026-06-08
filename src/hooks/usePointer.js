// One global pointer listener -> frame.pointer (normalized 0..1). Also raises a
// hover intent flag when over interactive elements so the cursor trail reacts.
import { useEffect } from 'react'
import { pointer, hover } from '../store/frame'

export function usePointer() {
  useEffect(() => {
    const onMove = (e) => {
      pointer.x = e.clientX / window.innerWidth
      pointer.y = e.clientY / window.innerHeight
    }
    const onOver = (e) => {
      hover.value = e.target?.closest?.('a, button, [data-hover]') ? 1 : 0
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerover', onOver)
    }
  }, [])
}
