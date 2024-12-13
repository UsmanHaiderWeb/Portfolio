import React, { memo } from 'react'

const Page5 = () => {
  return (
    <div className='bg-gradient-to-b from-[#18181B] to-[#09090B] min-h-[500px]'>
      <div className='flex justify-between items-center mx-[4.5vw] border-b-[blue] border-b-[1px] border-b-solid pb-7 lgtab:mb-20 tablet:mb-16 sm:mb-8'>
        <h1 className='w-full lg:w-[50%] sm:w-[70%] lgtab:w-[85%] lg:text-[50px] lg:leading-[60px] sm:text-[50px] sm:leading-[60px] lgtab:text-[45px] lgtab:leading-[55px] tablet:text-[40px] tablet:leading-[50px] mini:text-[36px] mini:leading-[43px] mobile:text-[32px] mobile:leading-[38px] micro:text-[28px] micro:leading-[33px] font-bold mini:text-center mobile:text-center micro:text-center font-["rej"]'>My Major Projects</h1>
          <p className='hidden lg:block w-[32%] text-[19px] leading-[25px] opacity-55'>These projects primarily focuses on the javascript and react concepts and understandings.</p>
      </div>
      <div className='columns-3 w-[1000px] mx-auto'>
        <img src="/ycdirectory.png" alt="ycdirectory" className='w-80 h-auto max-h-[600px] object-cover object-top' />
        <img src="/insta.png" alt="ochi" className='w-80 h-auto max-h-[600px] object-cover object-top mb-5' />
        <img src="/zentry.png" alt="ochi" className='w-80 h-auto max-h-[600px] object-cover object-top mb-5' />
        <img src="/domidex2.png" alt="ochi" className='w-80 h-auto max-h-[600px] object-cover object-top mb-5' />
        <img src="/portfolio.PNG" alt="ochi" className='w-80 h-auto max-h-[600px] object-cover object-top mb-5' />
        <img src="/altco1.png" alt="ochi" className='w-80 h-auto max-h-[600px] object-cover object-top mb-5' />
      </div>
    </div>
  )
}

export default memo(Page5)