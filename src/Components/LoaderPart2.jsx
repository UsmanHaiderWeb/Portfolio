import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { memo, useRef } from 'react'

const LoaderPart2 = (i) => {
    const loader = useRef();
    useGSAP(() => {
        gsap.to(loader.current.querySelectorAll(".bar"), {
            y: `${i.plus}150%`,
            stagger: 0.08,
            duration: 1,
            delay: 3.8,
        })
    })
    const bars = [
        ...Array(7).fill(''),
        ...Array(3).fill('micro:hidden mobile:hidden'),
        ...Array(8).fill('hidden sm:block'),
    ]
return (
    <div ref={loader} className='w-full h-full absolute top-0 left-0 flex justify-start items-center flex-shrink-0 whitespace-nowrap flex-nowrap overflow-hidden pointer-events-none'>
        {bars.map((cls, idx) => (
            <div key={idx} className={`bar flex-1 h-full bg-black ${cls}`}></div>
        ))}
    </div>
  )
}

export default memo(LoaderPart2)