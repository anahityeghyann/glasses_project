import React, { useState, useEffect } from 'react';
import axios from 'axios';

const cities = ["LONDON", "PARIS", "MILAN", "BERLIN"];

const EventCard = ({ event }) => {
  return (
    <div className="flex items-center gap-10 max-w-6xl mx-auto my-12">
      <div className="relative h-[668px] w-[660px] bg-[#c5712c] rounded-[20px] p-10 flex items-center justify-center overflow-hidden">
        <img
          src={event.image}
          alt={event.alt}
          className="h-[520px] w-[520px] object-cover rounded-[20px]"
        />
        <div className="h-[520px] w-30 bg-white opacity-35 absolute left-10 top-1/2 -translate-y-1/2 z-10 rounded-l-[20px]" />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 h-[520px] flex items-center z-20">
          <div className="absolute left-8 text-sm space-y-2">
            {cities.map((city) => (
              <p
                key={city}
                className={
                  city === event.activeCity
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

      <div className="h-[668px] w-[660px] bg-[rgb(31,31,31)] rounded-[15px] flex flex-col justify-center p-12 gap-5 transition-transform duration-300 ease-out">
        <p className="text-[rgb(247,96,0)]">{event.date}</p>
        <h1 className="text-white text-4xl font-semibold">
          {event.title}
        </h1>
        <p className="text-white text-xl leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
};

const Events = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/events")
      .then((response) => {
        setEventsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="space-y-24">
      {eventsData.map((event) => (
        <EventCard key={event.id || event.title} event={event} />
      ))}
    </div>
  );
};

export default Events;