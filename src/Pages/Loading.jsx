import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef, useState } from 'react'

const Loading = () => {
    const [progress, setProgress] = useState(0);

    const progressRef = useRef(null)
    const barRef = useRef(null)
    const loadingCircleRef = useRef(null)

    useGSAP(() => {
        gsap.to(progressRef.current, {
            width: `${progress}%`,
            duration: 0.5
        })
        gsap.to(loadingCircleRef.current, {
            width: `${progress}%`,
            duration: 0.5
        })
    }, [progress]);

    React.useEffect(() => {
        let start = 0;
        const interval = setInterval(() => {
            start += 1;
            setProgress(start);
            if (start === 100) {
                clearInterval(interval);
            }
        }, 25);

        return () => clearInterval(interval);
    }, []);

    useGSAP(() => {
        gsap.to(barRef.current, {
            height: '0%',
            duration: 0.5,
            stagger: 0.1
        })
    })

    return (
        // <div className='h-screen flex justify-center items-center text-white md:text-3xl gont-bold'>

        <div className='h-[100dvh] flex text-white overflow-hidden bg-white relative'>
            {/* <div className='h-[80%] w-full'>
                <div  className='flex justify-center items-center h-full'>
                    <div ref={loadingCircleRef} className='bg-black rounded-full aspect-square text-white text-2xl p-30 flex justify-center items-center'>
                    Loading... {progress}%
                    </div>
                </div>
            </div> */}
            {/* <div className='w-full flex flex-col gap-3'>
                <div className='text-3xl'>
                    {progress}%
                </div>
                <div className='h-[1px] bg-[#ffffff40]'></div>
                <div className=' flex flex-col order-t border-[#ffffff40] relative font-semibold text-2xl md:text-3xl'>
                    <span ref={progressRef} className='h-[2px] bg-red-600 absolute top-0 translate-y-[-50%]'></span>
                </div>
            </div> */}
            <div className='w-[80%] md:w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black md:text-3xl flex flex-col gap-3'>
                {/* {progress} */}
                {/* "Patience is not simply the ability to wait - it's how we behave while we're waiting." - Joyce Meyer */}
                <span> "The only way to do great work is to love what you do."</span><span className='place-self-end'>– Steve Jobs</span>
            </div>
            <div ref={barRef} className='border h-full w-1/3 md:w-1/6'></div>
            <div ref={barRef} className='border h-full w-1/3 md:w-1/6'></div>
            <div ref={barRef} className='border h-full w-1/3 md:w-1/6'></div>
            <div ref={barRef} className='md:inline hidden border h-full w-1/6'></div>
            <div ref={barRef} className='md:inline hidden border h-full w-1/6'></div>
            <div ref={barRef} className='md:inline hidden border h-full w-1/6'></div>
            <div className='w-full flex flex-col gap-3 absolute px-10 bottom-10 text-black'>
                <div className='text-3xl'>
                    {progress}%
                </div>
                <div className='h-[1px] bg-[#ffffff40] w-full'></div>
                <div className=' flex flex-col order-t border-[#ffffff40] relative font-semibold text-2xl md:text-3xl'>
                    <span ref={progressRef} className='h-[2px] bg-red-600 absolute top-0 translate-y-[-50%]'></span>
                </div>
            </div>
        </div>
        // </div>
    )
}

export default Loading