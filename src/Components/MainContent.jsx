import React, { memo, useRef } from 'react'
import LandingPage from './pages/LandingPage'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import SkillsPage from './pages/SkillsPage';
import SideBySideProjectPage from './pages/SideBySideProjectPage';
import InfiniteSlidePage from './pages/InfiniteSlidePage';
import ProjectColumnsPage from './pages/ProjectColumnsPage';
import EducationPage from './pages/EducationPage';
import EnterpriseExperiencePage from './pages/EnterpriseExperiencePage';

const MainContent = () => {
  const landingpage = useRef()
  const landingPageAnimator = useRef()
  const infiniteSliderAnimator = useRef()
  const skillsPage = useRef()

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
          <div ref={landingpage} className='fixed top-0 left-0 w-full min-h-screen overflow-hidden z-[2] bg-zinc-900 will-change-[clip-path]' style={{ clipPath: "circle(100% at 50% 50%)", transform: 'translateZ(0)' }}>
            <LandingPage />
          </div>
        </div>
        <div className='w-full h-[135vh]'>
          <div ref={infiniteSliderAnimator} className='w-full h-screen relative z-[1] pointer-events-none'></div>
          <div className='w-full h-full bg-zinc-950 min-h-screen fixed top-0 left-0 z-[1] flex justify-center items-center'>
            <InfiniteSlidePage infiniteSliderAnimator={infiniteSliderAnimator} />
          </div>
        </div>
        <EnterpriseExperiencePage />
        <ProjectColumnsPage />
        <div className='relative z-[15] bg-gradient-to-b from-[#18181B] to-[#09090B]'>
          <SideBySideProjectPage nextPage={skillsPage} />
        </div>
        <div className='relative z-[18] w-full min-h-screen bg-[#09090B]'>
          <div ref={skillsPage} className='blackColorTheme opacity-0 relative z-[18] w-full min-h-screen pt-60'>
            <SkillsPage />
          </div>
        </div>
        <div className='blackColorTheme relative z-[18] bg-[#e2b523] w-full min-h-screen'>
          <EducationPage />
        </div>
      </div>
    </main>
  )
}

export default memo(MainContent)