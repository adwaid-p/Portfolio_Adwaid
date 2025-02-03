import React, { useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import gsap from 'gsap/all'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const links = [
    { icon: "ri-linkedin-line", text: "@adwaid_p", link: 'https://www.linkedin.com/in/adwaidp/' },
    { icon: "ri-github-fill", text: "@adwaid-p", link: 'https://github.com/adwaid-p' },
    // { icon: "ri-mail-line", text: "adwaidpaloli01@gmail.com" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS credentials
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userID = import.meta.env.VITE_EMAILJS_USER_ID;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        // alert('Message sent successfully!');
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        // alert('Failed to send message. Please try again.');
      });
  }


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
        <div className='flex md:justify-between md:gap-12 md:flex-row flex-col'>
          <form onSubmit={handleSubmit} className='flex gap-5 flex-col justify-center h-[80dvh] md:w-4/6'>
            <input value={name} onChange={(e) => setName(e.target.value)} className='py-4 px-5 md:p-6 bg-[#4a4a4a50] border-none focus:outline-none text-white text-lg placeholder:text-[#ffffff50]' type="text" placeholder='Name' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='py-4 px-5 md:p-6 bg-[#4a4a4a50] border-none focus:outline-none text-white text-lg placeholder:text-[#ffffff50]' type="text" placeholder='email' />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="" className="p-6 bg-[#4a4a4a50] border-none focus:outline-none text-white text-lg placeholder:text-[#ffffff50] resize-none" id="" cols="30" rows="5" placeholder='Message'></textarea>
            <button type='submit' className='bg-white font-semibold text-black p-5 text-lg'>Submit</button>
          </form>

          <div className='flex flex-col gap-5 items-start md:pt-20  md:pb-0 pb-32  md:w-2/6'>
            {links.map((link, index) => {
              const bgref = useRef(null)
              const textRef = useRef(null);

              const handleMouseEnter = () => {
                gsap.to(bgref.current, {
                  width: '100%',
                  duration: 0.7,
                  ease: 'expo.inOut'
                });
                gsap.to(textRef.current, {
                  color: '#000',
                  duration: 0.7,
                  ease: 'expo.inOut'
                });
              };

              const handleMouseLeave = () => {
                gsap.to(bgref.current, {
                  width: '0%',
                  duration: 0.7,
                  ease: 'expo.inOut'
                });
                gsap.to(textRef.current, {
                  color: '#a3a3a3',
                  duration: 0.7,
                  ease: 'expo.inOut'
                });
              };
              return (
                <Link to={link.link} target='_blank' key={index} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative w-full border border-[#ffffff1f] p-5'>
                  <div ref={bgref} className='absolute  z-1 top-0 left-0 w-0 h-full bg-white'></div>
                  <div ref={textRef} className='relative z-2 flex gap-5 items-center h-full text-[#a3a3a3]'>
                    <h1 className=' text-3xl font-semibold'><i className={link.icon}></i></h1>
                    <h1 className=' text-lg font-semibold'>{link.text}</h1>
                  </div>
                </Link>
              )
            })}


          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact