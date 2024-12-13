import React, { memo } from 'react'
import FresherDes from './FresherDes'

const Footer = () => {
  return (
    <footer className='bg-[#e2e2e2] relative z-[19] px-[5vw] min-h-screen flex justify-between items-start flex-wrap overflow-hidden pt-14'>
        <div className='sm:w-auto w-full'>
            <h1 className='w-full sm:w-[31vw] text-[50px] leading-[55px] sm:text-[8vw] sm:leading-[7.5vw] micro:text-[40px] micro:leading-[50px] font-["rej"] sm:font-medium font-semibold pb-2 sm:pb-0'>Get In Touch</h1>
        </div>
        <div className='flex justify-start items-start flex-col gap-y-6 sm:pr-20 pb-6'>
            <h1 className='text-[35px] micro:text-[30px] font-semibold translate-y-5'>Contact Info</h1>
            <div className='w-full mobile:w-[95%] sm:w-[35vw] flex justify-start items-center micro:items-start micro:flex-col border-t-[1px] border-t-solid border-t-zinc-950 pt-3 gap-x-4 mb-5 micro:gap-y-3'>
                <a href='mailto:usmanhaiderweb2005@gmail.com' target='_blank' className='w-16 h-16 rounded-full bg-[#dc8605] flex justify-center items-center'>
                    <svg className='w-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                        <path d="M18.8032 8.4928C19.4663 8.81764 20.2118 9 21 9C21.3425 9 21.6769 8.96557 22 8.89998V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H16.1C16.0344 3.32311 16 3.65753 16 4C16 5.23672 16.449 6.36857 17.1929 7.24142L12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L18.8032 8.4928ZM21 7C19.3431 7 18 5.65685 18 4C18 2.34315 19.3431 1 21 1C22.6569 1 24 2.34315 24 4C24 5.65685 22.6569 7 21 7Z"></path>
                    </svg>
                </a>
                <div className='w-[75%] micro:w-full micro:pl-1'>
                    <h1 className='text-[25px] font-semibold'>Email</h1>
                    <p><a href='mailto:usmanhaiderweb2005@gmail.com' target='_blank'>usmanhaiderweb2005@gmail.com</a> <br />You can mail me whenever you want, I will respond you as soon as possible.</p>
                </div>
            </div>
            <div className='w-full mobile:w-[95%] sm:w-[35vw] flex justify-start items-center micro:items-start micro:flex-col border-t-[1px] border-t-solid border-t-zinc-950 pt-3 gap-x-4 mb-5 micro:gap-y-3'>
                <a href='https://www.linkedin.com/in/usman-haider-2005jun/' target='_blank' className='w-16 h-16 rounded-full bg-[#dc8605] flex justify-center items-center'>
                    <svg className='w-9' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                        <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                    </svg>
                </a>
                <div className='w-[75%] micro:w-full micro:pl-1'>
                    <h1 className='text-[25px] font-semibold'>LinkedIn</h1>
                    <p><a href="https://www.linkedin.com/in/usman-haider-2005jun/" target='_blank'>https://www.linkedin.com/in/usman-haider-2005jun/</a> <br />You can also contact me on my LinkedIn profile, I will respond you as soon as possible.</p>
                </div>
            </div>
            <div className='w-full mobile:w-[95%] sm:w-[35vw] flex justify-start items-center micro:items-start micro:flex-col border-t-[1px] border-t-solid border-t-zinc-950 pt-3 gap-x-4 mb-5 micro:gap-y-3'>
                <a href='https://www.linkedin.com/in/usman-haider-2005jun/' target='_blank' className='w-16 h-16 rounded-full bg-[#dc8605] flex justify-center items-center'>
                    <img src="/GitHub.png" alt="Github Logo" width={36} height={36} className='w-10 h-auto' />
                </a>
                <div className='w-[75%] micro:w-full micro:pl-1'>
                    <h1 className='text-[25px] font-semibold'>Github</h1>
                    <p><a href="https://github.com/UsmanHaiderWeb" target='_blank'>https://github.com/UsmanHaiderWeb</a> <br />You can also check out my projects on my GitHub profile. This link will take you to my Github Acount.</p>
                </div>
            </div>
        </div>
        <div className='w-[350px] mobile:w-[300px] micro:w-[95%] sm:absolute sm:bottom-14 sm:left-10 sm:pt-0 py-10'>
            <FresherDes />
        </div>
        <div className='w-full self-end border-t-[1px] border-t-solid border-t-zinc-950 flex justify-between mini:justify-center mobile:justify-center micro:justify-center mini:flex-wrap mobile:flex-wrap micro:flex-wrap gap-x-10 mobile:gap-x-7 micro:gap-x-4 gap-y-2 items-center md:px-20 sm:px-5 py-3'>
            <div>&copy; All Rights are reserved</div>
            <div>Developed By Usman</div>
            <a href='https://wa.me/03376050847?text=Hello%20Usman!'>+92 337 6050847</a>
        </div>
    </footer>
  )
}

export default memo(Footer)