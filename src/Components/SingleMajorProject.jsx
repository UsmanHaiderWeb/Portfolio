import { useGSAP } from '@gsap/react';
import React, { memo, useRef } from 'react'
import gsap from 'gsap';

const SingleMajorProject = ({ img, head, des, link = '#', isHovered, onMouseEnter, onMouseLeave }) => {
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
    <div
      ref={projectCon}
      className={`mini:w-full mobile:w-full micro:w-full mb-10 sm:mb-5 transition-all duration-300 relative block w-full break-inside-avoid ${isHovered ? 'z-[50] drop-shadow-2xl' : 'z-[10] drop-shadow-none'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={link} ref={project} target='_blank' rel="noreferrer" className='block h-full'>
        <h5 className="font-semibold text-lg">{head || 'YCDirectory (MERN)'}</h5>
        <p className='text-[14px] opacity-70'>{des || 'A Blog Application'}</p>
        <div className="overflow-hidden mt-2 rounded-lg">
          <img src={img} alt={img} className={`rounded-lg lg:w-full md:w-full sm:w-full lgtab:w-full tablet:w-full mini:w-full mobile:w-full micro:w-full h-auto max-h-[600px] object-cover object-top transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} />
        </div>
      </a>
    </div>
  )
}

export default memo(SingleMajorProject);