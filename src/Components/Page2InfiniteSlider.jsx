import React, { memo } from 'react'

const Page2InfiniteSlider = () => {
  return (<>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5 mobile:gap-x-4 micro:gap-x-3'>
        <div className='text-[50px] leading-[70px] lgtab:text-[45px] lgtab:leading-[63px] tablet:text-[45px] tablet:leading-[63px] mini:text-[45px] mini:leading-[63px] mobile:text-[40px] mobile:leading-[55px] micro:text-[40px] micro:leading-[55px]'>frontend</div>
        <img src="/pinterest.webp" className='w-14 h-14 lgtab:w-13 lgtab:h-13 tablet:w-12 tablet:h-12 mini:w-12 mini:h-12 mobile:w-11 mobile:h-11 micro:w-10 micro:h-10 rounded-full object-cover object-center cursor-pointer' />
    </div>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5 mobile:gap-x-4 micro:gap-x-3'>
        <div className='text-[50px] leading-[70px] lgtab:text-[45px] lgtab:leading-[63px] tablet:text-[45px] tablet:leading-[63px] mini:text-[45px] mini:leading-[63px] mobile:text-[40px] mobile:leading-[55px] micro:text-[40px] micro:leading-[55px]'>javascript</div>
        <img src="/zentry.webp" className='w-14 h-14 lgtab:w-13 lgtab:h-13 tablet:w-12 tablet:h-12 mini:w-12 mini:h-12 mobile:w-11 mobile:h-11 micro:w-10 micro:h-10 rounded-full object-cover object-center cursor-pointer' onClick={() => location.href = 'https://ecommerce-react-usman.netlify.app/'} />
    </div>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5 mobile:gap-x-4 micro:gap-x-3'>
        <div className='text-[50px] leading-[70px] lgtab:text-[45px] lgtab:leading-[63px] tablet:text-[45px] tablet:leading-[63px] mini:text-[45px] mini:leading-[63px] mobile:text-[40px] mobile:leading-[55px] micro:text-[40px] micro:leading-[55px]'>webdev</div>
        <img src="/portfolio.webp" className='w-14 h-14 lgtab:w-13 lgtab:h-13 tablet:w-12 tablet:h-12 mini:w-12 mini:h-12 mobile:w-11 mobile:h-11 micro:w-10 micro:h-10 rounded-full object-cover object-center cursor-pointer' onClick={() => location.href = 'https://portfolio-clone-by-usman.netlify.app/'} />
    </div>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5 mobile:gap-x-4 micro:gap-x-3'>
        <div className='text-[50px] leading-[70px] lgtab:text-[45px] lgtab:leading-[63px] tablet:text-[45px] tablet:leading-[63px] mini:text-[45px] mini:leading-[63px] mobile:text-[40px] mobile:leading-[55px] micro:text-[40px] micro:leading-[55px]'>backend</div>
        <img src="/domidex2.webp" className='w-14 h-14 lgtab:w-13 lgtab:h-13 tablet:w-12 tablet:h-12 mini:w-12 mini:h-12 mobile:w-11 mobile:h-11 micro:w-10 micro:h-10 rounded-full object-cover object-center cursor-pointer' onClick={() => location.href = 'https://usman-ochi-design.netlify.app/'} />
    </div>
    <div className='flex justify-center items-center flex-shrink-0 flex-nowrap gap-x-5 mobile:gap-x-4 micro:gap-x-3'>
        <div className='text-[50px] leading-[70px] lgtab:text-[45px] lgtab:leading-[63px] tablet:text-[45px] tablet:leading-[63px] mini:text-[45px] mini:leading-[63px] mobile:text-[40px] mobile:leading-[55px] micro:text-[40px] micro:leading-[55px]'>greensock</div>
        <img src="/brainwave.webp" className='w-14 h-14 lgtab:w-13 lgtab:h-13 tablet:w-12 tablet:h-12 mini:w-12 mini:h-12 mobile:w-11 mobile:h-11 micro:w-10 micro:h-10 rounded-full object-cover object-center cursor-pointer' />
    </div>
</>)
}

export default memo(Page2InfiniteSlider)