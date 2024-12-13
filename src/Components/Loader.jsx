import { useGSAP } from '@gsap/react'
import React, { memo, useRef } from 'react'
import gsap from 'gsap'
import LoaderPart2 from './LoaderPart2'


const Loader = () => {
    const loader = useRef()
    const loader1 = useRef()


    useGSAP(() => {
        gsap.from(loader1.current.querySelectorAll("span"), {
            opacity: 0,
            x: 250,
            stagger: 0.15,
            duration: 2,
            delay: 2,
            ease: "elastic.out(1, 0.5)"
        })
        gsap.to(loader1.current.querySelectorAll("span"), {
            opacity: 0,
            stagger: 0.15,
            duration: 2,
            delay: 3.2,
            ease: "elastic.out(1, 0.5)"
        })
    })

return (
    <div ref={loader} className='fixed top-0 left-0 z-[5000] w-full h-screen pointer-events-none'>
        <LoaderPart2 plus="+" />
        <LoaderPart2 plus="-" />
        <div ref={loader1} className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-[25px] pointer-events-none'><span>I'm</span>&nbsp;&nbsp;<span>Usman</span>&nbsp;&nbsp;<span> Haider </span></div>
    </div>
  )
}

export default memo(Loader)