import { useGSAP } from '@gsap/react';
import gsap from 'gsap/all';
import React, { useRef, useState } from 'react'

const Loading = () => {
    const [progress, setProgress] = useState(0);

    const progressRef = useRef(null)
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


    return (
        // <div className='h-screen flex justify-center items-center text-white md:text-3xl gont-bold'>

        <div className='h-[100dvh] flex flex-col justify-center items-center text-white overflow-hidden bg-white'>
            <div className='h-[80%] w-full'>
                <div  className='flex justify-center items-center h-full'>
                    <div ref={loadingCircleRef} className='bg-black rounded-full aspect-square text-white text-2xl p-30 flex justify-center items-center'>
                    Loading... {progress}%
                    </div>
                </div>
            </div>
            {/* <div className='w-full flex flex-col gap-3'>
                <div className='text-3xl'>
                    {progress}%
                </div>
                <div className='h-[1px] bg-[#ffffff40]'></div>
                <div className=' flex flex-col order-t border-[#ffffff40] relative font-semibold text-2xl md:text-3xl'>
                    <span ref={progressRef} className='h-[2px] bg-red-600 absolute top-0 translate-y-[-50%]'></span>
                </div>
            </div> */}
        </div>
        // </div>
    )
}

export default Loading