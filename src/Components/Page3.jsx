import React, { memo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";

const Page3 = () => {
    const heading1 = useRef()
    const heading2 = useRef()
    const video = useRef()
    const page3 = useRef()

    useGSAP(() => {
        function headingAnimation(a, b, c) {
            gsap.to(a, {
                x: b,
                rotate: c,
                filter: 'blur(10px)',
                scrollTrigger: {
                    trigger: page3.current,
                    scroller: "body",
                    start: "top 20%",
                    end: "top -80%",
                    scrub: 0.5,
                }
            })
        }
        headingAnimation(heading1.current, '-300', '-10')
        headingAnimation(heading2.current, '300', '10')
        gsap.from(video.current, {
            scale: 0.6,
            scrollTrigger: {
                trigger: video.current,
                scroller: "body",
                start: "top 90%",
                end: "top 15%",
                scrub: 0.5,
            }
        })
    })


return (
    <div ref={page3}>
        <div className='text-[9vw] leading-[8.5vw]'>
            <h1 ref={heading1} className='page3Heading w-full pl-[120px]'>Digitally crafted</h1>
            <h1 ref={heading2} className='page3Heading w-full pl-[350px] text-center'>brand projects</h1>
        </div>
        <div className='w-full h-screen flex justify-center items-start mt-10'>
            <video ref={video} src="page1-video.mp4" autoPlay loop muted></video>
        </div>
    </div>
  )
}

export default memo(Page3)