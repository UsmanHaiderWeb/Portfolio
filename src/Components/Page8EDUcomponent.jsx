import React, { memo } from 'react'

const Page8EDUcomponent = (i) => {
  return (
    <div className='w-full flex justify-start items-start border-t-[1px] border-t-solid border-t-black pt-4 mb-10'>
        <div className='text-[14px] w-[120px] mobile:w-[80px] micro:w-[80px] translate-y-1'>{i.time}</div>
        <div className='w-[70%] mobile:w-[80%] micro:w-[80%]'>
            <h4 className='font-semibold text-[25px] leading-[30px]'>{i.degree}</h4>
            <p className='text-[15px]'>
                <span className='text-[16px] font-semibold'>{i.degName} :</span> &nbsp; {i.des}
            </p>
        </div>
    </div>
  )
}

export default memo(Page8EDUcomponent);