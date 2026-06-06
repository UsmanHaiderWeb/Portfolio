import React, { memo, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 2,  suffix: '',    label: 'Companies'          },
  { value: 5,  suffix: '+',   label: 'Clients Delivered'  },
  { value: 60, suffix: 'fps', label: 'Performance Target' },
  { value: 2,  suffix: 'yrs', label: 'Experience'         },
]

const Stat = ({ value, suffix, label }) => {
  const numRef  = useRef()
  const itemRef = useRef()

  useGSAP(() => {
    const obj = { val: 0 }
    gsap.to(obj, {
      val: value,
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: itemRef.current,
        start: 'top 85%',
        once: true,
      },
      onUpdate() {
        if (numRef.current) {
          numRef.current.textContent = Math.round(obj.val) + suffix
        }
      },
    })
  }, { scope: itemRef })

  return (
    <div ref={itemRef} className='flex flex-col gap-y-1'>
      <span
        ref={numRef}
        className='font-rej text-white leading-none'
        style={{ fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)' }}
      >
        0{suffix}
      </span>
      <span className='text-[10px] font-mono text-muted tracking-[0.2em] uppercase'>
        {label}
      </span>
    </div>
  )
}

const HeroAbout = () => {
  const bioRef   = useRef()
  const statsRef = useRef()

  useGSAP(() => {
    // Bio block children fade up
    gsap.from(bioRef.current.children, {
      y: 20,
      opacity: 0,
      stagger: 0.09,
      duration: 0.85,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: bioRef.current,
        start: 'top 82%',
        once: true,
      },
    })

    // Stats grid stagger
    gsap.from(statsRef.current.children, {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 82%',
        once: true,
      },
    })
  })

  return (
    <section
      id='about'
      className='w-full px-8 mobile:px-5 micro:px-3 py-24 border-t border-zinc-800'
    >
      {/* Section label */}
      <span className='font-mono text-[10px] text-muted tracking-[0.2em] uppercase mb-10 block'>
        02 / About
      </span>

      {/* Two-column editorial grid */}
      <div className='grid sm:grid-cols-[45%_55%] gap-x-16 gap-y-14'>

        {/* Left — bio */}
        <div ref={bioRef} className='flex flex-col gap-y-6'>
          <h2
            className='font-rej text-white leading-none'
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.5rem)' }}
          >
            About
          </h2>

          <p className='font-sans text-[14px] text-zinc-400 leading-relaxed max-w-[400px]'>
            Frontend developer based in Lahore, building high-performance interfaces
            for production systems. Currently leading the frontend ecosystem at
            Ticketly.pk — architecting modular portal systems that sustain 60fps
            across all devices.
          </p>

          <span className='font-mono text-[11px] text-accent tracking-widest uppercase flex items-center gap-x-2'>
            <span className='w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block' />
            Currently at Ticketly.pk
          </span>
        </div>

        {/* Right — stats */}
        <div
          ref={statsRef}
          className='grid grid-cols-2 gap-x-8 gap-y-10 sm:pt-2'
        >
          {STATS.map(s => (
            <Stat key={s.label} {...s} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default memo(HeroAbout)
