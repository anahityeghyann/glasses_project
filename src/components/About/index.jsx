import React from 'react'

const About = () => {
    return (
        <div className='flex justify-between h-[40vh] p-10'>
            <p className='text-[40px] font-bold leading-none uppercase'>about</p>
            <div className='flex text-3xl items-center h-[50vh] justify-around w-[150vh]'>
                <h1 className='w-142 text-[64px] font-bold leading-none'>PERSONALIZE YOUR SMART GLASSES FOR A UNIQUE EXPERIENCE. </h1>
                <p className='flex flex-col gap-5 text-base w-82.75 leading-none font-bold'>
                    MAKE YOUR SMART GLASSES AN EXTENSION OF YOUR PERSONAL STYLE. CHOOSE FROM A RANGE OF ELEGANT LENSES AND FRAMES.
                    CUSTOMIZE FEATURES TO SUIT YOUR PREFERENCES.
                </p>
            </div>
        </div>
    )
}

export default About