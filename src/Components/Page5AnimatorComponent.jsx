import React, { memo } from 'react'

const Page5AnimatorComponent = (i) => {
  return (
    <>
        <img src={i.imgName} className={`w-full h-full object-cover ${window.innerWidth > 1000 ? "object-[0%]" : (window.innerWidth < 550 ? "object-top" : "object-top")}`} />
        <div className='w-full h-full absolute top-0 left-0 flex justify-center items-end' style={{backgroundColor: "rgba(0,0,0,0.4)"}}>
          <div className='mobile:w-full micro:w-full text-center flex items-center flex-col py-20 mini:py-16 mobile:py-12 micro:py-10' style={{backdropFilter: "blur(8px)",}}>
            <h1 className='text-[50px] leading-[50px] micro:text-[45px] micro:leading-[45px]'>{i.name}</h1>
            <p className='w-[500px] mini:w-[80vw] mobile:w-[85vw] micro:w-[90vw] text-lg'>{i.about}</p>
            <a href={i.link} className={`flex justify-center items-center text-[20px] mt-3 px-7 ${i.not ? 'bg-[#e40606]' : "bg-white"} py-2 rounded-xl ${i.not ? 'text-white' : "text-black"} cursor-pointer`}>
              {i.not ? 'Not Yet Developed' : 
              <>
                Visit
                <svg width='24' fill='black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" ><path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path></svg>
              </>}
            </a>
          </div>
        </div>
    </>
  )
}

export default memo(Page5AnimatorComponent)