import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import profileImg from '../assets/profile_color.jpeg'
import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'


const About = () => {

  const imageContainerRef = useRef(null)
  const imageRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)

  const [currentTime, setCurrentTime] = useState(() => {
    const now = new Date();
    return now.toLocaleTimeString();
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(imageContainerRef.current, {
      width: '95%',
      duration: 1.5,
      scrollTrigger:{
        trigger: imageContainerRef.current,
        scrub:true,
        start: 'top 70%',
        end: 'top 20%',
        // markers: true
      },
      ease: 'power3.out'
    })

    gsap.to(imageRef.current, {
      // width: '90%',
      duration: 1.5,
      scale: 1.1,
      // y: -50,
      scrollTrigger:{
        trigger: imageRef.current,
        scrub:true,
        start: 'top 70%',
        end: 'top 0%',
        // markers: true
      },
      ease: 'power3.inOut'
    })

    const refs = [aboutRef, skillsRef]
    refs.forEach((ref) => {
      gsap.from(ref.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger:{
          trigger: ref.current,
          // scrub:true,
          start: 'top 70%',
          end: 'top 70%',
          // markers: true,
          toggleActions: 'play none none reverse',
        },
        ease: 'power3.out'
      })
    })

  }, [])

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
        {/* <button className='absolute top-[90dvh] right-6 bg-white rounded-lg text-[1.3rem] px-5 py-[0.4rem] font-semibold'>Resume</button> */}
        <Navbar />

        <div className='flex justify-between items-center mt-2 text-[#7474748d] md:text-[#747474] md:font-semibold'>
          <div>
            {/* <h1 className='text-lg font-semibold'>Location</h1> */}
            <h1>India</h1>
          </div>
          <div className=''>
            {/* <h1 className='text-lg font-semibold text-right'>Time</h1> */}
            <h1>{currentTime}</h1>
          </div>
        </div>

        <div className='py-20 '>
          {/* <h1 className='text-2xl text-[#ffffff40] flex items-center'><div className='bg-white w-fit h-[1px] inline-block'>About me</div><div className='bg-white w-full h-[1px] inline-block'></div></h1> */}
          {/* <div className='flex w-full items-center gap-2'>
            <h1 className='text-[#a3a3a3] text-lg'>About</h1>
            <div className='bg-[#ffffff25] w-full h-[0.2px]'></div>
          </div> */}
          <div>
            <h1 className='md:text-8xl text-5xl font-semibold text-white mt-16'>Hi I'm Adwid</h1>
            <h1 className='md:text-8xl text-5xl font-semibold text-white '>A Passionate Full-Stack Developer Crafting Innovative Digital Solutions</h1>
          </div>
          <div className='flex justify-center'>
            <div ref={imageContainerRef} className='w-full md:h-[150dvh] rounded-3xl overflow-hidden mt-20 md:mt-32 '>
              <img ref={imageRef} src={profileImg} className='w-full object-cover object-center' alt="" />
            </div>
          </div>
          <div>
            <div className='mt-32 text-[#a3a3a3]'>
              <div className='w-full h-[1px] bg-[#ffffff40]'></div>
              {/* <div className='flex justify-between items-center mt-2'>
                <div>
                  <h1 className='text-lg font-semibold'>Location</h1>
                  <h1>India</h1>
                </div>
                <div className=''>
                  <h1 className='text-lg font-semibold text-right'>Time</h1>
                  <h1>{currentTime}</h1>
                </div>
              </div> */}
            </div>

            <div className=''>
              <div ref={aboutRef} className=' flex flex-col md:flex-row justify-center items-center gap-6 md:py-24 py-12'>
                <div className='flex flex-col md:flex-row w-full md:w-1/2  gap-2'>
                  <h1 className='text-[#a3a3a3] text-xl'>About</h1>
                  {/* <div className='bg-[#ffffff25] w-full h-[0.2px]'></div> */}
                </div>
                <p className='md:w-1/2 md:text-xl text-lg text-[#a3a3a3]'>
                  Hi, I’m Adwid, a self-taught Full-Stack Developer with over 2 years of experience working on diverse projects. My passion for creativity and problem-solving drives me to explore new technologies and build impactful digital solutions.
                  <br />
                  Through this hands-on experience, I’ve built responsive, user-friendly websites, designed engaging user interfaces, and even dabbled in crafting motion graphics to tell impactful stories. I believe in turning challenges into opportunities and ensuring that every project I work on is a unique reflection of creativity and innovation.
                  <br />
                  I’m always learning, experimenting, and pushing boundaries in the vast world of technology. Let’s create something amazing together!
                </p>
              </div>

              <div className='w-full h-[0.5px] bg-[#ffffff40]'></div>

              <div ref={skillsRef} className=' flex flex-col md:flex-row justify-center items-center gap-6 md:py-24 py-12'>
                <div className='flex flex-col md:flex-row w-full md:w-1/2  gap-2'>
                  <h1 className='text-[#a3a3a3] text-xl'>Programming Languages & Others</h1>
                </div>
                <div className='md:w-1/2 md:text-xl text-lg text-[#a3a3a3] flex flex-col md:flex-row'>
                  <div className='md:w-1/3 flex flex-col justify-start'>
                    <h1 className='hover:text-white transition-all'>-- HTML</h1>
                    <h1 className='hover:text-white transition-all'>-- CSS</h1>
                    <h1 className='hover:text-white transition-all'>-- JavaScript</h1>
                    <h1 className='hover:text-white transition-all'>-- Tailwind CSS</h1>
                    <h1 className='hover:text-white transition-all'>-- Bootstrap</h1>
                    <h1 className='hover:text-white transition-all'>-- React</h1>
                  </div>
                  <div className='md:w-1/3 flex flex-col justify-start'>
                    <h1 className='hover:text-white transition-all'>-- Node.js</h1>
                    <h1 className='hover:text-white transition-all'>-- Express.js</h1>
                    <h1 className='hover:text-white transition-all'>-- MongoDB</h1>
                    <h1 className='hover:text-white transition-all'>-- GSAP</h1>
                    <h1 className='hover:text-white transition-all'>-- Lenis</h1>
                  </div>
                  <div className='md:w-1/3 flex flex-col justify-start'>
                    <h1 className='hover:text-white transition-all'>-- Firebase</h1>
                    <h1 className='hover:text-white transition-all'>-- Cloudinary</h1>
                    <h1 className='hover:text-white transition-all'>-- Figma</h1>
                    <h1 className='hover:text-white transition-all'>-- Git</h1>
                    <h1 className='hover:text-white transition-all'>-- Python</h1>
                  </div>
                </div>
              </div>

              <div className='w-full h-[0.5px] bg-[#ffffff40]'></div>

            </div>
          </div>

          <div className='flex flex-col jcenter mt-10 h-[50dvh]'>
            {/* <h1 className='text-[#a3a3a3] text-3xl md:text-4xl mb-6 font-semibold'>Contact</h1> */}
            {/* <div className='flex text-[#a3a3a3] text-3xl md:text-4xl mb-6 font-semibold'>contact <div className='bg-red-500 w-full h-1'></div></div> */}
            {/* <div className='bg-red-500 w-full h-1'></div> */}
            <div className='flex w-full items-center gap-2'>
              <h1 className='text-[#a3a3a3] text-xl'>Contact</h1>
              {/* <div className='bg-[#a3a3a3] w-full h-[0.2px]'></div> */}
            </div>
            <h1 className='text-[#a3a3a3] text-3xl md:text-7xl font-semibold mt-10'>Say hello!</h1>
            <button className='md:w-1/3 w-full border border-[#a3a3a3] px-20 py-3 mt-10 text-xl text-[#a3a3a3] font-semibold hover:bg-white hover:text-black transition-all mx-auto'>Contact</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About