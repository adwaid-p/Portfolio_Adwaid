import React from 'react'
import Navbar from '../Components/Navbar'
import uberImg from '../assets/UberImage.webp'
import netflixImg from '../assets/netflix1.png'
import emsImg from '../assets/EMS.png'

const Projects = () => {
  return (
    <div className='bg-[#000000] min-h-screen relative'>
      {/* Background vertical lines */}
      <div className='fixed inset-0 flex justify-between px-6 md:px-28 pointer-events-none'>
        <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='md:inline hidden w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='md:inline hidden w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='md:inline hidden w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='md:inline hidden w-[1px] h-full bg-[#ffffff1a]'></div>
      </div>

      {/* Content container */}
      <div className='relative px-6 md:px-28 z-10'>
        <Navbar />
        <div className='py-28'>
          {/* <h1 className='text-[#a3a3a3] text-4xl md:text-7xl'>Projects</h1> */}
          <div className='flex flex-col gap-40 md:gap-[15rem]'>
            {/* <h1 className='h-screen text-white text-5xl md:text-9xl mt-24'>
              <span>Full stack</span><br />
              <span className='relative left-16 md:left-36'>Uber clone</span>
            </h1> */}
            <div className='flex flex-col md:flex-row items-center justify-between gap-20'>
              <div className='md:w-1/2 text-[#a3a3a3]'>
                <h1 className='text-[#a3a3a3] text-3xl md:text-4xl mb-6 font-semibold'>01.Uber Clone – Ride-Booking App</h1>
                <div className='inline-block md:hidden md:w-1/2 mb-10 mt-2'>
                  <img className='w-[90%]' src={uberImg} alt="" />
                </div>
                <p className='text-lg'>
                  A full-stack ride-booking web application inspired by Uber, designed to provide seamless ride-hailing experiences. Built using the MERN stack, it features real-time ride tracking, secure authentication, fare estimation, and an intuitive user interface for both riders and drivers.
                  <br />
                  The app ensures a smooth user experience with responsive design and interactive elements, making ride booking effortless on any device.
                </p>
                <button className=' border border-[#a3a3a3] px-20 py-3 text-xl font-semibold mt-10 hover:bg-white hover:text-black'>See More</button>
              </div>
              <div className='hidden md:inline-block md:w-1/2'>
                <img className='w-[90%]' src={uberImg} alt="" />
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between gap-20'>
              <div className='hidden md:inline-block md:w-1/2'>
                <img className='w-[90%]' src={netflixImg} alt="" />
              </div>
              <div className='md:w-1/2 text-[#a3a3a3]'>
                <h1 className='text-[#a3a3a3] text-3xl md:text-4xl mb-6 font-semibold'>02.Netflix Clone – Streaming Platform</h1>
                <div className='inline-block md:hidden md:w-1/2 mb-10 mt-2'>
                  <img className='w-[130%]' src={netflixImg} alt="" />
                </div>
                <p className='text-lg'>
                  A feature-rich Netflix clone built with React for the frontend and Firebase for the backend. This project replicates the core functionalities of Netflix, offering an engaging and intuitive user experience. Users can browse movies and TV shows by genre, view detailed information, and bookmark their favorites securely. The responsive design ensures seamless viewing across all devices, while Firebase handles authentication and real-time data updates efficiently.
                </p>
                <button className=' border border-[#a3a3a3] px-20 py-3 text-xl font-semibold mt-10 hover:bg-white hover:text-black'>See More</button>
              </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-between gap-20'>
              <div className='md:w-1/2 text-[#a3a3a3]'>
                <h1 className='text-[#a3a3a3] text-3xl md:text-4xl mb-6 font-semibold'>03.WorkFlow – Employee Management System</h1>
                <div className='inline-block md:hidden md:w-1/2 mb-10 mt-2'>
                  <img className='w-[130%]' src={emsImg} alt="" />
                </div>
                <p className='text-lg'>
                  WorkFlow is a comprehensive employee management system built using the MERN stack, designed to streamline HR operations and improve organizational efficiency. It offers features such as employee record management, attendance tracking, role-based access, and performance monitoring. With a user-friendly interface and secure authentication, WorkFlow helps businesses manage their workforce efficiently while ensuring data security and accessibility from any device.
                </p>
                <button className=' border border-[#a3a3a3] px-20 py-3 text-xl font-semibold mt-10 hover:bg-white hover:text-black'>See More</button>
              </div>
              <div className='hidden md:inline-block md:w-1/2'>
                <img className='w-[90%]' src={emsImg} alt="" />
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects