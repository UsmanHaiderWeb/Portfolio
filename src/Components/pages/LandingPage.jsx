import React, { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const LandingPage = () => {
  const topRightRef = useRef()
  const nameRef     = useRef()
  const bottomRef   = useRef()
  const lineRef     = useRef()

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    // Top-right meta fades down
    tl.from(topRightRef.current.children, {
      y: -16,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
    })

    // Name slides up from below
    tl.from(nameRef.current.children, {
      yPercent: 105,
      duration: 1.1,
      stagger: 0.08,
      ease: 'expo.out',
    }, '-=0.4')

    // Divider line expands
    tl.from(lineRef.current, {
      scaleX: 0,
      transformOrigin: 'left center',
      duration: 0.9,
      ease: 'expo.inOut',
    }, '-=0.5')

    // Bottom row fades up
    tl.from(bottomRef.current.children, {
      opacity: 0,
      y: 10,
      stagger: 0.08,
      duration: 0.7,
      ease: 'power2.out',
    }, '-=0.4')
  })

  return (
    <div className='relative w-full min-h-screen flex flex-col px-8 mobile:px-5 micro:px-3 pt-10 pb-8'>

      {/* ── Top-right: role + status ── */}
      <div
        ref={topRightRef}
        className='flex justify-between items-start w-full'
      >
        {/* Top-left: index */}
        <span className='font-mono text-[11px] text-muted tracking-[0.2em]'>
          Portfolio&nbsp;—&nbsp;2026
        </span>

        {/* Top-right: role + available */}
        <div className='flex flex-col items-end gap-y-2'>
          <span className='font-mono text-[11px] text-zinc-400 tracking-widest uppercase'>
            Frontend Developer
          </span>
          <span className='font-mono text-[11px] text-accent tracking-widest uppercase flex items-center gap-x-1.5'>
            <span className='w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block' />
            Available for work
          </span>
        </div>
      </div>

      {/* ── Spacer — this is where the tension lives ── */}
      <div className='flex-1' />

      {/* ── Name block pinned to bottom-left ── */}
      <div>
        {/* Thin rule above name */}
        <div ref={lineRef} className='w-full h-px bg-zinc-800 mb-6 origin-left' />

        {/* Name lines */}
        <div ref={nameRef}>
          <div className='overflow-hidden leading-[0.88]'>
            <div
              className='font-rej text-white leading-[0.88] block'
              style={{ fontSize: 'clamp(3.8rem, 10vw, 11rem)' }}
            >
              Usman
            </div>
          </div>
          <div className='overflow-hidden leading-[0.88]'>
            <div
              className='font-rej text-white leading-[0.88] block'
              style={{ fontSize: 'clamp(3.8rem, 10vw, 11rem)' }}
            >
              Haider<span className='text-accent'>.</span>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          ref={bottomRef}
          className='flex justify-between items-end mt-8 flex-wrap gap-y-3'
        >
          <span className='font-mono text-[11px] text-muted tracking-widest'>
            © 2026
          </span>

          <p className='font-mono text-[11px] text-muted tracking-widest hidden sm:block text-center'>
            Currently at&nbsp;
            <span className='text-zinc-300'>Ticketly.pk</span>
          </p>

          <div className='flex items-center gap-x-3'>
            <span className='font-mono text-[11px] text-muted tracking-widest uppercase'>
              Scroll
            </span>
            <div className='flex flex-col items-center gap-y-1'>
              <div className='w-px h-6 bg-zinc-700' />
              <div className='w-1 h-1 rounded-full bg-zinc-600' />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default memo(LandingPage)
