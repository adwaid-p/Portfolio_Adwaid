import React from 'react'
import Navbar from '../Components/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className='h-screen flex justify-center md:items-center'>
        <h1 className='text-[#a8a8a9] text-4xl md:text-8xl font-medium md:leading-[7rem] leading-tight mt-36 md:mt-0'>Hi I'm Adwaid <br />Full Stack Developer specialized in creating <br /><span className='text-[#ffffff]'>web applications</span></h1>
      </div>
    </div>
  )
}

export default Home