import { useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import { useAppStore } from '../../store/useAppStore'
import MagneticLink from '../ui/MagneticLink'

// Fixed top bar: monogram + resume link. Fades in with the intro.
export default function Header() {
  const ref = useRef()
  const introDone = useAppStore((s) => s.introDone)

  useGSAP(
    () => {
      gsap.set(ref.current, { y: -20, opacity: 0 })
      if (introDone) gsap.to(ref.current, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.2 })
    },
    { dependencies: [introDone] },
  )

  return (
    <header
      ref={ref}
      className="fixed top-0 left-0 w-full z-30 flex items-center justify-between px-8 mobile:px-5 micro:px-3 py-5 pointer-events-none"
    >
      <a href="#top" className="pointer-events-auto flex items-center gap-x-2">
        <span className="font-display text-sm tracking-[0.3em] text-white text-glow-cyan">UH</span>
        <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse" />
      </a>

      <MagneticLink
        href="/Usman Haider.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto font-techno text-[11px] tracking-[0.3em] uppercase text-white/70 border border-white/15 px-4 py-2 rounded-sm hover:text-neon-cyan hover:border-neon-cyan/60 transition-colors duration-300"
      >
        Résumé ↗
      </MagneticLink>
    </header>
  )
}
