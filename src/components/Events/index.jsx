import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';

const cities = ["LONDON", "PARIS", "MILAN", "BERLIN"];

const LeftStickyCard = ({ activeEvent }) => {
  return (
    <div className="relative h-[668px] w-[500px] bg-[#c5712c] rounded-[20px] p-10 flex items-center justify-center overflow-hidden">
      {activeEvent?.image ? (
        <img
          src={activeEvent.image}
          alt={activeEvent.alt ?? ""}
          className="h-[520px] w-[520px] object-cover rounded-[20px] transition-opacity duration-300"
        />
      ) : null}
      <div className="h-[520px] w-30 bg-white opacity-35 absolute left-10 top-1/2 -translate-y-1/2 z-10 rounded-l-[20px]" />
      <div className="absolute left-10 top-1/2 -translate-y-1/2 h-[520px] flex items-center z-20">
        <div className="absolute left-8 text-sm space-y-2">
          {cities.map((city) => (
            <p
              key={city}
              className={
                city === activeEvent?.activeCity
                  ? "text-orange-500 font-bold"
                  : "text-white"
              }
            >
              {city}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

const RightEventCard = React.forwardRef(function RightEventCard({ event }, ref) {
  return (
    <section ref={ref} className="h-[668px] w-[660px]">
      <div className="h-full w-full bg-[rgb(31,31,31)] rounded-[15px] flex flex-col justify-center p-12 gap-5">
        <p className="text-[rgb(247,96,0)]">{event.date}</p>
        <h1 className="text-white text-4xl font-semibold">
          {event.title}
        </h1>
        <p className="text-white text-xl leading-relaxed">
          {event.description}
        </p>
      </div>
    </section>
  );
});

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0)
  const rightRefs = useRef([])

  useEffect(() => {
    axios.get("http://localhost:3000/events")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : []
        setEventsData(data);
        setActiveIndex((prev) => Math.max(0, Math.min(data.length - 1, prev)))
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const activeEvent = useMemo(() => eventsData[activeIndex], [eventsData, activeIndex])

  useEffect(() => {
    if (!eventsData?.length) return
    const elements = rightRefs.current.filter(Boolean)
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        let best = null
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry
        }
        if (!best) return
        const idx = Number(best.target.getAttribute("data-index"))
        if (!Number.isNaN(idx)) setActiveIndex(idx)
      },
      {
        root: null,
        threshold: [0.35, 0.5, 0.65, 0.8],
        rootMargin: "-20% 0px -45% 0px",
      }
    )

    for (const el of elements) observer.observe(el)
    return () => observer.disconnect()
  }, [eventsData])

  return (
    <div className="max-w-6xl mx-auto my-12">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="lg:sticky lg:top-10 lg:self-start">
          <LeftStickyCard activeEvent={activeEvent} />
        </div>

        <div className="flex flex-col gap-24">
          {eventsData.map((event, idx) => (
            <RightEventCard
              key={event.id || event.title || idx}
              event={event}
              ref={(el) => {
                if (el) el.setAttribute("data-index", String(idx))
                rightRefs.current[idx] = el
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;