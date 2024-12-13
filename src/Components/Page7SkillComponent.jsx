import React, { memo } from 'react'

const Page7SkillComponent = (i) => {
  return (
    <div>
        <div className='border-t-[1px] border-t-solid border-t-black flex justify-center items-start gap-x-4 pt-4 mt-10'>
            <div className='font-["rej"] tracking-widest text-[18px] translate-y-2'>0{i.num}/</div>
            <div>
                <h1 className='text-[35px] leading-[40px] micro:text-[28px] micro:leading-[33px] font-["rej"]'>{i.heading}</h1>
                <p>{i.skills}</p>
            </div>
        </div>
    </div>
  )
}

export default memo(Page7SkillComponent)