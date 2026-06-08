import { memo, useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import Eyebrow from '../ui/Eyebrow'
import NeonText from '../ui/NeonText'
import { CONTACTS } from '../../data/contacts'

const Footer = () => {
  const ctaRef = useRef()
  const cardsRef = useRef()
  const bottomRef = useRef()

  useGSAP(() => {
    gsap.from(ctaRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: ctaRef.current, start: 'top 82%', once: true },
    })
    gsap.from(cardsRef.current.children, {
      y: 20,
      opacity: 0,
      stagger: 0.07,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: { trigger: cardsRef.current, start: 'top 82%', once: true },
    })
    gsap.from(bottomRef.current.children, {
      opacity: 0,
      stagger: 0.06,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: bottomRef.current, start: 'top 92%', once: true },
    })
  })

  return (
    <footer id="contact" className="relative w-full px-8 mobile:px-5 micro:px-3 pt-28 pb-8 border-t border-white/10">
      <div ref={ctaRef}>
        <Eyebrow index="06" className="mb-10">Contact</Eyebrow>
        <NeonText className="leading-none mb-16" style={{ fontSize: 'clamp(2.6rem, 9vw, 8rem)' }}>
          Let&apos;s work<br />
          <span className="text-glow-magenta text-neon-magenta">together.</span>
        </NeonText>
      </div>

      <div ref={cardsRef} className="grid grid-cols-2 sm:grid-cols-4 border-t border-white/10">
        {CONTACTS.map((c, i) => (
          <div
            key={c.label}
            className={`group flex flex-col gap-y-2 py-8 px-6 border-white/10 transition-colors duration-200 hover:bg-white/[0.02] ${i !== 0 ? 'border-l' : ''}`}
          >
            <span className="font-techno text-[10px] text-white/40 tracking-[0.25em] uppercase">{c.label}</span>
            {c.link ? (
              <a
                href={c.link}
                target={c.link.startsWith('mailto') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="font-techno text-[13px] text-white/70 group-hover:text-neon-cyan transition-colors duration-200 leading-snug break-all"
              >
                {c.value}
              </a>
            ) : (
              <span className="font-techno text-[13px] text-white/70 leading-snug">{c.value}</span>
            )}
          </div>
        ))}
      </div>

      <div ref={bottomRef} className="flex justify-between items-center pt-8 border-t border-white/10 flex-wrap gap-y-2">
        <span className="font-techno text-[11px] text-white/35 tracking-[0.2em]">© 2026 Usman Haider</span>
        <span className="font-techno text-[11px] text-white/35 tracking-[0.2em]">Frontend Developer · Lahore</span>
        <a href="mailto:team@paymo.com.pk" className="font-techno text-[11px] text-white/35 tracking-[0.2em] hover:text-neon-cyan transition-colors duration-200">
          team@paymo.com.pk ↗
        </a>
      </div>
    </footer>
  )
}

export default memo(Footer)
