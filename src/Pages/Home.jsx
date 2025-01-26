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


const Home = () => {
  const navReff = useRef(null);
  const mouseReff = useRef(null);
  const headingReff = useRef(null);
  const projectsReff = useRef(null);

  const [loading, setLoading] = useState(true)

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


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2700);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger)
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.fromTo(headingReff.current,
  //     {
  //       opacity: 1,
  //       // y: 100
  //     },
  //     {
  //       opacity: 0,
  //       // y: '-100%',
  //       scrollTrigger: {
  //         trigger: headingReff.current,
  //         start: 'top 30%',
  //         end: 'top 0%',
  //         scrub: true,
  //         markers: true, // Remove or set to false to hide markers
  //       },
  //       // duration:3
  //     }
  //   );
  // }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    if (!loading) {
      const splitText = new SplitType('.about-text', { types: 'chars' });
      // console.log(splitText)
      // gsap.from(projectsReff.current, {
      //   scrollTrigger: {
      //     trigger: projectsReff.current,
      //     start: 'top 75%',
      //     end: 'top 25%',
      //     scrub: true,
      //     markers: true,
      //   },
      //   opacity: 0.2
      // })
      gsap.from(splitText.chars, {
        scrollTrigger: {
          trigger: '.about-text',
          start: 'top 75%',
          end: 'top 35%',
          scrub: true,
          // markers: true,
        },
        opacity: 0.2,
        stagger: 0.2
      })
    }
  }, [loading]);
  return (
    loading ? <Loading /> :
      <div className='bg-[#000000] px-6 md:px-28 md:pb-28'>
        <div ref={mouseReff} className=' md:size-[20px] bg-white rounded-full fixed top-0 left-0 z-50 pointer-events-none mix-blend-difference'></div>
        <Navbar navReff={navReff} />
        <div className='h-screen flex justify-center flex-col md:items-start'  style={{  backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,1)), url(${bgImage})`}} onMouseMove={circle}>
          <div ref={headingReff} className='text-[#a8a8a9] text-4xl md:text-8xl font-medium md:leading-[7rem] leading-tight mt-36 md:mt-0 '>
            <div className="bounding overflow-hidden">
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
            </div>
          </div>
        </div>

        <div className='h-screen flex md:flex-row flex-col md:justify-between md:items-center text-[#a8a8a9] mt-10 md:text-3xl text-xl mb-24'>
          <div className='md:w-1/2 h-full'>
            <h1 className='font-bold mt-24 text-red-500'>About</h1>
            <p className='mt-12 leading-relaxed about-text text-justify'>
              Hi, I'm Adwaid, a full-stack web developer passionate about building dynamic and user-friendly web applications. I specialize in the MERN stack and enjoy creating real-time chat apps, e-commerce platforms, and interactive web experiences. I'm always eager to learn new technologies and take on exciting challenges. Let’s connect and create something great!
            </p>
          </div>
          <div className='md:w-1/2 h-full flex items-center justify-center md:justify-end'>
            <img src={profileImg} alt="" className='w-[75%]' />
          </div>

        </div>

        <div className='flex flex-col mt-10 md:text-8xl text-4xl text-[#a8a8a9]'>
          <div ref={projectsReff} className='py-10 border-y flex justify-between items-center'><span className='flex gap-4'><span className='text-[#c73102] ml-4'>01</span>Uber Clone</span><i className="ri-arrow-right-up-line"></i></div>
          <div ref={projectsReff} className='py-10 border-b flex justify-between items-center'><span className='flex gap-4'><span className='text-[#c73102]'>02</span>Emp Manage</span><i className="ri-arrow-right-up-line"></i></div>
          <div ref={projectsReff} className='py-10 border-b flex justify-between items-center'><span className='flex gap-4'><span className='text-[#c73102]'>03</span> Google Drive Clone</span><i className="ri-arrow-right-up-line"></i></div>
          <div ref={projectsReff} className='py-10 border-b flex justify-between items-center'><span className='flex gap-4'><span className='text-[#c73102]'>04</span> Netflix Clone</span><i className="ri-arrow-right-up-line"></i></div>
        </div>
      </div>
  );
};

export default Home;
