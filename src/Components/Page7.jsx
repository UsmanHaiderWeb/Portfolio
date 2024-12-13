import React, { memo } from 'react'
import Page7SkillComponent from './Page7SkillComponent'
import FresherDes from './FresherDes'

const Page7 = () => {
  return (
    <div className='w-full flex justify-between items-start sm:flex-nowrap flex-wrap sm:pl-[6.5vw] sm:pr-[10vw] px-[5vw] pt-6 pb-20 relative'>
      <div className='sm:w-auto w-full'>
        <h1 className='text-black font-["rej"] sm:text-[7vw] sm:leading-[6vw] text-[50px] leading-[60px] mobile:text-[45px] mobile:leading-[55px] micro:text-[38px] micro:leading-[48px] w-[300px] mt-10'>Skills I Have</h1>
        <div className='flex justify-center items-center gap-x-3 mt-5'>
          <div className='w-8 h-[2px] bg-zinc-900'></div>
          <p className='text-black w-[350px]'>I can build ambitious, awesome and driving web experiences that will provide a tremendous experience to your viewers.</p>
        </div>
      </div>
      <div className='sm:w-[450px]'>
        <Page7SkillComponent heading="Frontend Development" skills="React JS, Astro JS (framework), Clerk Authentication, JavaScript, (Dom Manipulation), TypeScript (intermediate), React Router Dom, React Query, Apollo Graphql, Axios, Redux JS, Redux ToolKit, Version Control, Git, GitHub, Tailwnd CSS, CSS, HTML5" num="1" />
        <Page7SkillComponent heading="Animaions" skills="GreenSock Animation Platform (GSAP), Scroll Trigger (Gsap Plugin), Locomotive JS, GSAP and Scroll Trigger with React JS, Framer Motion (Basics)" num="2" />
        <Page7SkillComponent heading="Backend Development" skills="Node JS, Express JS, Mongoose ODM, Mongo DB, Template Engine (EJS), JWT Authentication, Bcrypt JS, Multer JS, Cloudinary, Clerk Authentication, Socket IO (Basics), Apollo Graphql" num="3" />
      </div>
      <div className='w-[350px] mobile:w-[300px] micro:w-[95%] sm:absolute sm:bottom-8 sm:left-10 sm:pt-0 pt-10'>
        <FresherDes />
      </div>
    </div>
  )
}

export default memo(Page7)