import React, { memo } from 'react'
import HandleResume from './HandleResume'

const Header = (i) => {
  return (
    <header className='fixed top-0 left-0 w-full z-[520]'>
        <nav className='flex justify-between items-center px-10 mobile:px-6 micro:px-2'>
            <div onClick={() => window.scrollTo(0, 0)}>
              <img src="/UsmanNav.webp" alt='Logo' className='w-28 micro:w-24 mix-blend-difference' />
            </div>
            <div className='flex justify-center items-center gap-x-8 text-[17px] micro:text-[15px] leading-[20px]'>
              <HandleResume rounded='full' />
            </div>
        </nav>
    </header>
  )
}

export default memo(Header)