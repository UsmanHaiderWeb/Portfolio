import React, { memo, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const EnterpriseExperiencePage = () => {
  const containerRef = useRef(null);
  const metric800 = useRef(null);
  const metric10 = useRef(null);
  const metric60 = useRef(null);

  useGSAP(() => {
    // Number counters
    gsap.to(metric800.current, {
      innerHTML: 800,
      duration: 2,
      snap: { innerHTML: 1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: 'body',
        start: 'top 70%',
      }
    });

    gsap.to(metric10.current, {
      innerHTML: 10,
      duration: 1.5,
      snap: { innerHTML: 1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: 'body',
        start: 'top 70%',
      }
    });

    gsap.to(metric60.current, {
      innerHTML: 60,
      duration: 1.5,
      snap: { innerHTML: 1 },
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        scroller: 'body',
        start: 'top 70%',
      }
    });

  }, []);

  return (
    <div ref={containerRef} className="w-full bg-[#09090B] relative z-[15] pt-[170px] mini:pt-[150px] mobile:pt-[130px] micro:pt-[100px] pb-32 text-white">
      <div className="mx-[4.5vw]">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end border-b-[1px] border-[blue] pb-7 mb-16">
          <h1 className="w-full lg:w-[60%] lg:text-[50px] lg:leading-[60px] sm:text-[50px] sm:leading-[60px] text-[40px] leading-[50px] font-bold font-['rej'] text-white">
            Enterprise Impact
          </h1>
          <p className="hidden lg:block w-[35%] text-[19px] leading-[25px] opacity-70">
            Real-world systems scaling, architecture decoupling, and frontend ecosystem management.
          </p>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-32">
          <div className="flex flex-col justify-center items-start border-l-2 border-[blue] pl-6">
            <h2 className="text-[60px] font-bold font-['rej'] text-blue-400">
              <span ref={metric800}>0</span>%
            </h2>
            <p className="text-xl font-semibold opacity-90">Throughput Increase</p>
            <p className="text-sm opacity-60 mt-2">Optimized database connections and handled high-concurrency with GEVENT.</p>
          </div>
          <div className="flex flex-col justify-center items-start border-l-2 border-purple-500 pl-6">
            <h2 className="text-[60px] font-bold font-['rej'] text-purple-400">
              <span ref={metric10}>0</span>+
            </h2>
            <p className="text-xl font-semibold opacity-90">Enterprise Portals</p>
            <p className="text-sm opacity-60 mt-2">Architected a private NPM package to centralize multi-step form orchestration.</p>
          </div>
          <div className="flex flex-col justify-center items-start border-l-2 border-[#e2b523] pl-6">
            <h2 className="text-[60px] font-bold font-['rej'] text-[#e2b523]">
              <span ref={metric60}>0</span> fps
            </h2>
            <p className="text-xl font-semibold opacity-90">Fluid Interactions</p>
            <p className="text-sm opacity-60 mt-2">Restructured DOM rendering cycles and managed API payloads via RTK Query.</p>
          </div>
        </div>

        {/* Deep Dive Professional Experience */}
        <div>
          <h2 className="text-[40px] font-bold font-['rej'] text-white text-center mb-16">Professional Experience</h2>
          <div className="space-y-12 max-w-5xl mx-auto">

            {/* Ticketly.pk */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-blue-500/50 transition-colors duration-500 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 border-b border-zinc-800 pb-6">
                <div>
                  <h3 className="text-3xl font-bold text-blue-400 font-['rej']">Ticketly.pk</h3>
                  <h4 className="text-xl font-semibold mt-1">Full Stack Engineer</h4>
                </div>
                <span className="text-sm font-semibold opacity-60 mt-4 md:mt-0">Dec 2025 – Present</span>
              </div>
              <ul className="list-disc list-inside space-y-4 text-[16px] opacity-80 leading-relaxed marker:text-blue-500">
                <li>Managed 4 distinct enterprise portals simultaneously, ensuring high availability and seamless data flow.</li>
                <li>Spearheaded backend decoupling, offloading I/O heavy tasks to GCP Cloud Run.</li>
                <li>Architected and implemented a custom NPM architecture for enterprise-level form orchestration.</li>
                <li>Rescued the main application server during critical load failures by optimizing database connections and GEVENT handling.</li>
                <li>Enhanced dashboard performance, achieving 60fps rendering using RTK Query and efficient state management.</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Python (Flask)', 'Domain Driven Design', 'Next JS', 'Form Orchestration', 'Background Synching', 'GCP Cloud Run', 'React & Redux', 'Micro-Frontends'].map(tech => (
                  <span key={tech} className="text-sm bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-md">{tech}</span>
                ))}
              </div>
            </div>

            {/* PakLawAssist */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-purple-500/50 transition-colors duration-500 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 border-b border-zinc-800 pb-6">
                <div>
                  <h3 className="text-3xl font-bold text-purple-400 font-['rej']">PakLawAssist</h3>
                  <h4 className="text-xl font-semibold mt-1">Frontend Developer Intern</h4>
                </div>
                <span className="text-sm font-semibold opacity-60 mt-4 md:mt-0">Jan 2025 – April 2025</span>
              </div>
              <ul className="list-disc list-inside space-y-4 text-[16px] opacity-80 leading-relaxed marker:text-purple-500">
                <li>Worked on an AI-powered Legal Assistant specialized for Pakistan Law as a Frontend Developer Intern.</li>
                <li>Managed 4 portals simultaneously, delivering highly responsive and interactive user interfaces.</li>
                <li>Standardized CI/CD pipelines via Jenkins & GitHub Actions, drastically improving internal developer velocity.</li>
                <li>Managed Kubernetes deployments (KIND) for seamless staging and production rollouts.</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {['React', 'Astro JS', 'Form Orchestration', 'FastAPI', 'Kubernetes (KIND)', 'Jenkins CI/CD', 'Docker'].map(tech => (
                  <span key={tech} className="text-sm bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-md">{tech}</span>
                ))}
              </div>
            </div>

            {/* Freelance */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-[#e2b523]/50 transition-colors duration-500 rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 border-b border-zinc-800 pb-6">
                <div>
                  <h3 className="text-3xl font-bold text-[#e2b523] font-['rej']">Freelance / Academic</h3>
                  <h4 className="text-xl font-semibold mt-1">Full Stack Engineer</h4>
                </div>
                <span className="text-sm font-semibold opacity-60 mt-4 md:mt-0">2025</span>
              </div>
              <ul className="list-disc list-inside space-y-4 text-[16px] opacity-80 leading-relaxed marker:text-[#e2b523]">
                <li>Built Astra Labs, an AI-powered music application, collaborating with a backend developer as the lead frontend developer.</li>
                <li>Successfully delivered 5+ scalable web applications including YC-Directory and multiple UI clones (Zentry, Brainwave).</li>
                <li>Specialized in building secure, high-performance dashboards and landing pages using the MERN stack and GSAP animations.</li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                {['React', 'Node.js', 'MongoDB', 'Express', 'TailwindCSS', 'GSAP'].map(tech => (
                  <span key={tech} className="text-sm bg-[#e2b523]/10 border border-[#e2b523]/20 text-[#e2b523] px-3 py-1 rounded-md">{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default memo(EnterpriseExperiencePage);
