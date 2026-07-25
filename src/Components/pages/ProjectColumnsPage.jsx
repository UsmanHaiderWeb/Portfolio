import { memo, useState, useCallback } from 'react'
import SingleMajorProject from '../SingleMajorProject'

const ProjectColumnsPage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ left: 0, top: 0, show: false });

  const handleMouseEnter = useCallback((e, proj) => {
    const cardRect = e.currentTarget.getBoundingClientRect();
    const tooltipWidth = 280;
    const tooltipHeight = 150;
    const margin = 20;

    let left = 0;
    let top = 0;

    // Try placing to the right
    if (cardRect.right + tooltipWidth + margin <= window.innerWidth) {
      left = cardRect.right + margin;
      top = cardRect.top + (cardRect.height / 2) - (tooltipHeight / 2);
    }
    // Try placing to the left
    else if (cardRect.left - tooltipWidth - margin >= 0) {
      left = cardRect.left - tooltipWidth - margin;
      top = cardRect.top + (cardRect.height / 2) - (tooltipHeight / 2);
    }
    // Try placing below
    else if (cardRect.bottom + tooltipHeight + margin <= window.innerHeight) {
      left = cardRect.left + (cardRect.width / 2) - (tooltipWidth / 2);
      top = cardRect.bottom + margin;
    }
    // Try placing above
    else {
      left = cardRect.left + (cardRect.width / 2) - (tooltipWidth / 2);
      top = cardRect.top - tooltipHeight - margin;
    }

    // Keep it within screen bounds
    left = Math.max(margin, Math.min(left, window.innerWidth - tooltipWidth - margin));
    top = Math.max(margin, Math.min(top, window.innerHeight - tooltipHeight - margin));

    setHoveredProject(proj);
    setTooltipPos({ left, top, show: true });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
    setTooltipPos(prev => ({ ...prev, show: false }));
  }, []);

  const projects = [
    { id: 1, img: "/job/ticketly-user.png", des: "Event discovery & ticketing platform", head: 'Ticketly (User Platform)', link: 'https://ticketly.pk', techStack: "Next.js, RTK Query, Firebase, Custom NPM Package, Flask, Domain Driven Design, Socket.IO, Apple Wallet PassKit, External Fintech Services For Payments" },
    { id: 2, img: "/job/ticketly-bussiness.png", des: "Organiser dashboard for events, registrations & payouts", head: 'Ticketly (Organiser Portal)', link: 'https://business.ticketly.pk/', techStack: "Next.js, RTK Query, Firebase, Custom NPM Package, Flask, Domain Driven Design, TipTap, React PDF, External Fintech Services For Payments" },
    { id: 3, img: "/job/ticketly-admin.png", des: "Internal admin portal for accounting, cashflow & payouts", head: 'Ticketly (Admin Portal)', link: '#', techStack: "Next.js, RTK Query, Firebase, Custom NPM Package, Recharts, React Hook Form, Zod, XLSX, Flask, Domain Driven Design, External Fintech Services For Payments" },
    { id: 4, img: "/job/npm-package.png", des: "Shared React component library powering every Ticketly portal", head: 'Ticketly Shared UI (NPM Package)', link: '#', techStack: "TypeScript, React, Vite Library Build, vite-plugin-dts, TailwindCSS, Headless UI, dnd-kit, TipTap, Redux Toolkit, Framer Motion, Zod, Published NPM Package" },
    { id: 5, img: "/job/form-builder.png", des: "Drag-and-drop registration forms with conditional logic & fee rules", head: 'Dynamic Form Builder', link: '#', techStack: "TypeScript, React, dnd-kit, TipTap, Redux Toolkit, Conditional Rules Engine, Conditional Pricing, AI Question Generation, TailwindCSS, Published NPM Package" },
    { id: 6, img: "/job/ai-hedge.png", des: "Node-based AI workspace for live crypto market analysis", head: 'ASTRA (AI Hedge Fund)', link: 'https://hedge-scratch.vercel.app', techStack: "React, TypeScript, React Flow, TanStack Query, shadcn/ui, TailwindCSS, FastAPI, OpenAI, Binance API, yfinance, Pandas, MySQL" },
    { id: 7, img: "/ycdirectory.webp", des: "A Blog Application", head: 'YCDirectory (MERN)', link: 'https://ycdirectory-usman-haider.vercel.app/', techStack: "React, TypeScript, GraphQL (Apollo), Clerk Auth, Redux Toolkit, TanStack Query, Socket.IO, Express, MongoDB, Cloudinary, TailwindCSS" },
    { id: 8, img: "/insta.webp", des: "A social media application", head: 'Instagram (MERN)', link: 'https://instagram-usman-haider.vercel.app/', techStack: "React, Redux Toolkit, GSAP, Framer Motion, Express, MongoDB, Cloudinary, JWT, Resend, TailwindCSS" },
    { id: 9, img: "/brainwave.webp", des: "A Designing Clone", head: 'Brainwave (React)', link: 'https://brainwave-ochre-tau.vercel.app/', techStack: "React, GSAP, Framer Motion, Locomotive Scroll, React Router, TailwindCSS" },
    { id: 10, img: "/zentry.webp", des: "A Gaming Website", head: 'Zentry (React)', link: 'https://zentry-rosy.vercel.app/', techStack: "React, GSAP, React Parallax Tilt, React Use, TailwindCSS" }
  ];

  return (
    <div
      className='bg-[#09090B] relative z-[14] pt-[170px] mini:pt-[150px] mobile:pt-[130px] micro:pt-[100px]'
    >

      {/* Fixed Detail Box */}
      <div
        className={`fixed z-[60] bg-[#111111] text-white p-5 rounded-2xl shadow-2xl pointer-events-none border border-zinc-700/50 w-[280px] transition-all duration-300 ${tooltipPos.show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        style={{ left: tooltipPos.left, top: tooltipPos.top }}
      >
        <h4 className="font-bold text-xl">{hoveredProject?.head}</h4>
        <p className="text-sm opacity-80 mt-1 leading-tight">{hoveredProject?.des}</p>
        <div className="mt-4 pt-3 border-t border-zinc-700/50">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block mb-1">Tech Stack</span>
          <p className="text-[13px] text-zinc-300 font-medium">{hoveredProject?.techStack}</p>
        </div>
      </div>

      <div className='min-h-[500px]'>
        <div className='flex justify-between items-center mx-[4.5vw] border-b-[blue] border-b-[1px] border-b-solid pb-7 lgtab:mb-20 tablet:mb-16 sm:mb-8 relative z-[50]'>
          <h1 className='w-full lg:w-[50%] sm:w-[70%] lgtab:w-[85%] lg:text-[50px] lg:leading-[60px] sm:text-[50px] sm:leading-[60px] lgtab:text-[45px] lgtab:leading-[55px] tablet:text-[40px] tablet:leading-[50px] mini:text-[36px] mini:leading-[43px] mobile:text-[32px] mobile:leading-[38px] micro:text-[28px] micro:leading-[33px] font-bold mini:text-center mobile:text-center micro:text-center font-["rej"]'>My Major Projects</h1>
          <p className='hidden lg:block w-[32%] text-[19px] leading-[25px] opacity-55'>These projects primarily focuses on the javascript and react concepts and understandings.</p>
        </div>
        <div className='md:columns-3 columns-2 mini:columns-1 mobile:columns-1 micro:columns-1 lg:w-[1000px] md:w-[calc(87vw+40px)] sm:w-[calc(80vw+40px)] lgtab:w-[calc(88vw+40px)] tablet:w-[calc(88vw+40px)] mini:w-[80vw] mobile:w-[85vw] micro:w-[85vw] pt-5 mx-auto relative'>
          {projects.map((proj) => (
            <SingleMajorProject
              key={proj.id}
              {...proj}
              isHovered={hoveredProject?.id === proj.id}
              onMouseEnter={(e) => handleMouseEnter(e, proj)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(ProjectColumnsPage);