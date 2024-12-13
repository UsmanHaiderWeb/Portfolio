import React, { memo } from 'react'
import Page8EDUcomponent from './Page8EDUcomponent'
import FresherDes from './FresherDes'

const Page8 = () => {
  return (<>
    <div className='page8 flex justify-between items-start sm:flex-nowrap flex-wrap px-[5vw] pt-5 relative gap-y-5'>
      <div className='w-full sm:w-auto'>
          <h1 className='w-[400px] mobile:w-[300px] micro:w-[250px] sm:w-[31vw] text-black text-[55px] leading-[60px] sm:text-[7vw] sm:leading-[6vw] mobile:text-[45px] mobile:leading-[45px] micro:text-[38px] micro:leading-[38px] mt-10 mobile:font-semibold micro:font-semibold'>Education & tech Studies</h1>
      </div>
      <div className='sm:pt-14 md:pr-14 w-full md:w-[50%] sm:w-[60%]'>
        <h1 className='text-[35px] font-semibold mb-5'>Education</h1>
        <Page8EDUcomponent time="Currently" degree="Bachelor of Science" degName="Information Technology" des="Studing at Government Islamia College Civillines, Lahore affiliated with The University of Punjab" />
        <Page8EDUcomponent time="2021 - 2023" degree="Intermediate" degName="Pre-Medical" des='I passed my inter from Government Islamia College Civilines, Lahore with grade "A".' />
        <Page8EDUcomponent time="2019 - 2021" degree="Matriculation" degName="Science Subjects" des='I passed my matriculation from United Academy, Shahdra, Lahore with grade "A+".' />
      </div>
    </div>
    <div className='w-[350px] mobile:w-[300px] micro:w-[95%] sm:absolute sm:bottom-8 sm:left-10 sm:pt-0 sm:pl-0 sm:pb-0 pl-7 mobile:pl-4 micro:pl-4 pb-14'>
      <FresherDes />
    </div>
  </>)
}

export default memo(Page8)