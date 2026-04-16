import hero_background from "/hero-bg.jpg"
import logo from "/logo2.svg"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"


const Hero = () => {
  const Motion = motion
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const smx = useSpring(mx, { stiffness: 120, damping: 20 })
  const smy = useSpring(my, { stiffness: 120, damping: 20 })
  const x = useTransform(smx, [-0.5, 0.5], [-12, 12])
  const y = useTransform(smy, [-0.5, 0.5], [-10, 10])

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${hero_background})` }}
        className="h-screen bg-cover bg-center"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect()
          const nx = (e.clientX - rect.left) / rect.width - 0.5
          const ny = (e.clientY - rect.top) / rect.height - 0.5
          mx.set(nx)
          my.set(ny)
        }}
        onMouseLeave={() => {
          mx.set(0)
          my.set(0)
        }}
      >
        <div className='flex items-start p-10'>
          <Motion.img
            src={logo}
            className='w-[200px] mt-5'
            alt=""
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <div className="flex w-full items-start justify-center text-white">
            <Motion.h1
              className="text-6xl md:text-8xl flex flex-col font-bold leading-none uppercase text-left"
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
              style={{ x, y }}
            >
              Creating the
              <Motion.span
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Future of
              </Motion.span>
              <Motion.span
                variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Vision
              </Motion.span>
            </Motion.h1>
          </div>
        </div>

        <Motion.div
          className="hidden md:flex flex-col text-white text-sm 
                        absolute top-10 right-10 space-y-4 mt-5"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          <div className="flex items-center justify-between w-48">
            <Motion.a href="#" className="hover:opacity-70" whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
              Products
            </Motion.a>
            <Motion.button
              className="border border-white px-3 py-1 rounded text-xs hover:bg-white hover:text-black transition"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
            >
              CART (0)
            </Motion.button>
          </div>
          <Motion.a href="#" className="hover:opacity-70" whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            About
          </Motion.a>
          <Motion.a href="#" className="hover:opacity-70" whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            Events
          </Motion.a>
          <Motion.a href="#" className="hover:opacity-70" whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            Upcoming
          </Motion.a>
          <Motion.a href="#" className="hover:opacity-70" whileHover={{ y: -1 }} transition={{ duration: 0.15 }}>
            Contact
          </Motion.a>
        </Motion.div>

        <Motion.div
          className="absolute bottom-10 left-10 max-w-sm text-xs tracking-widest uppercase text-white"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
        >
          <p>Make your smart glasses an</p>
          <p>extension of your personal style.</p>
          <p>Choose from a range of elegant</p>
          <p>lenses and frames.</p>
          <br />
          <p>Customize features to suit your</p>
          <p>preferences.</p>
        </Motion.div>

      </div>
    </div>
  );
};

export default Hero;