import React from 'react';
import { ReactTyped } from "react-typed";
import '../assets/style/hero.css'

export const Hero = ({ scrollToStatistics }) => {
    return (
        <div className='text-white' id='begin'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>Empower Your Trust, Defend Your Dreams</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Don't Pave the Way for Scammers</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold py-5'>Identify and prevent </p>
                    <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-bold pl-2 text-red-600 underline md:pl-4'
                        strings={['Romance', 'Investment', 'Product Service', 'Extortion', 'Employment', 'Impersonation']}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                    <p className='md:text-4xl sm:text-3xl text-xl font-bold pl-2' >Scam</p>
                </div>
                <button onClick={scrollToStatistics} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Learn More</button>
            </div>
        </div>
    )
}
