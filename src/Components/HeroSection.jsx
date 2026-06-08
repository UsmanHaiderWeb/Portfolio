import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, scale: 1.1, filter: 'blur(10px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.5, ease: 'power3.out', delay: 0.5 }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=1'
    );
  }, []);

  return (
    <section 
      ref={containerRef}
      className="h-screen w-full flex flex-col items-center justify-center pointer-events-none select-none relative z-10"
    >
      {/* Glitchy/Technical Background Elements */}
      <div className="absolute top-10 left-10 text-[0.65rem] text-cyan-400 opacity-50 tracking-widest hidden md:block">
        SYS.REQ // 0x487A
        <br/>
        LATENCY // 14ms
      </div>

      <div className="absolute bottom-10 right-10 text-[0.65rem] text-magenta-500 opacity-50 tracking-widest text-right hidden md:block">
        RENDER // WEBGL2
        <br/>
        STATUS // ACTIVE
      </div>

      <div className="text-center mix-blend-screen">
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-7xl font-bold text-white tracking-[0.2em] md:tracking-[0.5em] mb-4 relative drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]"
        >
          CREATIVE<br/>ENGINEER
        </h1>
        
        <div 
          ref={subtitleRef}
          className="text-xs md:text-sm text-gray-400 tracking-[0.3em] max-w-xl mx-auto mt-8 border-t border-b border-cyan-900/50 py-4"
        >
          [ INTERACTIVE ENVIRONMENTS // DIGITAL PRODUCTION ]
        </div>

        <button className="mt-12 px-8 py-3 bg-transparent border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 text-xs tracking-widest pointer-events-auto">
          EXPLORE WORK
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
