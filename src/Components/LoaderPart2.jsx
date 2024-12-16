import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { memo, useRef } from 'react'

const LoaderPart2 = (i) => {
    const loader = useRef();
    useGSAP(() => {
        gsap.to(loader.current.querySelectorAll("div"), {
            y: `${i.plus}150%`,
            stagger: 0.08,
            duration: 1,
            delay: 2.5,
        })
    })
return (
    <div ref={loader} className='w-full h-full absolute top-0 left-0 flex justify-start items-center flex-shrink-0 whitespace-nowrap flex-nowrap overflow-hidden pointer-events-none'>
        <div className='w-20 h-full bg-black'></div>
        <div className='w-20 h-full bg-black'></div>
        <div className='w-20 h-full bg-black'></div>
        <div className='w-20 h-full bg-black'></div>
        <div className='w-20 h-full bg-black'></div>
        <div className='w-20 h-full bg-black'></div>
        <div className='w-20 h-full bg-black'></div>
        <div className='w-20 h-full bg-black micro:hidden mobile:hidden'></div>
        <div className='w-20 h-full bg-black micro:hidden mobile:hidden'></div>
        <div className='w-20 h-full bg-black micro:hidden mobile:hidden'></div>
        <div className='w-20 h-full bg-black hidden sm:block'></div>
        <div className='w-20 h-full bg-black hidden sm:block'></div>
        <div className='w-20 h-full bg-black hidden sm:block'></div>
        <div className='w-20 h-full bg-black hidden sm:block'></div>
        <div className='w-20 h-full bg-black hidden sm:block'></div>
        <div className='w-20 h-full bg-black hidden sm:block'></div>
        <div className='w-20 h-full bg-black hidden sm:block'></div>
        <div className='w-20 h-full bg-black hidden sm:block'></div>
    </div>
  )
}

export default memo(LoaderPart2)