import React, { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const PROJECTS = [
  {
    index: '01',
    name: 'Ticketly.pk',
    description: 'Event ticketing platform — full frontend ecosystem',
    tags: ['React', 'Tailwind', 'Node.js'],
    year: '2024',
    link: 'https://ticketly.pk',
    color: 'linear-gradient(135deg, #0891b2 0%, #0a0a0a 100%)',
  },
  {
    index: '02',
    name: 'AnimaUI',
    description: 'Component animation library built on GSAP',
    tags: ['React', 'GSAP', 'Vite'],
    year: '2024',
    link: '#',
    color: 'linear-gradient(135deg, #7c3aed 0%, #0a0a0a 100%)',
  },
  {
    index: '03',
    name: 'ShopFlow',
    description: 'E-commerce admin dashboard with real-time analytics',
    tags: ['React', 'Tailwind', 'Firebase'],
    year: '2023',
    link: '#',
    color: 'linear-gradient(135deg, #059669 0%, #0a0a0a 100%)',
  },
  {
    index: '04',
    name: 'Trackify',
    description: 'Project management app with drag-and-drop boards',
    tags: ['React', 'Node.js', 'MongoDB'],
    year: '2023',
    link: '#',
    color: 'linear-gradient(135deg, #d97706 0%, #0a0a0a 100%)',
  },
  {
    index: '05',
    name: 'Melodix',
    description: 'Music streaming interface with visualizer',
    tags: ['React', 'Web Audio API', 'GSAP'],
    year: '2023',
    link: '#',
    color: 'linear-gradient(135deg, #db2777 0%, #0a0a0a 100%)',
  },
  {
    index: '06',
    name: 'ChatSpace',
    description: 'Real-time social platform with live messaging',
    tags: ['React', 'Socket.io', 'Node.js'],
    year: '2022',
    link: '#',
    color: 'linear-gradient(135deg, #ea580c 0%, #0a0a0a 100%)',
  },
  {
    index: '07',
    name: 'DevFolio',
    description: 'Portfolio builder for developers with live preview',
    tags: ['React', 'Vite', 'Tailwind'],
    year: '2022',
    link: '#',
    color: 'linear-gradient(135deg, #4f46e5 0%, #0a0a0a 100%)',
  },
]

const ProjectsPage = () => {
  const titleRef   = useRef()
  const listRef    = useRef()
  const previewRef = useRef()
  const xTo        = useRef()
  const yTo        = useRef()

  useGSAP(() => {
    // Title fade-up
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

    // Rows stagger
    const rows = listRef.current.querySelectorAll('.project-row')
    gsap.from(rows, {
      y: 20,
      opacity: 0,
      stagger: 0.07,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: listRef.current,
        start: 'top 78%',
        once: true,
      },
    })

    // Floating preview — smooth follow
    xTo.current = gsap.quickTo(previewRef.current, 'x', { duration: 0.45, ease: 'power3.out' })
    yTo.current = gsap.quickTo(previewRef.current, 'y', { duration: 0.45, ease: 'power3.out' })
  })

  const handleMouseMove = (e) => {
    const rect = listRef.current.getBoundingClientRect()
    xTo.current(e.clientX - rect.left + 20)
    yTo.current(e.clientY - rect.top - 80)
  }

  const showPreview = (color) => {
    previewRef.current.style.background = color
    gsap.to(previewRef.current, { opacity: 1, scale: 1, duration: 0.3, ease: 'power2.out' })
  }

  const hidePreview = () => {
    gsap.to(previewRef.current, { opacity: 0, scale: 0.92, duration: 0.25, ease: 'power2.in' })
  }

  return (
    <section
      id='projects'
      className='w-full px-8 mobile:px-5 micro:px-3 py-24 border-t border-zinc-800'
    >
      {/* Section label + title */}
      <div ref={titleRef} className='mb-12'>
        <span className='font-mono text-[10px] text-muted tracking-[0.2em] uppercase block mb-10'>
          04 / Projects
        </span>
        <h2
          className='font-rej text-white leading-none'
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
        >
          Selected Work
        </h2>
      </div>

      {/* Project list */}
      <div
        ref={listRef}
        className='relative'
        onMouseMove={handleMouseMove}
      >
        {/* Floating preview card */}
        <div
          ref={previewRef}
          className='absolute z-10 rounded-sm pointer-events-none opacity-0'
          style={{
            width: '240px',
            height: '160px',
            top: 0,
            left: 0,
            scale: 0.92,
          }}
        />

        {PROJECTS.map((project) => (
          <a
            key={project.index}
            href={project.link}
            target='_blank'
            rel='noopener noreferrer'
            className='project-row group flex items-center justify-between py-6 border-t border-zinc-800 gap-x-6 transition-colors duration-200 hover:border-zinc-600'
            onMouseEnter={() => showPreview(project.color)}
            onMouseLeave={hidePreview}
          >
            {/* Left — index + name */}
            <div className='flex items-baseline gap-x-5 min-w-0'>
              <span className='font-mono text-[11px] text-muted tracking-widest flex-shrink-0'>
                {project.index}
              </span>
              <div className='min-w-0'>
                <h3
                  className='font-rej text-white leading-none group-hover:text-accent transition-colors duration-300 truncate'
                  style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}
                >
                  {project.name}
                </h3>
                <p className='text-[12px] font-mono text-muted mt-1 hidden sm:block'>
                  {project.description}
                </p>
              </div>
            </div>

            {/* Right — tags + year + arrow */}
            <div className='flex items-center gap-x-6 flex-shrink-0'>
              <div className='hidden sm:flex items-center gap-x-2'>
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className='font-mono text-[10px] text-muted tracking-widest uppercase border border-zinc-800 px-2 py-1 rounded-sm group-hover:border-zinc-600 transition-colors duration-200'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className='font-mono text-[11px] text-muted tracking-widest'>
                {project.year}
              </span>
              <span className='text-muted group-hover:text-accent transition-colors duration-300 text-[18px] leading-none'>
                ↗
              </span>
            </div>
          </a>
        ))}

        {/* Closing border */}
        <div className='border-t border-zinc-800' />
      </div>
    </section>
  )
}

export default memo(ProjectsPage)
