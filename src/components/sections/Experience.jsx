import { memo, useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import Eyebrow from '../ui/Eyebrow'
import NeonText from '../ui/NeonText'
import { JOBS } from '../../data/experience'

const JobRow = ({ job }) => {
  const rowRef = useRef()

  useGSAP(
    () => {
      gsap.from(rowRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: rowRef.current, start: 'top 82%', once: true },
      })
    },
    { scope: rowRef },
  )

  return (
    <div
      ref={rowRef}
      className="group grid sm:grid-cols-[18%_82%] gap-x-12 gap-y-4 py-10 border-t border-white/10 relative"
    >
      {/* neon left rail on hover */}
      <span className="absolute left-0 top-10 bottom-10 w-px bg-neon-cyan/0 group-hover:bg-neon-cyan/70 transition-colors duration-300" />

      <div className="flex sm:flex-col justify-between sm:justify-start gap-y-2 pt-1">
        <span className="font-techno text-[11px] text-white/40 tracking-[0.2em]">{job.index}</span>
        <span className="font-techno text-[11px] text-white/40 tracking-[0.2em] whitespace-nowrap">{job.period}</span>
        {job.current && (
          <span className="hidden sm:inline-flex items-center gap-x-1.5 font-techno text-[10px] text-neon-lime tracking-[0.2em] uppercase mt-1">
            <span className="w-1 h-1 rounded-full bg-neon-lime animate-pulse inline-block" />
            Current
          </span>
        )}
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <NeonText as="h3" glow="none" className="leading-none group-hover:text-glow-cyan group-hover:text-neon-cyan transition-all duration-300" style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}>
            {job.role}
          </NeonText>
          <span className="font-techno text-[12px] text-white/45 tracking-[0.2em] uppercase">{job.company}</span>
        </div>

        <ul className="flex flex-col gap-y-2">
          {job.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-x-3 text-[14px] text-white/55 leading-relaxed font-sans">
              <span className="text-neon-cyan mt-[6px] flex-shrink-0 text-[8px]">▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const Experience = () => {
  const titleRef = useRef()

  useGSAP(() => {
    gsap.from(titleRef.current.children, {
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: titleRef.current, start: 'top 82%', once: true },
    })
  })

  return (
    <section id="experience" className="relative w-full px-8 mobile:px-5 micro:px-3 py-28 border-t border-white/10">
      <div ref={titleRef} className="mb-4">
        <Eyebrow index="03" className="mb-10">Work</Eyebrow>
        <NeonText className="leading-none" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}>
          Experience
        </NeonText>
      </div>

      <div className="mt-12">
        {JOBS.map((job) => (
          <JobRow key={job.index} job={job} />
        ))}
      </div>
      <div className="border-t border-white/10" />
    </section>
  )
}

export default memo(Experience)
