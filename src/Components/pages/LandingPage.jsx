import React , { memo } from 'react'
import HandleResume from '../HandleResume'

const LandingPage = () => {
  return (
    <div className='min-h-screen w-full flex justify-center items-center relative flex-col'>
      <h1 className='text-[17px] mb-2 mobile:hidden micro:hidden'>I'm Usman Haider</h1>
      <div className='text-[60px] leading-[60px] tablet:text-[55px] tablet:leading-[55px] mini:text-[47px] mini:leading-[47px] mobile:text-[40px] mobile:leading-[40px] micro:text-[36px] micro:leading-[36px] relative mix-blend-difference'>
        <h1 className='text-center font-["rej"] mix-blend-difference'>FullStack</h1>
        <h1 className='text-center font-["rej"] mix-blend-difference'>Mern Developer</h1>
      </div>
      <p className='my-3 w-[500px] tablet:w-[80vw] mini:w-[85vw] mobile:w-[90vw] micro:w-[93vw] text-center text-[18px]'>I focus on creating extreme experiences in my websites. I can create different websites such as ecommerce, animated, social media app, music player etc.</p>
      <HandleResume rounded='xl' />
      <div className='absolute left-10 bottom-5 mini:left-5 mobile:left-5 micro:left-3 micro:bottom-2 opacity-75'>
        <h4 className='font-["rej"] text-[17px]'>Usman Haider</h4>
        <p className='w-80 mobile:w-64 micro:w-[80vw] micro:text-[13px] mobile:text-[14px] sm:my-[6px]'>I'm a web developer, seeking for an internship to kick start my job career. I am very dedicated to my tasks.</p>
      </div>
      <div className='absolute right-10 bottom-10 opacity-75'>
        <p className='text-[14px] text-right hidden sm:block lgtab:block'>Scroll Down <br /> To See Magic</p>
      </div>
    </div>
  )
}

export default memo(LandingPage)