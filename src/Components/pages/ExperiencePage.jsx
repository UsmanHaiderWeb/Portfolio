import React, { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const JOBS = [
  {
    index: '01',
    role: 'Frontend Engineer',
    company: 'Ticketly.pk',
    period: '2024 — Present',
    current: true,
    bullets: [
      'Architected and led the entire frontend ecosystem from the ground up.',
      'Built modular portal systems maintaining consistent 60fps across all devices.',
      'Established component libraries, design systems, and frontend standards.',
      'Collaborated directly with product and backend teams to ship production features.',
    ],
  },
  {
    index: '02',
    role: 'Frontend Developer',
    company: 'Freelance',
    period: '2022 — 2024',
    current: false,
    bullets: [
      'Delivered 5+ client projects spanning e-commerce, SaaS dashboards, and landing pages.',
      'Built performant React applications with GSAP animations and Tailwind CSS.',
      'Handled full project lifecycle — scoping, design implementation, and deployment.',
    ],
  },
  {
    index: '03',
    role: 'Junior Web Developer',
    company: 'Self-directed',
    period: '2020 — 2022',
    current: false,
    bullets: [
      'Learned and applied modern web technologies through real project builds.',
      'Developed foundational skills in React, JavaScript, and responsive design.',
      'Built personal projects focusing on animation and UI/UX quality.',
    ],
  },
]

const JobRow = ({ job }) => {
  const rowRef = useRef()

  useGSAP(() => {
    gsap.from(rowRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: rowRef.current,
        start: 'top 82%',
        once: true,
      },
    })
  }, { scope: rowRef })

  return (
    <div
      ref={rowRef}
      className='group grid sm:grid-cols-[18%_82%] gap-x-12 gap-y-4 py-10 border-t border-zinc-800'
    >
      {/* Left — index + period */}
      <div className='flex sm:flex-col justify-between sm:justify-start gap-y-2 pt-1'>
        <span className='font-mono text-[11px] text-muted tracking-[0.2em]'>
          {job.index}
        </span>
        <span className='font-mono text-[11px] text-muted tracking-widest whitespace-nowrap'>
          {job.period}
        </span>
        {job.current && (
          <span className='hidden sm:inline-flex items-center gap-x-1.5 font-mono text-[10px] text-accent tracking-widest uppercase mt-1'>
            <span className='w-1 h-1 rounded-full bg-accent animate-pulse inline-block' />
            Current
          </span>
        )}
      </div>

      {/* Right — role, company, bullets */}
      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-wrap items-baseline gap-x-4 gap-y-1'>
          <h3
            className='font-rej text-white leading-none group-hover:text-accent transition-colors duration-300'
            style={{ fontSize: 'clamp(1.4rem, 2.8vw, 2rem)' }}
          >
            {job.role}
          </h3>
          <span className='font-mono text-[12px] text-muted tracking-widest uppercase'>
            {job.company}
          </span>
          {job.current && (
            <span className='sm:hidden inline-flex items-center gap-x-1.5 font-mono text-[10px] text-accent tracking-widest uppercase'>
              <span className='w-1 h-1 rounded-full bg-accent animate-pulse inline-block' />
              Current
            </span>
          )}
        </div>

        <ul className='flex flex-col gap-y-2'>
          {job.bullets.map((b, i) => (
            <li key={i} className='flex items-start gap-x-3 text-[13px] text-zinc-400 leading-relaxed font-sans'>
              <span className='text-accent mt-[5px] flex-shrink-0 text-[8px]'>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const ExperiencePage = () => {
  const titleRef = useRef()

  useGSAP(() => {
    gsap.from(titleRef.current.children, {
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 82%',
        once: true,
      },
    })
  })

  return (
    <section
      id='experience'
      className='w-full px-8 mobile:px-5 micro:px-3 py-24 border-t border-zinc-800'
    >
      {/* Section label + title */}
      <div ref={titleRef} className='mb-4'>
        <span className='font-mono text-[10px] text-muted tracking-[0.2em] uppercase block mb-10'>
          03 / Work
        </span>
        <h2
          className='font-rej text-white leading-none'
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
        >
          Experience
        </h2>
      </div>

      {/* Job rows */}
      <div className='mt-12'>
        {JOBS.map(job => (
          <JobRow key={job.index} job={job} />
        ))}
      </div>

      {/* Closing border */}
      <div className='border-t border-zinc-800' />
    </section>
  )
}

export default memo(ExperiencePage)
