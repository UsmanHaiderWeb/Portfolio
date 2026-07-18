import { useGSAP } from '@gsap/react';
import React, { memo, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const SingleMajorProject = ({ img, head, des, link = '#', isHovered, onMouseEnter, onMouseLeave }) => {
  const project = useRef();
  const projectCon = useRef();

  // Each card triggers off its own position. In the masonry column layout the
  // cards sit at very different heights, so the trigger must be recalculated
  // once images load (see onLoad below) or later cards never fire.
  useGSAP(() => {
    gsap.from(project.current, {
      y: 120,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: projectCon.current,
        scroller: 'body',
        start: 'top 92%',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
      },
    })
  }, []);

  return (
    <div
      ref={projectCon}
      className={`mini:w-full mobile:w-full micro:w-full mb-10 sm:mb-5 transition-all duration-300 relative inline-block w-full break-inside-avoid ${isHovered ? 'z-[50] drop-shadow-2xl' : 'z-[10] overflow-hidden drop-shadow-none'}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a href={link} ref={project} target='_blank' rel="noreferrer" className='block h-full'>
        <h5 className="font-semibold text-lg">{head || 'YCDirectory (MERN)'}</h5>
        <p className='text-[14px] opacity-70'>{des || 'A Blog Application'}</p>
        <div className="overflow-hidden mt-2 rounded-lg">
          <img src={img} alt={head} onLoad={() => ScrollTrigger.refresh()} className={`rounded-lg lg:w-full md:w-full sm:w-full lgtab:w-full tablet:w-full mini:w-full mobile:w-full micro:w-full h-auto max-h-[600px] object-cover object-top transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} />
        </div>
      </a>
    </div>
  )
}

export default memo(SingleMajorProject);