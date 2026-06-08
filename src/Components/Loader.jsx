import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let dummy = { val: 0 };
    gsap.to(dummy, {
      val: 100,
      duration: 3,
      ease: 'power1.inOut',
      onUpdate: () => {
        setProgress(Math.round(dummy.val));
      },
      onComplete: () => {
        gsap.to('.loader-container', {
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
          onComplete: onComplete
        });
      }
    });
  }, [onComplete]);

  // Generate ASCII slashes based on progress
  const maxSlashes = 40;
  const currentSlashes = Math.floor((progress / 100) * maxSlashes);
  const slashes = Array(maxSlashes).fill('.').map((_, i) => (i < currentSlashes ? '/' : '.')).join('');

  return (
    <div className="loader-container fixed inset-0 z-[1000] bg-[#020202] flex flex-col items-center justify-center text-cyan-400 font-mono tracking-widest text-xs sm:text-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="text-magenta-500 animate-pulse">SYSTEM_INIT</div>
        <div className="flex gap-4">
          <span>[</span>
          <span className="text-cyan-400">{slashes}</span>
          <span>]</span>
        </div>
        <div className="flex justify-between w-full max-w-[200px] mt-2 text-gray-500">
          <span>LOADING</span>
          <span className="text-cyan-400">{progress.toString().padStart(3, '0')}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;