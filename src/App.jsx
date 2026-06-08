import React, { memo, useState, useEffect } from 'react';
import Lenis from 'lenis';
import WebGLBackground from './Components/WebGLBackground';
import CustomCursor from './Components/CustomCursor';
import HeroSection from './Components/HeroSection';
import Loader from './Components/Loader';
import AboutSection from './Components/AboutSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';

const App = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth buttery scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className='min-h-screen w-full relative z-0 text-white overflow-x-hidden bg-black cursor-none'>
      <div className="noise-overlay" />
      
      {!loadingComplete && <Loader onComplete={() => setLoadingComplete(true)} />}
      
      <CustomCursor />
      
      <WebGLBackground />
      
      {loadingComplete && (
        <main className="relative z-10 w-full flex flex-col">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      )}
    </div>
  );
}

export default memo(App);
