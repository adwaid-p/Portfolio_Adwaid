import React, { useRef } from 'react'
import Navbar from '../../Components/Navbar';

const Project1 = () => {

      const navReff = useRef(null);
      const mouseReff = useRef(null);

    return (
        <div className='bg-[#000000] min-h-screen relative'>
            <div className='fixed inset-0 flex justify-between px-6 md:px-28 pointer-events-none'>
                <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
                <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
                <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
                <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
            </div>
            <div className='relative px-6 md:px-28 md:pb-28 z-7'>
                {/* <div ref={mouseReff} className='md:size-[20px] bg-white rounded-full fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference'></div> */}
                <Navbar navReff={navReff} />
                <div className='h-screen text-[#a8a8a8]'>
                    {/* <h1 className='text-2xl md:text-4xl font-semibold'>02.Netflix Clone – Streaming Platform</h1> */}
                    {/* <video src="https://res.cloudinary.com/djx5m8t8f/video/upload/v1694000023/NetflixClone/NetflixClone.mp4"></video> */}
                </div>
            </div>
        </div>
    )
}

export default Project1