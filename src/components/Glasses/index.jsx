import axios from 'axios'
import React, { useEffect, useState } from 'react'
import About from '../About'

const Glasses = () => {
    const [glasses, setGlasses] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/glasses")
            .then((response) => setGlasses(response.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        <div>
            <About/>
            <div className='flex gap-8 justify-center h-[100vh] items-center' >
                {glasses.map((glass) => (
                    <div key={glass.id} className='w-[400px] flex flex-col gap-3'>
                        <img src={glass.image} alt="" className='w-[400px]' />
                        <div className='flex w-full justify-between'>
                            <div>
                                <p className='text-xs font-bold text-zinc-500 mb-1'>{glass.category}</p>
                                <h3 className='text-base font-bold'>{glass.model}</h3>
                            </div>
                            <div className='text-end'>
                                <p className='text-xs font-bold text-zinc-500 mb-1'>Price</p>
                                <h3 className='text-base font-bold'>${glass.price} USD</h3>
                            </div>
                        </div>
                        <button className='w-[100%] bg-orange-500 text-white py-2 rounded-xl'>Add to cart</button>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default Glasses