import React, { memo, useRef } from 'react'
import SingleMajorProject from '../SingleMajorProject'
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

const ProjectColumnsPage = ({nextPage}) => {
  const bgChanger = useRef();

  useGSAP(() => {
    gsap.to(bgChanger.current, {
      scrollTrigger: {
        trigger: bgChanger.current,
        scroller: 'body',
        start: 'bottom 60%',
        end: 'bottom 10%',
        onUpdate: (prop) => {
          prop.progress == 0 ? bgChanger.current.style.backgroundColor = "transparent" : bgChanger.current.style.backgroundColor = "#e2e2e2"
          prop.progress == 0 ? nextPage.current.style.backgroundColor = "#09090B" : nextPage.current.style.backgroundColor = "#e2e2e2"
          prop.progress == 1 && ScrollTrigger.refresh();
        }
      }
    })
  }, [])

  return (
    <div className='bg-gradient-to-b from-[#18181B] to-[#09090B] relative z-[14]'>
      <div ref={bgChanger} className='min-h-[500px]'>
        <div className='flex justify-between items-center mx-[4.5vw] border-b-[blue] border-b-[1px] border-b-solid pb-7 lgtab:mb-20 tablet:mb-16 sm:mb-8'>
          <h1 className='w-full lg:w-[50%] sm:w-[70%] lgtab:w-[85%] lg:text-[50px] lg:leading-[60px] sm:text-[50px] sm:leading-[60px] lgtab:text-[45px] lgtab:leading-[55px] tablet:text-[40px] tablet:leading-[50px] mini:text-[36px] mini:leading-[43px] mobile:text-[32px] mobile:leading-[38px] micro:text-[28px] micro:leading-[33px] font-bold mini:text-center mobile:text-center micro:text-center font-["rej"]'>My Major Projects</h1>
            <p className='hidden lg:block w-[32%] text-[19px] leading-[25px] opacity-55'>These projects primarily focuses on the javascript and react concepts and understandings.</p>
        </div>
        <div className='md:columns-3 columns-2 mini:columns-1 mobile:columns-1 micro:columns-1 lg:w-[1000px] md:w-[calc(87vw+40px)] sm:w-[calc(80vw+40px)] lgtab:w-[calc(88vw+40px)] tablet:w-[calc(88vw+40px)] mini:w-[80vw] mobile:w-[85vw] micro:w-[85vw] mini:pt-5 mobile:pt-5 micro:pt-5 mx-auto'>
          <SingleMajorProject img="/ycdirectory.webp" des="A Blog Application" head='YCDirectory (MERN)' link='https://ycdirectory-usman-haider.vercel.app/' />
          <SingleMajorProject img="/insta.webp" des="A social media application" head='Instagram (MERN)' link='https://instagram-usman-haider.vercel.app/' />
          <SingleMajorProject img="/pinterest.webp" des="A social media application" head='Pinterest (MERN)' />
          <SingleMajorProject img="/brainwave.webp" des="A Designing Clone" head='Brainwave (React)' link='https://brainwave-ochre-tau.vercel.app/' />
          <SingleMajorProject img="/zentry.webp" des="A Gaming Website" head='Zentry (React)' link='https://zentry-rosy.vercel.app/' />
          <SingleMajorProject img="/whatsapp.webp" des="A Messaging Application" head='WhatsApp (MERN)'/>
        </div>
      </div>
    </div>
  )
}

export default memo(ProjectColumnsPage);