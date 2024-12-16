import { useGSAP } from '@gsap/react';
import React, { memo, useRef } from 'react'
import gsap from 'gsap';

const SingleMajorProject = ({img, head, des, link = ''}) => {
  const project = useRef();
  const projectCon = useRef();

  useGSAP(() => {
    gsap.from(project.current, {
      y: 300,
      scrollTrigger: {
        trigger: projectCon.current,
        scroller: 'body',
        start: 'top 90%',
        end: 'top -900%',
        toggleActions: 'play reverse play reverse',
      },
      stagger: 0.2
    })
  }, []);

  return (
    <div ref={projectCon} className='mini:w-full mobile:w-full micro:w-full mb-10 sm:mb-5 overflow-hidden'>
      <a href={link} ref={project} target='_blank'>
        <h5>{head || 'YCDirectory (MERN)'}</h5>
        <p className='text-[14px] opacity-70'>{des || 'A Blog Application'}</p>
        <img src={img} alt={img} className='lg:w-80 md:w-[29vw] sm:w-[40vw] lgtab:w-[44vw] tablet:w-[44vw] mini:w-full mobile:w-full micro:w-full h-auto max-h-[600px] object-cover object-top mt-2' />
      </a>
    </div>
  )
}

export default memo(SingleMajorProject);