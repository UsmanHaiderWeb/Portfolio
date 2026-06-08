import { memo, useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import Eyebrow from '../ui/Eyebrow'
import NeonText from '../ui/NeonText'
import { STATS } from '../../data/stats'

const Stat = ({ value, suffix, label }) => {
  const numRef = useRef()
  const itemRef = useRef()

  useGSAP(
    () => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: value,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: { trigger: itemRef.current, start: 'top 85%', once: true },
        onUpdate() {
          if (numRef.current) numRef.current.textContent = Math.round(obj.val) + suffix
        },
      })
    },
    { scope: itemRef },
  )

  return (
    <div ref={itemRef} className="flex flex-col gap-y-1">
      <span ref={numRef} className="font-display text-white text-glow-cyan leading-none" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)' }}>
        0{suffix}
      </span>
      <span className="text-[10px] font-techno text-white/40 tracking-[0.25em] uppercase">{label}</span>
    </div>
  )
}

const About = () => {
  const bioRef = useRef()
  const statsRef = useRef()

  useGSAP(() => {
    gsap.from(bioRef.current.children, {
      y: 24,
      opacity: 0,
      stagger: 0.09,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: { trigger: bioRef.current, start: 'top 82%', once: true },
    })
    gsap.from(statsRef.current.children, {
      y: 24,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: statsRef.current, start: 'top 82%', once: true },
    })
  })

  return (
    <section id="about" className="relative w-full px-8 mobile:px-5 micro:px-3 py-28 border-t border-white/10">
      <Eyebrow index="02" className="mb-12">About</Eyebrow>

      <div className="grid sm:grid-cols-[45%_55%] gap-x-16 gap-y-14 rounded-md bg-base/40 backdrop-blur-[2px] p-2">
        <div ref={bioRef} className="flex flex-col gap-y-6">
          <NeonText className="leading-none" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}>
            About
          </NeonText>
          <p className="font-sans text-[15px] text-white/65 leading-relaxed max-w-[420px]">
            Frontend developer based in Lahore, building high-performance interfaces for production systems.
            Currently leading the frontend ecosystem at Ticketly.pk — architecting modular portal systems that
            sustain 60fps across all devices.
          </p>
          <span className="font-techno text-[11px] text-neon-lime tracking-[0.3em] uppercase flex items-center gap-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse inline-block" />
            Currently at Ticketly.pk
          </span>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 gap-x-8 gap-y-10 sm:pt-2">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(About)
