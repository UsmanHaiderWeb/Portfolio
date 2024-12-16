import { useGSAP } from '@gsap/react';
import React, { memo, useRef } from 'react'
import gsap from 'gsap'

const Page4IMGcontainer = (i) => {
  let imageCon = useRef();
  let container = useRef();
  const prizeName = useRef()
  const prize = useRef()
  useGSAP(() => {
    function imgAnimation(a, b) {
        let tl = gsap.timeline({scrollTrigger: {
            trigger: a,
            scroller: "body",
            start: "top 50%",
            end: "top 10%",
            scrub: 1,
        }});
        tl.from(b, {
            width: 0,
            height: 0,
            ease: 'back.out',
            // scrollTrigger: {
            //     trigger: a,
            //     scroller: "body",
            //     start: "top 50%",
            //     end: "top 10%",
            //     scrub: 1,
            // }
        }, 'same')
        let img = a.querySelector("img")
        tl.from(img, {
            scale: 2.2,
            // scrollTrigger: {
            //     trigger: a,
            //     scroller: "body",
            //     start: "top 50%",
            //     end: "top 10%",
            //     scrub: 1
            // }
        }, 'same')
    }
    imgAnimation(imageCon.current, container.current)
    function prizeAnimation(a, b){
        gsap.from(a, {
            opacity: 0,
            x: 250,
            scrollTrigger: {
                trigger: a,
                scroller: "body",
                start: `top ${b}%`,
                end: "top -500%",
                toggleActions: "restart reverse restart reverse",
            }
        })
    }
    prizeAnimation(prizeName.current, 70)
    prizeAnimation(prize.current, 70.2)
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