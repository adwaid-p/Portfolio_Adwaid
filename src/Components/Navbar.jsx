import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
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
                height: '80vh',
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
            <NavLink to='/'
            className={({ isActive }) => 
                isActive ? 'text-white text-[1.47rem]' : 'hover:text-white text-[1.47rem] font-semibold'
            }
            >Adwaid P</NavLink>
            <div className='hidden md:flex gap-14 text-base font-semibold'>
                <NavLink 
                    to='/projects' 
                    className={({ isActive }) => 
                        isActive ? 'text-white' : 'hover:text-white'
                    }
                >
                    Projects
                </NavLink>
                <NavLink 
                    to='/about' 
                    className={({ isActive }) => 
                        isActive ? 'text-white' : 'hover:text-white'
                    }
                >
                    About
                </NavLink>
                <NavLink 
                    to='/contact' 
                    className={({ isActive }) => 
                        isActive ? 'text-white' : 'hover:text-white'
                    }
                >
                    Contact
                </NavLink>
                <NavLink 
                    to='https://www.linkedin.com/in/adwaidp/' 
                    target="_blank" 
                    className='text-green-400 hover:underline underline-offset-2'
                >
                    Linkedin
                </NavLink>
                <NavLink 
                    to='https://github.com/adwaid-p' 
                    target="_blank" 
                    className='text-green-400 hover:underline underline-offset-2'
                >
                    Github
                </NavLink>
            </div>
            <div className='md:hidden flex flex-col items-end text-2xl font-semibold relative'>
                <span className='text-xl font-semibold flex gap-3' onClick={() => setMenu(!menu)}>
                    {menu ? 
                        <span className='flex gap-3 items-center text-white'>close<RiCloseFill /></span> : 
                        <span className='flex gap-3 items-center'>menu<RiMenuLine /></span>
                    }
                </span>
                <div ref={menuReff} className='h-0 w-full fixed top-16 right-0 bg-black/90 text-white flex flex-col items-end gap-10 text-2xl overflow-hidden z-50 px-5'>
                    <NavLink 
                        to='/projects' 
                        className={({ isActive }) => 
                            isActive ? 'text-white' : 'text-[#747474] hover:text-gray-300'
                        }
                        style={ {marginTop: '100px'} }
                    >
                        projects
                    </NavLink>
                    <NavLink 
                        to='/about' 
                        className={({ isActive }) => 
                            isActive ? 'text-white' : 'text-[#747474] hover:text-gray-300'
                        }
                    >
                        about
                    </NavLink>
                    <NavLink 
                        to='/contact' 
                        className={({ isActive }) => 
                            isActive ? 'text-white' : 'text-[#747474] hover:text-gray-300'
                        }
                    >
                        contact
                    </NavLink>
                    <NavLink 
                        to='https://www.linkedin.com/in/adwaidp/' 
                        target="_blank" 
                        className='text-green-400 hover:underline underline-offset-2'
                    >
                        linkedin
                    </NavLink>
                    <NavLink 
                        to='https://github.com/adwaid-p' 
                        target="_blank" 
                        className='text-green-400 hover:underline underline-offset-2'
                    >
                        github
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
