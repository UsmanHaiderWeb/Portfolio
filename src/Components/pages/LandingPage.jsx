import React, { memo, useMemo, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import HandleResume from '../HandleResume'

const LandingPage = () => {
  const container = useRef()
  const tilt = useRef()
  const galaxy = useRef()

  // Build two star layers as box-shadow dot fields, spread over a generous
  // area so the scaled/tilted galaxy never reveals an empty edge.
  const stars = useMemo(() => {
    const w = window.innerWidth, h = window.innerHeight
    const r = (s) => Math.round((Math.random() * 1.6 - 0.3) * s)
    const layer = (n, alphaMin, blur) => Array.from({ length: n }, () =>
      `${r(w)}px ${r(h)}px ${blur} rgba(255,255,255,${(alphaMin + Math.random() * (1 - alphaMin)).toFixed(2)})`
    ).join(', ')
    return { far: layer(220, 0.25, '0px'), near: layer(70, 0.5, '1px') }
  }, [])

  const nebula = {
    backgroundColor: '#05060f',
    backgroundImage: `
      radial-gradient(ellipse at 20% 30%, rgba(99,52,168,0.35), transparent 55%),
      radial-gradient(ellipse at 80% 60%, rgba(30,64,175,0.30), transparent 55%),
      radial-gradient(ellipse at 60% 18%, rgba(168,52,140,0.20), transparent 50%)
    `,
  }

  // Intro reveal, timed to hand off from the loader curtain (bars open ~3.8s).
  // 1) headline lines rise out from behind their masks
  // 2) everything else cascades in (fade + rise, staggered)
  useGSAP(() => {
    // The curtain (LoaderPart2) has more bars on wider screens, so its
    // staggered open finishes later there -> hand off a touch later too.
    const w = window.innerWidth
    const introDelay = w >= 800 ? 4.4 : w >= 551 ? 4.25 : 4.15
    const tl = gsap.timeline({ delay: introDelay })
    tl.from('.reveal-line', {
      yPercent: 110,
      duration: 0.9,
      stagger: 0.12,
      ease: 'power4.out',
    })
    .from('.reveal-up', {
      y: 24,
      opacity: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
    }, '-=0.5')
  }, { scope: container })

  // 3D tilt: the hero turns to face the cursor (mouse right -> faces right,
  // up/down tilts accordingly). Smoothed with quickTo, springs back on leave.
  // Parallax shift (no tilt): hero glides toward the cursor, the starfield
  // drifts further in the same direction for depth.
  useGSAP(() => {
    const el = tilt.current
    const gx = galaxy.current
    gsap.set(gx, { transformOrigin: 'center center', scale: 1.5 })

    const tx = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power3.out' })
    const ty = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power3.out' })
    const gTx = gsap.quickTo(gx, 'x', { duration: 1.2, ease: 'power3.out' })
    const gTy = gsap.quickTo(gx, 'y', { duration: 1.2, ease: 'power3.out' })

    const SHIFT = 8 // hero shift in px — intentionally subtle
    const move = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1   // -1 left .. 1 right
      const ny = (e.clientY / window.innerHeight) * 2 - 1  // -1 top  .. 1 bottom
      tx(nx * SHIFT)
      ty(ny * SHIFT)
      gTx(nx * SHIFT * 1.8)   // background drifts further for depth
      gTy(ny * SHIFT * 1.8)
    }
    const reset = () => { tx(0); ty(0); gTx(0); gTy(0) }

    window.addEventListener('mousemove', move)
    document.addEventListener('mouseleave', reset)
    return () => {
      window.removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', reset)
    }
  })

  return (
    <div ref={container} className='min-h-screen w-full flex justify-center items-center relative flex-col overflow-hidden'>
      <div ref={galaxy} className='absolute inset-0 z-0 pointer-events-none' style={nebula}>
        <div className='absolute top-0 left-0 rounded-full' style={{ width: 1, height: 1, boxShadow: stars.far }}></div>
        <div className='absolute top-0 left-0 rounded-full' style={{ width: 2, height: 2, boxShadow: stars.near }}></div>
      </div>
      <div ref={tilt} className='relative z-10 flex flex-col justify-center items-center will-change-transform'>
        <h1 className='reveal-up text-[17px] mb-2 mobile:hidden micro:hidden'>I'm Usman Haider</h1>
        <div className='text-[60px] leading-[60px] tablet:text-[55px] tablet:leading-[55px] mini:text-[47px] mini:leading-[47px] mobile:text-[40px] mobile:leading-[40px] micro:text-[36px] micro:leading-[36px] relative mix-blend-difference'>
          <div className='overflow-hidden'>
            <h1 className='reveal-line text-center font-["rej"] mix-blend-difference'>FullStack</h1>
          </div>
          <div className='overflow-hidden'>
            <h1 className='reveal-line text-center font-["rej"] mix-blend-difference'>Mern Developer</h1>
          </div>
        </div>
        <p className='reveal-up my-3 w-[500px] tablet:w-[80vw] mini:w-[85vw] mobile:w-[90vw] micro:w-[93vw] text-center text-[18px]'>I focus on creating extreme experiences in my websites. I can create different websites such as ecommerce, animated, social media app, music player etc.</p>
        <div className='reveal-up'>
          <HandleResume rounded='xl' />
        </div>
      </div>
      <div className='reveal-up absolute left-10 bottom-5 mini:left-5 mobile:left-5 micro:left-3 micro:bottom-2 opacity-75'>
        <h4 className='font-["rej"] text-[17px]'>Usman Haider</h4>
        <p className='w-80 mobile:w-64 micro:w-[80vw] micro:text-[13px] mobile:text-[14px] sm:my-[6px]'>I'm a web developer, seeking for an internship to kick start my job career. I am very dedicated to my tasks.</p>
      </div>
      <div className='reveal-up absolute right-10 bottom-10 opacity-75'>
        <p className='text-[14px] text-right hidden sm:block lgtab:block'>Scroll Down <br /> To See Magic</p>
      </div>
    </div>
  )
}

export default memo(LandingPage)
