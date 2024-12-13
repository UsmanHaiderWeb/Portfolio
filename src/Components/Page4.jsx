import React, { memo, useRef } from 'react'
import Page4IMGcontainer from './Page4IMGcontainer'


const Page4 = () => {


return (
    <div className='w-full pb-[200px] mini:pb-[175px] mobile:pb-[150px] micro:pb-[120px] pt-[170px] mini:pt-[150px] mobile:pt-[130px] micro:pt-[100px]'>
        <div className='flex justify-between items-center mx-[4.5vw] border-b-[blue] border-b-[1px] border-b-solid pb-7 lgtab:mb-20 tablet:mb-16 sm:mb-8'>
            <h1 className='w-full lg:w-[50%] sm:w-[70%] lgtab:w-[85%] lg:text-[50px] lg:leading-[60px] sm:text-[50px] sm:leading-[60px] lgtab:text-[45px] lgtab:leading-[55px] tablet:text-[40px] tablet:leading-[50px] mini:text-[36px] mini:leading-[43px] mobile:text-[32px] mobile:leading-[38px] micro:text-[28px] micro:leading-[33px] font-bold mini:text-center mobile:text-center micro:text-center font-["rej"]'>My Personal Projects</h1>
            <p className='hidden lg:block w-[32%] text-[19px] leading-[25px] opacity-55'>These projects primarily focuses on the javascript and react concepts and understandings.</p>
        </div>
        <div className='w-full flex justify-start items-start flex-col px-[4.2vw] micro:px-[10px]'>
            <Page4IMGcontainer imgPosition="left-0" img='pinterest.PNG' justify="justify-start" prizeName="Pinterest Fullstack" prize="Express, EJS & Mongodb" link="#" />
            <Page4IMGcontainer imgPosition={window.innerWidth >= 800 ? "left-0" : "right-0"} img='domidex2.png' justify={window.innerWidth >= 800 ? "justify-center" : "justify-end"} prizeName="Domidex Design" prize="React JS, Tailwind, GSAP" link="https://usman-domidex-design.netlify.app/" />
            <Page4IMGcontainer imgPosition="left-0" img='ochi.PNG' justify={window.innerWidth >= 800 ? "justify-end" : "justify-start"} prizeName="Ochi Design" prize="JavaScript, Tailwind, GSAP" link="https://usman-ochi-design.netlify.app/" />
            <Page4IMGcontainer imgPosition="right-0" img='portfolio.PNG' justify={window.innerWidth >= 800 ? "justify-center" : "justify-end"} prizeName="Portfolio Template" prize="JavaScript, GSAP, ScrollTrigger" link="https://portfolio-clone-by-usman.netlify.app/" />
            <Page4IMGcontainer imgPosition={window.innerWidth >= 800 ? "right-0" : "left-0"} img='/Spotify.PNG' justify="justify-start" prizeName="Spotify Clone" prize="JavaScrip, Tailwind CSS" link="https://usman-spotify.netlify.app/" />
        </div>
    </div>
  )
}

export default memo(Page4)