import { useGSAP } from '@gsap/react'
import React, { memo, useRef, useState } from 'react'
import gsap from 'gsap'

const Page6 = () => {
    const page6Con = useRef()
    const skill = useRef()
    
    function scaleAnimation(a, b) {
        gsap.to(skill.current, {
            scale: a,
            ease: "ease.out.in",
            scrollTrigger: {
                trigger: page6Con.current,
                scroller: "body",
                start: 'top 0%',
                end: `top -${b}%`,
                scrub: 1,
                pin: true,
            }
        })
    }
    
    useGSAP(() => {
        if (window.innerWidth > 1500) {
            scaleAnimation(320, 700)
        } else if (window.innerWidth > 1100 && window.innerWidth < 1500) {
            scaleAnimation(265, 700)
        } else if (window.innerWidth > 801 && window.innerWidth < 1100) {
            scaleAnimation(240, 700)
        } else if (window.innerWidth > 700 && window.innerWidth < 800) {
            scaleAnimation(160, 700)
        } else if (window.innerWidth > 400 && window.innerWidth < 500) {
            scaleAnimation(120, 700)
        } else if (window.innerWidth < 400) {
            scaleAnimation(100, 700)
        }
    }, [])
return (
    <div ref={page6Con} className='w-full h-screen flex justify-center items-center overflow-hidden'>
        <div ref={skill} className='font-["rej"] text-[55px] font-extrabold tracking-wider origin-center'>Skills</div>
    </div>
  )
}

export default memo(Page6)