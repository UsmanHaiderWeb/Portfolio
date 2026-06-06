import React, { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const CONTACTS = [
  {
    label: 'Email',
    value: 'team@paymo.com.pk',
    link: 'mailto:team@paymo.com.pk',
  },
  {
    label: 'GitHub',
    value: 'UsmanHaiderWeb',
    link: 'https://github.com/UsmanHaiderWeb',
  },
  {
    label: 'LinkedIn',
    value: 'Usman Haider',
    link: 'https://linkedin.com/in/usman-haider',
  },
  {
    label: 'Location',
    value: 'Lahore, Pakistan',
    link: null,
  },
]

const Footer = () => {
  const ctaRef      = useRef()
  const cardsRef    = useRef()
  const bottomRef   = useRef()

  useGSAP(() => {
    // CTA heading
    gsap.from(ctaRef.current.children, {
      y: 30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: ctaRef.current,
        start: 'top 82%',
        once: true,
      },
    })

    // Contact cards
    gsap.from(cardsRef.current.children, {
      y: 20,
      opacity: 0,
      stagger: 0.07,
      duration: 0.75,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 82%',
        once: true,
      },
    })

    // Bottom row
    gsap.from(bottomRef.current.children, {
      opacity: 0,
      stagger: 0.06,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: bottomRef.current,
        start: 'top 92%',
        once: true,
      },
    })
  })

  return (
    <footer
      id='contact'
      className='w-full px-8 mobile:px-5 micro:px-3 pt-24 pb-8 border-t border-zinc-800 bg-surface'
    >
      {/* Section label */}
      <div ref={ctaRef}>
        <span className='font-mono text-[10px] text-muted tracking-[0.2em] uppercase block mb-10'>
          06 / Contact
        </span>

        {/* CTA heading */}
        <h2
          className='font-rej text-white leading-none mb-16'
          style={{ fontSize: 'clamp(3rem, 9vw, 9rem)' }}
        >
          Let's work<br />together.
        </h2>
      </div>

      {/* Contact cards */}
      <div
        ref={cardsRef}
        className='grid grid-cols-2 sm:grid-cols-4 border-t border-zinc-800'
      >
        {CONTACTS.map((c, i) => (
          <div
            key={c.label}
            className={`group flex flex-col gap-y-2 py-8 px-6 border-zinc-800 transition-colors duration-200 hover:bg-accent/[0.03]
              ${i !== 0 ? 'border-l' : ''}
              mobile:${i % 2 !== 0 ? 'border-l' : ''}
            `}
          >
            <span className='font-mono text-[10px] text-muted tracking-[0.2em] uppercase'>
              {c.label}
            </span>
            {c.link ? (
              <a
                href={c.link}
                target={c.link.startsWith('mailto') ? '_self' : '_blank'}
                rel='noopener noreferrer'
                className='font-mono text-[13px] text-zinc-300 group-hover:text-accent transition-colors duration-200 leading-snug break-all'
              >
                {c.value}
              </a>
            ) : (
              <span className='font-mono text-[13px] text-zinc-300 leading-snug'>
                {c.value}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        ref={bottomRef}
        className='flex justify-between items-center pt-8 border-t border-zinc-800 mt-0 flex-wrap gap-y-2'
      >
        <span className='font-mono text-[11px] text-muted tracking-widest'>
          © 2026 Usman Haider
        </span>
        <span className='font-mono text-[11px] text-muted tracking-widest'>
          Frontend Developer · Lahore
        </span>
        <a
          href='mailto:team@paymo.com.pk'
          className='font-mono text-[11px] text-muted tracking-widest hover:text-accent transition-colors duration-200'
        >
          team@paymo.com.pk ↗
        </a>
      </div>
    </footer>
  )
}

export default memo(Footer)
