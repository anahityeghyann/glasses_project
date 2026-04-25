import axios from 'axios'
import React, { useEffect, useState } from 'react'
import About from '../About'
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useCart } from "../../context/useCart"

const Glasses = () => {
    const Motion = motion
    const { addItem } = useCart()
    const [glasses, setGlasses] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/glasses")
            .then((response) => setGlasses(response.data))
            .catch((error) => console.error(error))
    }, [])
    return (
        <div className="bg-gradient-to-b from-white to-zinc-50/80">
            <About />
            <Motion.div
                id="products"
                className='scroll-mt-8 flex flex-wrap gap-8 justify-center min-h-[100vh] items-center px-4 py-16'
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
                }}
            >
                {glasses.map((glass) => (
                    <Motion.div
                        key={glass.id}
                        className='w-[400px] flex flex-col gap-3 will-change-transform'
                        variants={{
                            hidden: { opacity: 0, filter: "blur(8px)", scale: 0.99 },
                            show: { opacity: 1, filter: "blur(0px)", scale: 1 },
                        }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.995 }}
                    >
                        <Link to={`/glasses/${glass.id}`}>
                            <Motion.img
                                src={glass.image}
                                alt=""
                                className='w-[400px]'
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            />
                        </Link>
                        <div className='flex w-full justify-between'>
                            <div>
                                <p className='text-xs font-bold text-zinc-500 mb-1'>{glass.category}</p>
                                <Link to={`/glasses/${glass.id}`} className="hover:underline">
                                    <h3 className='text-base font-bold'>{glass.model}</h3>
                                </Link>
                            </div>
                            <div className='text-end'>
                                <p className='text-xs font-bold text-zinc-500 mb-1'>Price</p>
                                <h3 className='text-base font-bold'>${glass.price} USD</h3>
                            </div>
                        </div>
                        <Motion.button
                            className='w-[100%] bg-orange-500 text-white py-2 rounded-xl'
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            transition={{ duration: 0.15 }}
                            type="button"
                            onClick={() =>
                              addItem({
                                id: glass.id,
                                model: glass.model,
                                price: glass.price,
                                image: glass.image,
                                qty: 1,
                              })
                            }
                        >
                            Add to cart
                        </Motion.button>
                    </Motion.div>
                ))}

            </Motion.div>
        </div>

    )
}

export default Glasses