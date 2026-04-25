import axios from "axios"
import { useEffect, useMemo, useRef, useState } from "react"

const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const lastWheelAtRef = useRef(0)
    useEffect(() => {
        axios.get("http://localhost:3000/upcoming")
            .then((response) => {
                const data = Array.isArray(response.data) ? response.data : []
                setUpcoming(data)
                setActiveIndex((prev) => Math.max(0, Math.min(data.length - 1, prev)))
            })
            .catch((error) => console.error(error))
    }, [])

    const activeGlass = useMemo(() => upcoming[activeIndex], [upcoming, activeIndex])

    useEffect(() => {
        const el = document.getElementById("upcoming")
        if (!el) return

        const onWheel = (e) => {
            if (upcoming.length <= 1) return

            const direction = Math.sign(e.deltaY)
            if (direction === 0) return

            const isScrollingDown = direction > 0
            const atFirst = activeIndex <= 0
            const atLast = activeIndex >= upcoming.length - 1
            if ((atFirst && !isScrollingDown) || (atLast && isScrollingDown)) return
            const now = Date.now()
            if (now - lastWheelAtRef.current < 500) {
                e.preventDefault()
                return
            }

            lastWheelAtRef.current = now
            e.preventDefault()
            setActiveIndex((idx) => {
                const next = idx + (direction > 0 ? 1 : -1)
                return Math.max(0, Math.min(upcoming.length - 1, next))
            })
        }

        el.addEventListener("wheel", onWheel, { passive: false })
        return () => el.removeEventListener("wheel", onWheel)
    }, [upcoming.length, activeIndex])

    return (
        <section
            id="upcoming"
            className="scroll-mt-8 bg-cover bg-center h-[100vh] w-full flex flex-col justify-between items-center p-14"
            style={{ backgroundImage: activeGlass?.image ? `url(${activeGlass.image})` : undefined }}
        >
            <h1 className="text-black text-7xl font-extrabold">
                {activeGlass?.title ?? ""}
            </h1>

            <div className="flex flex-col items-center gap-6">
                <div className="flex items-center gap-2">
                    {upcoming.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={() => setActiveIndex(i)}
                            className={[
                                "h-2 w-2 rounded-full border border-black/50",
                                i === activeIndex ? "bg-black" : "bg-white/50",
                            ].join(" ")}
                            aria-label={`Upcoming item ${i + 1}`}
                        />
                    ))}
                </div>

                <button className="
              px-24 py-5
              rounded-lg
              text-black tracking-widest
              bg-gradient-to-b from-white/40 to-gray-300/40
              backdrop-blur-xl
              border border-black/30
              shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              font-semibold
              text-sm
">
                    PRE ORDER
                </button>
            </div>
        </section>
    )
}

export default Upcoming