import React, { memo , useRef} from 'react'
import LandingPage from './LandingPage'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import Page2 from './Page2';
import ScrollTrigger from 'gsap/ScrollTrigger'
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';
import Page8 from './Page8';

const MainContent = () => {
  const landingpage = useRef()
  const landingPageAnimator = useRef()
  const page2Animator = useRef()
  const page7 = useRef()

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    gsap.to(landingpage.current, {
      clipPath: "circle(0% at 50% 50%)",
      scrollTrigger: {
        trigger: landingPageAnimator.current,
        scroller: "body",
        start: "top 0%",
        end: 'top -100%',
        pin: true,
        scrub: 1,
      }
    })
  })

  return (
    <main className='min-h-screen'>
      <div className='relative overflow-hidden'>
        <div className='w-full h-screen'>
          <div ref={landingPageAnimator} className='w-full h-screen relative z-[1] pointer-events-none'></div>
          <div ref={landingpage} className='fixed top-0 left-0 w-full min-h-screen overflow-hidden z-[2] bg-zinc-900' style={{clipPath: "circle(100% at 50% 50%)"}}>
            <LandingPage />
          </div>
        </div>
        <div className='w-full h-screen'>
          <div ref={page2Animator} className='w-full h-screen relative z-[1] pointer-events-none'></div>
          <div className='w-full h-full bg-zinc-950 min-h-screen fixed top-0 left-0 z-[1] flex justify-center items-center'>
            <Page2 page2Animator={page2Animator} />
          </div>
        </div>
        <div className='relative z-[15] bg-zinc-900'>
          <Page4 />
        </div>
        <div className='relative z-[16]'>
          <Page5 />
        </div>
        <div className='relative z-[17] bg-zinc-950 overflow-hidden'>
          <Page6 />
        </div>
        <div ref={page7} className='blackColorTheme relative z-[18] bg-[#e2e2e2] w-full min-h-screen'>
          <Page7 />
        </div>
        <div className='blackColorTheme relative z-[18] bg-[#e2b523]   w-full min-h-screen'>
          <Page8 />
        </div>
      </div>
    </main>
  )
}

export default memo(MainContent)