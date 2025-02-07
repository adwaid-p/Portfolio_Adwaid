import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import { RiArrowRightUpLine } from '@remixicon/react';
import 'remixicon/fonts/remixicon.css';
import profileImg from '../assets/profile.jpeg';
import bgImage from '../../public/bg_image.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Loading from './Loading';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';

import uberImg from '../assets/uber_laptop.avif'
import netflixImg from '../assets/netflix1.png'
import emsImg from '../assets/EMS.png'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navReff = useRef(null);
  const mouseReff = useRef(null);
  const headingReff = useRef(null);
  const projectsReff = useRef(null);
  const profileImageReff = useRef(null);

  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

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
    if (!loading) {
      var tl = gsap.timeline();
      tl.from(navReff.current, {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: 'Expo.easeInOut'
      })
        .to(".boundingelem", {
          y: 0,
          ease: 'Expo.easeInOut',
          duration: 2,
          stagger: .2,
          delay: -1
        });
    }
  }, [loading]);

  const circle = (e) => {
    gsap.to(mouseReff.current, {
      x: e.clientX,
      y: e.clientY,
      ease: 'ease',
      // duration: 0.3
    });
  };

  useEffect(() => {
    const updatePosition = (e) => {
      gsap.to(mouseReff.current, {
        x: e.clientX,
        y: e.clientY,
        ease: 'ease',
        duration: 0.5
      });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger)
  //   gsap.from(projectsReff.current, {
  //     scrollTrigger: {
  //       trigger: projectsReff.current,
  //       start: 'top 75%',
  //       end: 'top 25%',
  //       // scrub: true,
  //       markers: true,
  //       toggleActions: 'play none none reverse'
  //     },
  //     y: 50,
  //     opacity: 0,
  //     duration: 0.5,
  //     ease: 'power3.inOut'
  //   })
  // })


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2700);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!loading) {
      const splitText = new SplitType('.about-text', { types: 'chars' });
      // console.log(splitText)
      gsap.from(projectsReff.current, {
        scrollTrigger: {
          trigger: projectsReff.current,
          start: 'top 80%',
          end: 'top 20%',
          // scrub: 2,
          // markers: true,
          toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 75%',
          end: 'top 40%',
          scrub: true,
          // markers: true,
        },
        opacity: 0.2,
        stagger: 0.2
      })
      gsap.from(profileImageReff.current, {
        scrollTrigger: {
          trigger: profileImageReff.current,
          start: 'top 75%',
          end: 'top 30%',
          scrub: true,
          // markers: true,
          // toggleActions: 'restart play none reverse'
          // toggleActions: "pause none reverse none"
          toggleActions: "play reverse play reverse"
        },
        opacity: 0,
        scale: 0.8,

      })
    }
  }, [loading]);
  return (
    loading ? <Loading /> :
      <div className='bg-[#000000] min-h-screen relative'>
        {/* Background vertical lines */}
        <div className='fixed inset-0 flex justify-between px-6 md:px-28 pointer-events-none'>
          <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
          <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
          <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
          <div className='w-[1px] h-full bg-[#ffffff1a]'></div>
        </div>

        {/* Content container */}
        <div className='relative px-6 md:px-28 md:pb-28 z-7'>
          <div ref={mouseReff} className='md:size-[20px] bg-white rounded-full fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference'></div>
          <Navbar navReff={navReff} />

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

          <div className='h-[80vh] md:h-screen flex justify-center flex-col md:items-start' onMouseMove={circle}>
            <div ref={headingReff} className='text-[#a8a8a9] text-4xl md:text-8xl font-medium md:leading-[7rem] leading-tight mt-36 md:mt-0 '>
              {/* <div className="bounding overflow-hidden">
                <h1 className="boundingelem translate-y-[100%]">Hi, I'm Adwaid</h1>
              </div>
              <div className="bounding overflow-hidden">
                <h1 className="boundingelem  translate-y-[100%]">Full Stack Developer</h1>
              </div>
              <div className="bounding overflow-hidden pb-1">
                <h1 className="boundingelem  translate-y-[100%]">specialized in creating</h1>
              </div>
              <div className="bounding overflow-hidden">
                <h1 className="boundingelem  translate-y-[100%]"><span className='text-[#ffffff]'>Web Applications</span></h1>
              </div> */}
              <div className="bounding overflow-hidden">
                <h1 className="boundingelem translate-y-[100%] text-white">Hello! I'm Adwaid,</h1>
              </div>
              <div className="bounding overflow-hidden">
                <h1 className="boundingelem  translate-y-[100%] text-white">a Full Stack Developer</h1>
              </div>
              <div className="bounding overflow-hidden pb-1">
                <h1 className="boundingelem  translate-y-[100%] text-white">based in India</h1>
              </div>
            </div>
          </div>

          <div className='h-screen flex md:flex-row flex-col md:justify-between md:items-center text-[#a8a8a9] md:mt-10 md:text-[25px] text-lg mb-24'>
            <div className='md:w-1/2 h-full'>
              <h1 className='font-bold mt-24 text-white'>About</h1>
              <p className='mt-12 leading-relaxed about-text text-justify'>
                Hi, I'm Adwaid, a full-stack web developer passionate about building dynamic and user-friendly web applications. I specialize in the MERN stack and enjoy creating real-time chat apps, e-commerce platforms, and interactive web experiences. I'm always eager to learn new technologies and take on exciting challenges. Let's connect and create something great!
              </p>
            </div>
            <div className='md:w-1/2 h-full flex items-center justify-center md:justify-end'>
              <img ref={profileImageReff} src={profileImg} alt="" className='w-[75%]' />
            </div>

          </div>

          {/* <div className='flex flex-col gap-10'>
            <div className='md:flex md:flex-row flex-col gap-10'>
              <div ref={projectsReff} className='md:w-1/2 bg-[#3189fb] md:p-7 p-3 rounded-lg'>
                <div className='border-b pb-2 text-white flex justify-between items-center mt-6 mb-4'>
                  <h1 className='md:text-5xl text-4xl font-medium'>Uber Clone</h1>
                  <i className="ri-arrow-right-up-line md:text-6xl text-4xl font-semibold transition-all hover:rotate-45"></i>
                </div>
                <img src={uberImg} alt="" />
              </div>
              <div className='md:w-1/2  bg-white md:p-7 p-3 rounded-lg mt-16 md:mt-0'>
                <div className='border-b pb-2 border-[#a8a8a9]  flex justify-between items-center mt-6 mb-4'>
                  <h1 className='md:text-5xl text-4xl font-medium'>Netflix Clone</h1>
                  <i className="ri-arrow-right-up-line md:text-6xl text-4xl font-semibold transition-all hover:rotate-45"></i>
                </div>
                <img className='h-[75%] object-cover object-left' src={netflixImg} alt="" />
              </div>
            </div>
            <div className='md:flex gap-10'>
              <div className='md:w-1/2  bg-[#ff5100] md:p-7 p-3 md:rounded-lg rounded-md'>
                <div className='text-white border-b pb-2 border-white  flex justify-between items-center mt-6 mb-4'>
                  <h1 className='md:text-5xl text-4xl font-medium'>Emp System</h1>
                  <i className="ri-arrow-right-up-line md:text-6xl text-4xl font-semibold transition-all hover:rotate-45"></i>
                </div>
                <img className='h-[75%] object-cover object-left' src={emsImg} alt="" />
              </div>
              <div className='md:w-1/2'>
                <img src={uberImg} alt="" />
              </div>
            </div>


          </div> */}

          {/* <div className='flex flex-col mt-10 md:text-8xl text-4xl text-[#a8a8a9]'>
            <div ref={projectsReff} className='py-10 border-y flex justify-between items-center'><span className='flex gap-4'><span className='text-[#c73102] ml-4'>01</span>Uber Clone</span><i className="ri-arrow-right-up-line"></i></div>
            <div ref={projectsReff} className='py-10 border-b flex justify-between items-center'><span className='flex gap-4'><span className='text-[#c73102]'>02</span>Emp Manage</span><i className="ri-arrow-right-up-line"></i></div>
            <div ref={projectsReff} className='py-10 border-b flex justify-between items-center'><span className='flex gap-4'><span className='text-[#c73102]'>03</span> Google Drive Clone</span><i className="ri-arrow-right-up-line"></i></div>
            <div ref={projectsReff} className='py-10 border-b flex justify-between items-center'><span className='flex gap-4'><span className='text-[#c73102]'>04</span> Netflix Clone</span><i className="ri-arrow-right-up-line"></i></div>
          </div> */}

          <div ref={projectsReff} className='text-[1.6rem] md:text-7xl text-[#a8a8a9] font-semibold'>
            <div onClick={()=> navigate('/projects')} className='border-y border-[#a8a8a5] py-7 flex justify-between items-center'><span><span className='text-red-600 mr-6'>01</span>Uber Clone </span><i className="ri-arrow-right-up-line  text-5xl md:text-8xl font-semibold"></i></div>
            <div onClick={()=> navigate('/projects')} className='border-y border-[#a8a8a5] py-7 flex justify-between items-center'><span><span className='text-red-600 mr-6'>02</span>Emp Manage </span><i className="ri-arrow-right-up-line  text-5xl md:text-8xl font-semibold"></i></div>
            <div onClick={()=> navigate('/projects')} className='border-y border-[#a8a8a5] py-7 flex justify-between items-center'><span><span className='text-red-600 mr-6'>03</span>Netflix </span><i className="ri-arrow-right-up-line  text-5xl md:text-8xl font-semibold"></i></div>
            {/* <div onClick={()=> navigate('/projects')} className='border-y border-[#a8a8a5] py-7 flex justify-between items-center'><span><span className='text-red-600 mr-6'>04</span>Google Drive Clone </span><i className="ri-arrow-right-up-line  text-5xl md:text-8xl font-semibold"></i></div> */}
          </div>

          {/* <div>
            <div className='h-[80vh] border'>
              <img className='object-cover object-center h-[60vh] md:h-[100%]' src={uberImg} alt="" />
            </div>
            <div  className='h-[80vh] border'>
              <img className='object-cover object-center h-[60vh] md:h-[100%]' src={netflixImg} alt="" />
            </div>
            <div  className='h-[80vh] border'>
              <img className='object-cover object-center h-[60vh] md:h-[100%]' src={emsImg} alt="" />
            </div>
          </div> */}
        </div>
      </div>
  );
};

export default Home;
