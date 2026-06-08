import { memo, useRef } from 'react'
import { gsap, useGSAP } from '../../lib/gsap'
import Eyebrow from '../ui/Eyebrow'
import NeonText from '../ui/NeonText'
import { SKILLS } from '../../data/skills'

const SkillGroup = ({ group }) => {
  const ref = useRef()

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y: 30,
        opacity: 0,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
      })
    },
    { scope: ref },
  )

  return (
    <div ref={ref} className="py-10 border-t border-white/10">
      <div className="grid sm:grid-cols-[18%_82%] gap-x-12 gap-y-5">
        <div className="flex sm:flex-col gap-x-4 gap-y-1 pt-0.5">
          <span className="font-techno text-[11px] text-white/35 tracking-[0.2em]">{group.index}</span>
          <NeonText as="h3" glow="none" className="leading-none" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)' }}>
            {group.category}
          </NeonText>
        </div>

        <div className="flex flex-wrap gap-2">
          {group.tags.map((tag) => (
            <span
              key={tag}
              data-hover
              className="font-techno text-[11px] text-white/55 tracking-[0.2em] uppercase border border-white/10 px-3 py-1.5 rounded-sm transition-all duration-200 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_14px_rgba(6,182,212,0.35)] cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
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
    <section id="skills" className="relative w-full px-8 mobile:px-5 micro:px-3 py-28 border-t border-white/10">
      <div ref={titleRef} className="mb-4">
        <Eyebrow index="05" className="mb-10">Skills</Eyebrow>
        <NeonText glow="lime" className="leading-none" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)' }}>
          Expertise
        </NeonText>
      </div>

      <div className="mt-12">
        {SKILLS.map((group) => (
          <SkillGroup key={group.index} group={group} />
        ))}
      </div>
      <div className="border-t border-white/10" />
    </section>
  )
}

export default memo(Skills)
