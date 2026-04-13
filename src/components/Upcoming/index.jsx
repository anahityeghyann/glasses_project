import axios from "axios"
import { useEffect, useState } from "react"

const Upcoming = () => {
    const [upcoming, setUpcoming] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/upcoming")
            .then((response) => setUpcoming(response.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        <div>
            {upcoming.map((glass) => (
                <div

                    className="bg-cover bg-center h-[100vh] w-full flex  flex-col justify-between items-center p-14"
                    style={{ backgroundImage: `url(${glass.image})` }}
                >
                    <h1 className="text-black text-7xl font-extrabold">{glass.title}</h1>
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
            ))}
        </div>
    )
}

export default Upcoming