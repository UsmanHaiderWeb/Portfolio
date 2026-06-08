import { memo, useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import { useAppStore } from '../../store/useAppStore'

// Hero is the canvas showcase. Elements start hidden and reveal when the intro
// finishes (introDone), choreographed as the loader curtain lifts.
const Hero = () => {
  const topRef = useRef()
  const nameRef = useRef()
  const lineRef = useRef()
  const bottomRef = useRef()
  const introDone = useAppStore((s) => s.introDone)
  const reducedMotion = useAppStore((s) => s.reducedMotion)

  useGSAP(
    () => {
      const name = nameRef.current.children
      const top = topRef.current.children
      const bottom = bottomRef.current.children

      if (reducedMotion) {
        gsap.set([...top, ...name, lineRef.current, ...bottom], { clearProps: 'all', opacity: 1, yPercent: 0, y: 0 })
        return
      }

      // initial hidden state
      gsap.set(top, { y: -16, opacity: 0 })
      gsap.set(name, { yPercent: 110 })
      gsap.set(lineRef.current, { scaleX: 0, transformOrigin: 'left center' })
      gsap.set(bottom, { y: 10, opacity: 0 })

      if (!introDone) return

      const tl = gsap.timeline()
      tl.to(top, { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: 'power3.out' })
        .to(name, { yPercent: 0, duration: 1.1, stagger: 0.08, ease: 'expo.out' }, '-=0.4')
        .to(lineRef.current, { scaleX: 1, duration: 0.9, ease: 'expo.inOut' }, '-=0.6')
        .to(bottom, { y: 0, opacity: 1, stagger: 0.08, duration: 0.7, ease: 'power2.out' }, '-=0.5')
    },
    { dependencies: [introDone, reducedMotion] },
  )

  return (
    <section
      id="top"
      className="relative w-full min-h-screen flex flex-col px-8 mobile:px-5 micro:px-3 pt-24 pb-8"
    >
      {/* top meta */}
      <div ref={topRef} className="flex justify-between items-start w-full">
        <span className="font-techno text-[11px] text-white/40 tracking-[0.2em]">Portfolio&nbsp;—&nbsp;2026</span>
        <div className="flex flex-col items-end gap-y-2">
          <span className="font-techno text-[11px] text-white/55 tracking-[0.3em] uppercase">Frontend Developer</span>
          <span className="font-techno text-[11px] text-neon-lime tracking-[0.3em] uppercase flex items-center gap-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-lime animate-pulse inline-block" />
            Available for work
          </span>
        </div>
      </div>

      <div className="flex-1" />

      {/* name */}
      <div>
        <div ref={lineRef} className="w-full h-px bg-white/15 mb-6 origin-left" />
        <div ref={nameRef}>
          <div className="overflow-hidden leading-[0.86]">
            <div className="font-display font-bold text-white text-glow-cyan leading-[0.86]" style={{ fontSize: 'clamp(3.2rem, 9vw, 10rem)' }}>
              USMAN
            </div>
          </div>
          <div className="overflow-hidden leading-[0.86]">
            <div className="font-display font-bold text-white text-glow-cyan leading-[0.86]" style={{ fontSize: 'clamp(3.2rem, 9vw, 10rem)' }}>
              HAIDER<span className="text-neon-magenta text-glow-magenta">.</span>
            </div>
          </div>
        </div>

        <div ref={bottomRef} className="flex justify-between items-end mt-8 flex-wrap gap-y-3">
          <span className="font-techno text-[11px] text-white/40 tracking-[0.2em]">© 2026</span>
          <p className="font-techno text-[11px] text-white/40 tracking-[0.2em] hidden sm:block text-center">
            Currently at&nbsp;<span className="text-neon-cyan">Ticketly.pk</span>
          </p>
          <div className="flex items-center gap-x-3">
            <span className="font-techno text-[11px] text-white/40 tracking-[0.3em] uppercase">Scroll</span>
            <div className="flex flex-col items-center gap-y-1">
              <div className="w-px h-6 bg-white/25" />
              <div className="w-1 h-1 rounded-full bg-neon-cyan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(Hero)
