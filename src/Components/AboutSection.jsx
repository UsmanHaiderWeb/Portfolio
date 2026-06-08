import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });

    tl.fromTo(
      textRef.current.children,
      { opacity: 0, y: 30, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, stagger: 0.2, ease: 'power2.out' }
    )
    .fromTo(
      statsRef.current.children,
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
      "-=0.4"
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen w-full relative z-10 flex flex-col justify-center px-6 md:px-24 py-24 pointer-events-auto mix-blend-screen">
      
      {/* HUD Border Frame */}
      <div className="absolute inset-10 border border-cyan-900/30 hidden md:block pointer-events-none">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-400"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-400"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-400"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-400"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-20">
        <div ref={textRef} className="space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold text-transparent text-stroke-cyan tracking-[0.2em] uppercase">
            // PROFILE
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed tracking-wide">
            I am a creative developer bridging the gap between design and engineering. Specializing in high-performance WebGL experiences, interactive 3D environments, and modern front-end architectures.
          </p>
          <p className="text-gray-400 text-xs md:text-sm leading-relaxed tracking-wider">
            My approach treats the browser as a blank canvas—eschewing traditional DOM limitations in favor of GPU-accelerated rendering and fluid physics to create memorable digital products.
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <div ref={statsRef} className="space-y-6 font-mono text-xs md:text-sm tracking-widest">
            <div className="flex justify-between border-b border-cyan-900/50 pb-2">
              <span className="text-cyan-400">CORE_ENGINE</span>
              <span className="text-white">REACT / THREE.JS</span>
            </div>
            <div className="flex justify-between border-b border-cyan-900/50 pb-2">
              <span className="text-magenta-500">SHADING</span>
              <span className="text-white">GLSL / POST_PROCESSING</span>
            </div>
            <div className="flex justify-between border-b border-cyan-900/50 pb-2">
              <span className="text-cyan-400">MOTION</span>
              <span className="text-white">GSAP / FRAMER</span>
            </div>
            <div className="flex justify-between border-b border-cyan-900/50 pb-2">
              <span className="text-magenta-500">STYLING</span>
              <span className="text-white">TAILWIND / SCSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
