import React, { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HandleResume from './HandleResume'

const Header = (i) => {
  const resumeBall = useRef()

  // Drop the resume ball in with a bounce, timed to the intro hand-off
  // (matches LandingPage's responsive curtain delay).
  useGSAP(() => {
    const w = window.innerWidth
    const introDelay = w >= 800 ? 4.4 : w >= 551 ? 4.25 : 4.15
    gsap.from(resumeBall.current, {
      y: -220,
      duration: 1.2,
      delay: introDelay,
      ease: 'bounce.out',
    })
  })

  return (
    <header className='fixed top-0 left-0 w-full z-[520]'>
        <nav className='flex justify-between items-center px-10 mobile:px-6 micro:px-2'>
            <div onClick={() => window.scrollTo(0, 0)}>
              <img src="/UsmanNav.webp" alt='Logo' className='w-28 micro:w-24 mix-blend-difference' />
            </div>
            <div ref={resumeBall} className='flex justify-center items-center gap-x-8 text-[17px] micro:text-[15px] leading-[20px]'>
              <HandleResume rounded='full' />
            </div>
        </nav>
    </header>
  )
}

export default memo(Header)
