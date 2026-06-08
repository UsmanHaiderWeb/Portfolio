import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { id: '01', title: 'AURA_SYNC', type: 'WEBGL / E-COMMERCE' },
  { id: '02', title: 'NEURAL_NET', type: 'DATA VISUALIZATION' },
  { id: '03', title: 'SYNTH_WAVE', type: 'INTERACTIVE AUDIO' },
  { id: '04', title: 'VOID_SPACE', type: '3D PORTFOLIO' },
  { id: '05', title: 'CYBER_PUNK', type: 'XR EXPERIENCE' },
];

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const wheelRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    // 3D Carousel Setup
    const totalItems = projects.length;
    // Calculate radius so items have enough space
    const radius = window.innerHeight * 0.4; 
    const anglePerItem = 360 / totalItems;

    // Position each item on the 3D drum
    itemsRef.current.forEach((item, i) => {
      if(item) {
        gsap.set(item, {
          rotationX: i * -anglePerItem,
          z: radius,
          transformOrigin: \`50% 50% -\${radius}px\`,
        });
      }
    });

    // Rotate the entire wheel based on scroll
    // Rotate upwards, so negative rotationX
    const tl = gsap.to(wheelRef.current, {
      rotationX: (totalItems - 1) * anglePerItem,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: 'top top',
        end: () => "+=" + (window.innerHeight * totalItems * 0.8), // Control scroll length
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="h-screen w-full relative z-10 overflow-hidden bg-black/60 pointer-events-auto backdrop-blur-md border-y border-cyan-900/30"
      style={{ perspective: '1000px' }}
    >
      
      {/* HUD Elements */}
      <div className="absolute top-10 left-10 text-xs text-cyan-400 tracking-widest z-20">
        [ SCROLL_TO_ROTATE ]
      </div>
      
      <div className="absolute top-1/2 left-10 -translate-y-1/2 text-[10px] text-magenta-500 tracking-[0.5em] rotate-90 origin-left hidden md:block">
        ROTATIONAL_AXIS // X
      </div>

      {/* The 3D Wheel Container */}
      <div 
        ref={wheelRef} 
        className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {projects.map((project, i) => (
          <div 
            key={i} 
            ref={el => itemsRef.current[i] = el}
            className="absolute top-1/2 left-1/2 w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center group cursor-pointer"
            style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
          >
            <div className="text-magenta-500 text-sm font-mono tracking-widest mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
              IDX // {project.id}
            </div>
            
            <h2 
              className="text-5xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter uppercase text-transparent text-stroke-cyan hover:text-cyan-400 transition-colors duration-500 leading-none drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
              style={{ WebkitTextStroke: '2px #06b6d4' }}
            >
              {project.title}
            </h2>
            
            <div className="text-cyan-400 text-xs md:text-sm tracking-[0.4em] mt-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              [ {project.type} ]
            </div>
          </div>
        ))}
      </div>
      
      {/* Overlay vignette to hide top/bottom items as they rotate away */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_100%)] z-10" />

    </section>
  );
};

export default ProjectsSection;
