import React, { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HandleResume from '../HandleResume'

const LandingPage = () => {
  const container = useRef()

  // Intro reveal, timed to hand off from the loader curtain (bars open ~3.8s).
  // 1) headline lines rise out from behind their masks
  // 2) everything else cascades in (fade + rise, staggered)
  useGSAP(() => {
    // The curtain (LoaderPart2) has more bars on wider screens, so its
    // staggered open finishes later there -> hand off a touch later too.
    const w = window.innerWidth
    const introDelay = w >= 800 ? 4.4 : w >= 551 ? 4.25 : 4.15
    const tl = gsap.timeline({ delay: introDelay })
    tl.from('.reveal-line', {
      yPercent: 110,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power4.out',
    })
    .from('.reveal-up', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
    }, '-=0.5')
  }, { scope: container })

  return (
    <div ref={container} className='min-h-screen w-full flex justify-center items-center relative flex-col'>
      <h1 className='reveal-up text-[17px] mb-2 mobile:hidden micro:hidden'>I'm Usman Haider</h1>
      <div className='text-[60px] leading-[60px] tablet:text-[55px] tablet:leading-[55px] mini:text-[47px] mini:leading-[47px] mobile:text-[40px] mobile:leading-[40px] micro:text-[36px] micro:leading-[36px] relative mix-blend-difference'>
        <div className='overflow-hidden'>
          <h1 className='reveal-line text-center font-["rej"] mix-blend-difference'>FullStack</h1>
        </div>
        <div className='overflow-hidden'>
          <h1 className='reveal-line text-center font-["rej"] mix-blend-difference'>Mern Developer</h1>
        </div>
      </div>
      <p className='reveal-up my-3 w-[500px] tablet:w-[80vw] mini:w-[85vw] mobile:w-[90vw] micro:w-[93vw] text-center text-[18px]'>I focus on creating extreme experiences in my websites. I can create different websites such as ecommerce, animated, social media app, music player etc.</p>
      <div className='reveal-up'>
        <HandleResume rounded='xl' />
      </div>
      <div className='reveal-up absolute left-10 bottom-5 mini:left-5 mobile:left-5 micro:left-3 micro:bottom-2 opacity-75'>
        <h4 className='font-["rej"] text-[17px]'>Usman Haider</h4>
        <p className='w-80 mobile:w-64 micro:w-[80vw] micro:text-[13px] mobile:text-[14px] sm:my-[6px]'>I'm a web developer, seeking for an internship to kick start my job career. I am very dedicated to my tasks.</p>
      </div>
      <div className='reveal-up absolute right-10 bottom-10 opacity-75'>
        <p className='text-[14px] text-right hidden sm:block lgtab:block'>Scroll Down <br /> To See Magic</p>
      </div>
    </div>
  )
}

export default memo(LandingPage)
