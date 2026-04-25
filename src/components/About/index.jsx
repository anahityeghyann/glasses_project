import { motion } from "framer-motion"

const About = () => {
  const Motion = motion
  return (
    <section
      id="about"
      className="scroll-mt-8 mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-orange-50/40 shadow-sm">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-zinc-300/20 blur-3xl"
        />

        <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:items-center">
          <div className="lg:col-span-3">
            <Motion.p
              className="text-3xl sm:text-4xl font-extrabold leading-none uppercase tracking-tight text-zinc-950"
              initial={{ opacity: 0, filter: "blur(6px)", scale: 0.995 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              About
            </Motion.p>
            <p className="mt-4 text-xs font-extrabold tracking-widest text-orange-600 uppercase">
              Smart eyewear
            </p>
          </div>

          <div className="lg:col-span-5">
            <Motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-zinc-900"
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.995 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Personalize your smart glasses for a unique experience.
            </Motion.h2>
          </div>

          <div className="lg:col-span-4">
            <Motion.p
              className="text-sm sm:text-base font-semibold leading-relaxed text-zinc-600"
              initial={{ opacity: 0, filter: "blur(8px)", scale: 0.995 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.06 }}
            >
              Make your smart glasses an extension of your personal style. Choose from a range of elegant lenses and frames.
              Customize features to suit your preferences.
            </Motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
