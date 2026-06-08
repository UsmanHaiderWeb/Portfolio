import React from 'react';

const ContactSection = () => {
  return (
    <section className="min-h-screen w-full relative z-10 flex flex-col items-center justify-center px-6 md:px-24 pointer-events-auto mix-blend-screen bg-black/80 backdrop-blur-md">
      
      <div className="text-center space-y-8 relative">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] -z-10 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

        <div className="text-magenta-500 text-xs md:text-sm font-mono tracking-[0.5em] animate-pulse">
          // INITIATE_CONNECTION
        </div>
        
        <h2 className="text-5xl md:text-[8rem] font-bold text-white tracking-tighter uppercase hover:text-transparent hover:text-stroke-cyan transition-colors duration-500 cursor-pointer" style={{ WebkitTextStroke: '2px #06b6d4' }}>
          CONTACT
        </h2>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs font-mono tracking-widest text-gray-400">
          <a href="#" className="hover:text-cyan-400 transition-colors border border-cyan-900/50 p-4 rounded hover:bg-cyan-900/20">
            EMAIL // ME
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors border border-cyan-900/50 p-4 rounded hover:bg-cyan-900/20">
            GITHUB // REPO
          </a>
          <a href="#" className="hover:text-cyan-400 transition-colors border border-cyan-900/50 p-4 rounded hover:bg-cyan-900/20">
            LINKEDIN // NET
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-[10px] text-gray-600 font-mono tracking-widest">
        © 2026 // ALL_RIGHTS_RESERVED
      </div>
      <div className="absolute bottom-6 right-6 text-[10px] text-gray-600 font-mono tracking-widest">
        SYS_STATUS // ONLINE
      </div>
    </section>
  );
};

export default ContactSection;
