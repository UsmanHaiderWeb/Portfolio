import React, { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SKILLS = [
  {
    index: '01',
    category: 'Frontend',
    tags: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite'],
  },
  {
    index: '02',
    category: 'Animations',
    tags: ['GSAP', 'ScrollTrigger', 'Framer Motion', 'CSS Animations', 'Three.js'],
  },
  {
    index: '03',
    category: 'Backend',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Firebase', 'Socket.io'],
  },
  {
    index: '04',
    category: 'DevOps & Tools',
    tags: ['Git', 'GitHub', 'Vercel', 'Netlify', 'Docker', 'Figma', 'VS Code'],
  },
]

const SkillGroup = ({ group }) => {
  const ref = useRef()

  useGSAP(() => {
    gsap.from(ref.current, {
      y: 30,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 82%',
        once: true,
      },
    })
  }, { scope: ref })

  return (
    <div ref={ref} className='py-10 border-t border-zinc-800'>
      <div className='grid sm:grid-cols-[18%_82%] gap-x-12 gap-y-5'>

        {/* Left — index + category */}
        <div className='flex sm:flex-col gap-x-4 gap-y-1 pt-0.5'>
          <span className='font-mono text-[11px] text-muted tracking-[0.2em]'>
            {group.index}
          </span>
          <h3
            className='font-rej text-white leading-none'
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}
          >
            {group.category}
          </h3>
        </div>

        {/* Right — tags */}
        <div className='flex flex-wrap gap-2'>
          {group.tags.map(tag => (
            <span
              key={tag}
              className='font-mono text-[11px] text-zinc-400 tracking-widest uppercase border border-zinc-800 px-3 py-1.5 rounded-sm transition-all duration-200 hover:border-accent hover:text-accent hover:bg-accent/5 cursor-default'
            >
              {tag}
            </span>
          ))}
        </div>

      </div>
    </div>
  )
}

const SkillsPage = () => {
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
      id='skills'
      className='w-full px-8 mobile:px-5 micro:px-3 py-24 border-t border-zinc-800'
    >
      {/* Section label + title */}
      <div ref={titleRef} className='mb-4'>
        <span className='font-mono text-[10px] text-muted tracking-[0.2em] uppercase block mb-10'>
          05 / Skills
        </span>
        <h2
          className='font-rej text-white leading-none'
          style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
        >
          Expertise
        </h2>
      </div>

      {/* Skill groups */}
      <div className='mt-12'>
        {SKILLS.map(group => (
          <SkillGroup key={group.index} group={group} />
        ))}
      </div>

      <div className='border-t border-zinc-800' />
    </section>
  )
}

export default memo(SkillsPage)
