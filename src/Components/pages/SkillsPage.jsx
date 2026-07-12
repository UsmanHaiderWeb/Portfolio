import { memo } from 'react'
import Page7SkillComponent from '../Page7SkillComponent'
import FresherDes from '../FresherDes'

const SkillsPage = () => {
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
        <Page7SkillComponent heading="Frontend Development" skills="React, Next.js, Astro.js, TypeScript, JavaScript, Tailwind CSS, Redux Toolkit, Micro-Frontends, NPM Package Architecture, React Query, RTK Query, Form Orchestration (Background Synching, Smooth UX Experience)" num="1" />
        <Page7SkillComponent heading="Animations & UI" skills="GSAP, ScrollTrigger, Framer Motion, Three.js (Basics), Locomotive JS (Lenis --> Smmoth Scrolling), Responsive Aniamted Web Designs" num="2" />
        <Page7SkillComponent heading="Backend & Databases" skills="DDD, Python (FastAPI, Flask), Node.js (Express), PostgreSQL, MongoDB, GEVENT, UOW Pattern, REST APIs" num="3" />
        <Page7SkillComponent heading="Cloud, DevOps & Arch" skills="Docker, Kubernetes (KIND Cluster, HELM), GCP (Cloud Tasks, Cloud Run), AWS (EC2), Jenkins, GitHub Actions CI/CD, Serverless Architecture" num="4" />
      </div>
      <div className='w-[350px] mobile:w-[300px] micro:w-[95%] sm:absolute sm:bottom-8 sm:left-10 sm:pt-0 pt-10'>
        <FresherDes />
      </div>
    </div>
  )
}

export default memo(SkillsPage);