import { useGSAP } from '@gsap/react'
import React, { memo, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

// Two interlocking jagged edges (same points, traversed opposite ways) so the
// halves tile into one seamless black "page" until they tear apart.
const TOP_CLIP = 'polygon(0% 0%, 100% 0%, 100% 50%, 92% 52%, 85% 43%, 77% 53%, 70% 46%, 62% 58%, 55% 47%, 48% 55%, 41% 44%, 34% 48%, 27% 57%, 19% 46%, 13% 54%, 6% 45%, 0% 50%)'
const BOTTOM_CLIP = 'polygon(0% 50%, 6% 45%, 13% 54%, 19% 46%, 27% 57%, 34% 48%, 41% 44%, 48% 55%, 55% 47%, 62% 58%, 70% 46%, 77% 53%, 85% 43%, 92% 52%, 100% 50%, 100% 100%, 0% 100%)'

const Loader = () => {
    const loader = useRef();
    const loader1 = useRef();
    const topHalf = useRef();
    const bottomHalf = useRef();
    const hasAnimated = useRef(false);
    const [ fontLoaded, setFontLoadedState ] = useState(false);

    useEffect(() => {
        document.fonts.ready.then(() => {
            setFontLoadedState(true);
        })
    }, [])

    // Paper-tear reveal: the two halves rip apart from the centre (top pulls
    // up, bottom pulls down) with a slight rotation for an organic tear.
    useGSAP(() => {
        gsap.to(topHalf.current, {
            yPercent: -100,
            rotate: -1.5,
            duration: 1.1,
            delay: 3.8,
            ease: "power2.inOut",
        })
        gsap.to(bottomHalf.current, {
            yPercent: 100,
            rotate: 1.5,
            duration: 1.1,
            delay: 3.8,
            ease: "power2.inOut",
        })
    })

    useGSAP(() => {
        if (fontLoaded && !hasAnimated.current) {
            hasAnimated.current = true;
            const spans = loader1.current.querySelectorAll("span");
            const tl = gsap.timeline({ delay: 0.3 });
            tl.to(spans, {
                opacity: 1,
                x: -250,
                stagger: 0.15,
                duration: 1.8,
                ease: "elastic.out(1, 0.5)"
            })
            .to(spans, {
                opacity: 0,
                stagger: 0.15,
                duration: 0.9,
                ease: "power2.in"
            }, "+=0.1");
        }
    }, [fontLoaded])

return (
    <div ref={loader} className='fixed top-0 left-0 z-[5000] w-full h-screen pointer-events-none'>
        <div ref={topHalf} className='absolute top-0 left-0 w-full h-full bg-black' style={{ clipPath: TOP_CLIP }}></div>
        <div ref={bottomHalf} className='absolute top-0 left-0 w-full h-full bg-black' style={{ clipPath: BOTTOM_CLIP }}></div>
        <div ref={loader1} className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-[25px] pointer-events-none translate-x-[250px]'><span className='opacity-0'>I'm</span>&nbsp;&nbsp;<span className='opacity-0'>Usman</span>&nbsp;&nbsp;<span className='opacity-0'> Haider </span></div>
    </div>
  )
}

export default memo(Loader)
