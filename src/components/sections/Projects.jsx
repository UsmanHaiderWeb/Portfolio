import { memo, useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import Eyebrow from '../ui/Eyebrow'
import NeonText from '../ui/NeonText'
import { PROJECTS } from '../../data/projects'

const Projects = () => {
  const titleRef = useRef()
  const listRef = useRef()
  const previewRef = useRef()
  const xTo = useRef()
  const yTo = useRef()

  useGSAP(() => {
    gsap.from(titleRef.current.children, {
      y: 24,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: titleRef.current, start: 'top 82%', once: true },
    })

    const rows = listRef.current.querySelectorAll('.project-row')
    gsap.from(rows, {
      y: 20,
      opacity: 0,
      stagger: 0.07,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: { trigger: listRef.current, start: 'top 78%', once: true },
    })

    xTo.current = gsap.quickTo(previewRef.current, 'x', { duration: 0.45, ease: 'power3.out' })
    yTo.current = gsap.quickTo(previewRef.current, 'y', { duration: 0.45, ease: 'power3.out' })
  })

  const handleMouseMove = (e) => {
    if (!xTo.current) return
    const rect = listRef.current.getBoundingClientRect()
    xTo.current(e.clientX - rect.left + 24)
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
    <section id="projects" className="relative w-full px-8 mobile:px-5 micro:px-3 py-28 border-t border-white/10">
      <div ref={titleRef} className="mb-12">
        <Eyebrow index="04" className="mb-10">Projects</Eyebrow>
        <NeonText glow="magenta" className="leading-none" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}>
          Selected Work
        </NeonText>
      </div>

      <div ref={listRef} className="relative" onMouseMove={handleMouseMove}>
        <div
          ref={previewRef}
          className="absolute z-10 rounded-sm pointer-events-none opacity-0 border border-white/10"
          style={{ width: '240px', height: '160px', top: 0, left: 0, scale: 0.92, boxShadow: '0 0 40px rgba(6,182,212,0.25)' }}
        />

        {PROJECTS.map((project) => (
          <a
            key={project.index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-row group flex items-center justify-between py-6 border-t border-white/10 gap-x-6 transition-colors duration-200 hover:border-neon-cyan/40"
            onMouseEnter={() => showPreview(project.color)}
            onMouseLeave={hidePreview}
          >
            <div className="flex items-baseline gap-x-5 min-w-0">
              <span className="font-techno text-[11px] text-white/35 tracking-[0.2em] flex-shrink-0">{project.index}</span>
              <div className="min-w-0">
                <NeonText as="h3" glow="none" className="leading-none group-hover:text-neon-cyan group-hover:text-glow-cyan transition-all duration-300 truncate" style={{ fontSize: 'clamp(1.2rem, 3vw, 2.2rem)' }}>
                  {project.name}
                </NeonText>
                <p className="text-[12px] font-techno text-white/40 mt-1 hidden sm:block">{project.description}</p>
              </div>
            </div>

            <div className="flex items-center gap-x-6 flex-shrink-0">
              <div className="hidden sm:flex items-center gap-x-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-techno text-[10px] text-white/40 tracking-[0.2em] uppercase border border-white/10 px-2 py-1 rounded-sm group-hover:border-white/25 transition-colors duration-200">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="font-techno text-[11px] text-white/40 tracking-[0.2em]">{project.year}</span>
              <span className="text-white/40 group-hover:text-neon-cyan transition-colors duration-300 text-[18px] leading-none">↗</span>
            </div>
          </a>
        ))}
        <div className="border-t border-white/10" />
      </div>
    </section>
  )
}

export default memo(Projects)
