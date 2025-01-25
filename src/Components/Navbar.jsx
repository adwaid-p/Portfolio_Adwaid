import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { RiMenuLine } from '@remixicon/react';
import { RiCloseFill } from '@remixicon/react';

const Navbar = ({ navReff }) => {
    const [menu, setMenu] = useState(false)
    const menuReff = useRef(null)

    useGSAP(() => {
        if (menu) {
            gsap.to(menuReff.current, {
                height: '60vh',
                duration: 0.3,
                ease: "power.inOut",
            })
        } else {
            gsap.to(menuReff.current, {
                height: '0',
                duration: 0.5,
                ease: "power3.Out",
            })
        }
    }, [menu])

    return (
        <div ref={navReff} className='flex justify-between items-start md:items-center py-7 border-b border-[#ffffff40] text-[#747474] tracking-tight sticky top-0 backdrop-blur-md bg-black/30 z-50'>
            <Link to='/' className='text-white text-[1.47rem]'>Adwaid P</Link>
            <div className='hidden md:flex gap-14 text-base font-semibold'>
                <Link to='/projects' className='hover:text-white'>projects</Link>
                <Link to='/about' className='hover:text-white'>about</Link>
                <Link to='/contact' className='hover:text-white'>contact</Link>
                <Link to='https://www.linkedin.com/in/adwaidp/' target="_blank" className='text-green-400 hover:underline underline-offset-2'>linkedin</Link>
                <Link to='https://github.com/adwaid-p' target="_blank" className='text-green-400 hover:underline underline-offset-2'>github</Link>
            </div>
            <div className='md:hidden flex flex-col items-end text-2xl font-semibold relative'>
                <span className='text-xl font-semibold flex gap-3' onClick={() => setMenu(!menu)}>
                    {menu ? <span className='flex gap-3 items-center text-white'>close<RiCloseFill /></span> : <span className='flex gap-3 items-center'>menu<RiMenuLine /></span>}
                </span>
                <div ref={menuReff} className='h-0 w-full fixed top-16 right-0 bg-black/90 text-white flex flex-col items-end gap-10 text-2xl overflow-hidden z-50 px-5 2'>
                    <Link to='/projects' className='hover:text-gray-300'>projects</Link>
                    <Link to='/about' className='hover:text-gray-300'>about</Link>
                    <Link to='/contact' className='hover:text-gray-300'>contact</Link>
                    <Link to='https://www.linkedin.com/in/adwaidp/' target="_blank" className='text-green-400 hover:underline underline-offset-2'>linkedin</Link>
                    <Link to='https://github.com/adwaid-p' target="_blank" className='text-green-400 hover:underline underline-offset-2'>github</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
