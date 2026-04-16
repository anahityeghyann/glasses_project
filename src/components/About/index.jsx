import { motion } from "framer-motion"

const About = () => {
    const Motion = motion
    return (
        <div className='flex justify-between h-[40vh] p-10'>
            <Motion.p
                className='text-[40px] font-bold leading-none uppercase'
                initial={{ opacity: 0, filter: "blur(6px)", scale: 0.995 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                about
            </Motion.p>
            <div className='flex text-3xl items-center h-[50vh] justify-around w-[150vh]'>
                <Motion.h1
                    className='w-142 text-[64px] font-bold leading-none'
                    initial={{ opacity: 0, filter: "blur(8px)", scale: 0.995 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    PERSONALIZE YOUR SMART GLASSES FOR A UNIQUE EXPERIENCE.
                </Motion.h1>
                <Motion.p
                    className='flex flex-col gap-5 text-base w-82.75 leading-none font-bold'
                    initial={{ opacity: 0, filter: "blur(8px)", scale: 0.995 }}
                    whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.06 }}
                >
                    MAKE YOUR SMART GLASSES AN EXTENSION OF YOUR PERSONAL STYLE. CHOOSE FROM A RANGE OF ELEGANT LENSES AND FRAMES.
                    CUSTOMIZE FEATURES TO SUIT YOUR PREFERENCES.
                </Motion.p>
            </div>
        </div>
    )
}

export default About