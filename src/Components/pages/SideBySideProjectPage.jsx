import React, { memo } from 'react'
import Page4IMGcontainer from '../Page4IMGcontainer'


const SideBySideProjectPage = () => {
return (
    <div className='w-full pb-[200px] mini:pb-[175px] mobile:pb-[150px] micro:pb-[120px] pt-[170px] mini:pt-[150px] mobile:pt-[130px] micro:pt-[100px]'>
        <div className='flex justify-between items-center mx-[4.5vw] border-b-[blue] border-b-[1px] border-b-solid pb-7 lgtab:mb-20 tablet:mb-16 sm:mb-8'>
            <h1 className='w-full lg:w-[50%] sm:w-[70%] lgtab:w-[85%] lg:text-[50px] lg:leading-[60px] sm:text-[50px] sm:leading-[60px] lgtab:text-[45px] lgtab:leading-[55px] tablet:text-[40px] tablet:leading-[50px] mini:text-[36px] mini:leading-[43px] mobile:text-[32px] mobile:leading-[38px] micro:text-[28px] micro:leading-[33px] font-bold mini:text-center mobile:text-center micro:text-center font-["rej"]'>My Personal Projects</h1>
            <p className='hidden lg:block w-[32%] text-[19px] leading-[25px] opacity-55'>These projects primarily focuses on the javascript and react concepts and understandings.</p>
        </div>
        <div className='w-full flex justify-start items-start flex-col px-[4.2vw] micro:px-[10px]'>
            {/* Scale-origin (L/R) per tier  -> small: L R L R L | medium: L L R L R | big: L L L R R */}
            {/* Placement per tier           -> small: 1 col      | medium: 2 cols     | big: 3 cols       */}
            <Page4IMGcontainer imgPosition="left-0" img='pinterest.webp' justify="justify-start" prizeName="Pinterest Fullstack" prize="Express, EJS & Mongodb" link="#" />
            <Page4IMGcontainer imgPosition="right-0 tablet:left-0 tablet:right-auto lgtab:left-0 lgtab:right-auto sm:left-0 sm:right-auto" img='domidex2.webp' justify="justify-start tablet:justify-end lgtab:justify-end sm:justify-center" prizeName="Domidex Design" prize="React JS, Tailwind, GSAP" link="https://usman-domidex-design.netlify.app/" />
            <Page4IMGcontainer imgPosition="left-0 tablet:right-0 tablet:left-auto lgtab:right-0 lgtab:left-auto sm:left-0 sm:right-auto" img='ochi.webp' justify="justify-start sm:justify-end" prizeName="Ochi Design" prize="JavaScript, Tailwind, GSAP" link="https://usman-ochi-design.netlify.app/" />
            <Page4IMGcontainer imgPosition="right-0 tablet:left-0 tablet:right-auto lgtab:left-0 lgtab:right-auto sm:right-0 sm:left-auto" img='portfolio.webp' justify="justify-start tablet:justify-end lgtab:justify-end sm:justify-center" prizeName="Portfolio Template" prize="JavaScript, GSAP, ScrollTrigger" link="https://portfolio-clone-by-usman.netlify.app/" />
            <Page4IMGcontainer imgPosition="left-0 tablet:right-0 tablet:left-auto lgtab:right-0 lgtab:left-auto sm:right-0 sm:left-auto" img='/Spotify.webp' justify="justify-start" prizeName="Spotify Clone" prize="JavaScrip, Tailwind CSS" link="https://usman-spotify.netlify.app/" />
        </div>
    </div>
)}

export default memo(SideBySideProjectPage);