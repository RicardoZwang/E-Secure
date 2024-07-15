import React from 'react'
import image from '../assets/sim.png'
import { Link } from 'react-router-dom';
const navigateToSimulation = () => {
    window.open('https://fit5120.github.io/anti-fraud/', '_blank');
};

export const Simulation = () => {
    return (
        <div className='w-full bg-black py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img src={image} alt="/" />
                <div>
                    <h1 className='text-[#00df9a] font-bold pl-5 pb-3 pt-3 sm:text-2xl'>Cyber Incident Response Simulation</h1>
                    <p className='text-white pl-5'> An interactive simulator for you to experience practice responding to various cyber incidents, preparing you real-world scenarios
                    </p>
                    <div className='flex mx-auto items-center justify-center'>
                        <Link to="/sumlator">
                            <button className='bg-[#00df9a] sm:w-[200px] w-[150px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Begin</button>
                        </Link>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
