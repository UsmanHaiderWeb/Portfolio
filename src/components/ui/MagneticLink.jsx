import { useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import { useAppStore } from '../../store/useAppStore'

// Wraps content and pulls it slightly toward the pointer on hover (magnetic).
// Disabled on touch / reduced-motion. Renders an <a> by default.
export default function MagneticLink({ as: Tag = 'a', strength = 0.4, className = '', children, ...rest }) {
  const ref = useRef()
  const xTo = useRef()
  const yTo = useRef()
  const reducedMotion = useAppStore((s) => s.reducedMotion)
  const isTouch = useAppStore((s) => s.isTouch)
  const enabled = !reducedMotion && !isTouch

  useGSAP(
    () => {
      if (!enabled) return
      xTo.current = gsap.quickTo(ref.current, 'x', { duration: 0.5, ease: 'power3.out' })
      yTo.current = gsap.quickTo(ref.current, 'y', { duration: 0.5, ease: 'power3.out' })
    },
    { scope: ref, dependencies: [enabled] },
  )

  const onMove = (e) => {
    if (!enabled || !xTo.current) return
    const r = ref.current.getBoundingClientRect()
    xTo.current((e.clientX - (r.left + r.width / 2)) * strength)
    yTo.current((e.clientY - (r.top + r.height / 2)) * strength)
  }
  const onLeave = () => {
    if (!enabled || !xTo.current) return
    xTo.current(0)
    yTo.current(0)
  }

  return (
    <Tag
      ref={ref}
      className={`inline-block will-change-transform ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      {...rest}
    >
      {children}
    </Tag>
  )
}
