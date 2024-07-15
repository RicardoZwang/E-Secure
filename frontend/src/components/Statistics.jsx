import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { Link } from 'react-router-dom';
function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}
export const Statistics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='flex item-center justify-center'>
                <h1 className='text-5xl font-bold text-[#3b82f6] md:text-5xl sm:text-3xl py-2'>Scams in 2024</h1>
            </div>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <div className='grid grid-rows-2 pt-5'>
                    <div className='flex items-baseline justify-center'>

                        <h1 className='text-5xl sm:text-6xl font-bold pt-5'><Number n={55} /></h1>
                        <p className="text-lg font-medium ml-2 ">Million</p>
                    </div>
                    <div className="flex mx-auto">
                        <p className="text-2xl font-bold text-[#e11d48] py-2 ">Financial Lost</p>

                    </div>
                </div>

                <div className='grid grid-rows-2 pt-5'>
                    <div className='flex items-center justify-center'>
                        <h1 className='text-5xl sm:text-6xl font-bold pt-5'><Number n={45103} /></h1>
                        <p className="text-lg font-large ml-2 ">+</p>
                    </div>
                    <div className="flex mx-auto">
                        <p className="text-2xl font-bold text-[#e11d48] py-2">Case Reported</p>
                    </div>
                </div>

            </div>
            <div className='flex mx-auto items-center justify-center'>
                <Link to="/data">
                    <button className='bg-[#00df9a] sm:w-[200px] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Learn more</button>
                </Link>
            </div>

        </div >
    )
}
