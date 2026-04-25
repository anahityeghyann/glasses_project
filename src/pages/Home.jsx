import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Hero from "../components/Hero"
import Glasses from "../components/Glasses"
import Events from "../components/Events"
import Upcoming from "../components/Upcoming"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const id = location.hash?.replace("#", "")
    if (!id) return
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }, [location.pathname, location.hash])

  return (
    <>
      <Hero />
      <Glasses />
      <Events />
      <Upcoming />
      <Contact />
      <Footer />
    </>
  )
}
