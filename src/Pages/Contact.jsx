import React from 'react'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <div className='bg-[#000000] min-h-screen relative'>
      <div className='fixed inset-0 flex justify-between px-6 md:px-28 pointer-events-none'>
        <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='md:inline hidden w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='md:inline hidden w-[1px] h-full bg-[#ffffff1a]'></div>
        <div className='md:inline hidden w-[1px] h-full bg-[#ffffff1a]'></div>
        {/* <div className='md:inline hidden w-[1px] h-full bg-[#ffffff1a]'></div> */}
      </div>
      <div className='relative px-6 md:px-28 z-10'>
        <Navbar />
          <h1 className='text-[#a3a3a3] text-5xl font-semibold pt-10'>Say Hello</h1>
        <div className='flex justify-between gap-12'>
          <div className='flex gap-5 flex-col justify-center h-[80dvh] md:w-4/6'>
            <input className='p-6 bg-[#4a4a4a50] border-none focus:outline-none text-white placeholder:text-[#ffffff50]' type="text" placeholder='Name' />
            <input className='p-6 bg-[#4a4a4a50] border-none focus:outline-none text-white placeholder:text-[#ffffff50]' type="text" placeholder='email' />
            <textarea name="" className="p-6 bg-[#4a4a4a50] border-none focus:outline-none text-white placeholder:text-[#ffffff50]" id="" cols="30" rows="5" placeholder='Message'></textarea>
            <button className='bg-white font-semibold text-black p-5 text-lg'>Submit</button>
          </div>

          <div className='flex flex-col gap-5 items-start pt-20 h-[80dvh] md:w-2/6'>
            <div className='flex gap-3 items-center w-full border border-[#ffffff1f] p-5'>
              <h1 className='text-[#a3a3a3] text-3xl font-semibold'><i class="ri-linkedin-line"></i></h1>
              <h1 className='text-[#a3a3a37b] text-lg font-semibold'>adwaid_p</h1>
            </div>
            <div className='flex gap-5 items-center w-full border border-[#ffffff1f] p-5 '>
              <h1 className='text-[#a3a3a3] text-3xl font-semibold'><i class="ri-github-fill"></i></h1>
              <h1 className='text-[#a3a3a37b] text-lg font-semibold'>LinkedIn</h1>
            </div>
            <div className='flex gap-5 items-center w-full border border-[#ffffff1f] p-5'>
              <h1 className='text-[#a3a3a3] text-3xl font-semibold'><i class="ri-mail-line"></i></h1>
              <h1 className='text-[#a3a3a37b] text-lg font-semibold'>adwaidpaloli01@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact