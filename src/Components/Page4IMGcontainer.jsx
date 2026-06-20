import { useGSAP } from '@gsap/react';
import React, { memo, useRef } from 'react'
import gsap from 'gsap'

const Page4IMGcontainer = (i) => {
  let imageCon = useRef();
  let container = useRef();
  const prizeName = useRef()
  const prize = useRef()
  useGSAP(() => {
    // Image + its container reveal — scroll-linked, both tweens share the
    // same monotonic ease so the box and the image grow in lockstep.
    function imgAnimation(row, box) {
        const img = row.querySelector("img")
        const tl = gsap.timeline({ scrollTrigger: {
            trigger: row,
            scroller: "body",
            start: "top 50%",
            end: "top 10%",
            scrub: 1,
        }})
        tl.from(box, { width: 0, height: 0, ease: "power2.out" }, "reveal")
          .from(img, { scale: 2.2, ease: "power2.out" }, "reveal")
    }

    // Caption (title + subtitle) — staggered, tied to the SAME row and start
    // as the image so the two lines read as one unit with the reveal.
    function captionAnimation(row, lines) {
        gsap.from(lines, {
            opacity: 0,
            x: 250,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: row,
                scroller: "body",
                start: "top 50%",
                toggleActions: "play none none reverse",
            }
        })
    }

    imgAnimation(imageCon.current, container.current)
    captionAnimation(imageCon.current, [prizeName.current, prize.current])
  })

  return (
    <div ref={imageCon} className={`w-full h-[20vw] tablet:h-[22vw] mini:h-[80vw] mobile:h-[85vw] micro:h-[95vw] flex ${i.justify} items-center`}>
        <div className={`w-[40vw] h-[30vw] sm:w-[30vw] sm:h-[20vw] mini:w-full mobile:w-full micro:w-full mini:h-[60vw] mobile:h-[65vw] micro:h-[70vw] relative`}>
            <div ref={container} className={`w-full h-full overflow-hidden absolute top-0 ${i.imgPosition}`}>
                <img src={i.img} className='w-full h-full object-left object-cover cursor-pointer' onClick={() => location.href = i.link} />
            </div>
            <div className='absolute left-1 bottom-0 translate-y-[70px]'>
                <div ref={prizeName} className='text-[25px]'>{i.prizeName}</div>
                <div ref={prize}>{i.prize}</div>
            </div>
        </div>
    </div>
  )
}

export default memo(Page4IMGcontainer)