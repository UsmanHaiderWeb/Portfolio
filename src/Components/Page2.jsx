import React, { memo, useRef } from 'react'
import Page2InfiniteSlider from './Page2InfiniteSlider'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Page2 = (i) => {
  const sliderCon = useRef()
  const line1 = useRef()
  const line2 = useRef()
  const line3 = useRef()
  const line4 = useRef()

  useGSAP(() => {
    gsap.from(sliderCon.current, {
      scale: 10,
      scrollTrigger: {
        trigger: i.page2Animator.current,
        scroller: "body",
        scrub: 1,
        start: 'top 100%',
        end: "top 10%"
      }
    })
    const tl = gsap.timeline({scrollTrigger: {
      trigger: i.page2Animator.current,
      scroller :"body",
      start: "top 0",
      end: "top -100%",
      scrub: 1,
    }})
    tl.to(line1.current, {
      x: '-15%'
    }, "same Line")
    tl.to(line2.current, {
      x: '15%'
    }, "same Line")
    tl.to(line3.current, {
      x: '15%'
    }, "same Line")
    tl.to(line4.current, {
      x: '-15%'
    }, "same Line")
  })
  return (<>
    <div className='absolute left-10 bottom-5 mobile:left-5 micro:left-3 mobile:bottom-5 opacity-75'>
      <h4 className='font-["rej"] text-[20px]'>Usman Haider</h4>
      <p className='w-80 mobile:w-64 micro:w-[80vw] micro:text-[15px] sm:my-2'>I am a web developer, seeking for an internship to start my job career. I am very dedicated to my tasks.</p>
    </div>
    <div className='w-full flex justify-center items-center flex-wrap relative tablet:-translate-y-4 mini:-translate-y-4'>
      <h2 className='w-[300px] micro:w-[250px] text-center text-[25px] leading-[30px] micro:text-[22px] micro:leading-[27px] -translate-y-6'>
        I'm a modern web developer, trying my best
      </h2>
      <div>
        <div ref={sliderCon} className='origin-center bg-zinc-950'>
          <div ref={line1} className='flex justify-center items-center flex-shrink-0 flex-nowrap overflow-hidden gap-x-5 translate-x-[15%]'>
            <Page2InfiniteSlider />
            <Page2InfiniteSlider />
          </div>
          <div ref={line2} className='flex justify-center items-center flex-shrink-0 flex-nowrap overflow-hidden gap-x-5 translate-x-[-15%]'>
            <Page2InfiniteSlider />
            <Page2InfiniteSlider />
          </div>
          <div ref={line3} className='flex justify-start items-center flex-shrink-0 flex-nowrap overflow-hidden gap-x-5'>
            <Page2InfiniteSlider />
            <Page2InfiniteSlider />
          </div>
          <div ref={line4} className='flex justify-center items-center flex-shrink-0 flex-nowrap overflow-hidden gap-x-5 translate-x-[15%]'>
            <Page2InfiniteSlider />
            <Page2InfiniteSlider />
          </div>
        </div>
      </div>
    </div>
  </>)
}

export default memo(Page2)