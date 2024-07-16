import React from "react";
import { useNavigate } from "react-router-dom";

const SectionCards = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col items-center w-full mt-56'>
      <h2
        className='text-5xl font-bold text-white mt-5 mb-10'
        data-aos='fade-up'
        data-aos-duration='3000'
        mirror='true'
      >
        Have a look at
      </h2>

      <div className='flex flex-wrap justify-center'>
        <div
          className='flex flex-col w-full sm:w-1/2 md:w-1/4 p-2'
          data-aos='fade-up'
          data-aos-duration='3000'
          mirror='true'
        >
          <div className='flex flex-col flex-grow bg-white shadow-md rounded-xl transition-transform duration-300 hover:scale-105'>
            <div className='p-6'>
              <h5 className='font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900'>
                Simulation
              </h5>
              <p className='font-sans text-base font-light leading-relaxed'>
                Experience simulated scam scenarios
              </p>
            </div>
            <div className='mt-auto p-6'>
              <button
                className='font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]'
                type='button'
                onClick={() => navigate("/simulation")}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          className='flex flex-col w-full sm:w-1/2 md:w-1/4 p-2'
          data-aos='fade-up'
          data-aos-delay='300'
          data-aos-duration='3000'
          mirror='true'
        >
          <div className='flex flex-col flex-grow bg-white shadow-md rounded-xl transition-transform duration-300 hover:scale-105'>
            <div className='p-6'>
              <h5 className='font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900'>
                Learning Center
              </h5>
              <p className='font-sans text-base font-light leading-relaxed'>
                The best time to learn about scams is now!
              </p>
            </div>
            <div className='mt-auto p-6'>
              <button
                className='font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]'
                type='button'
                onClick={() => navigate("/learning_center")}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          className='flex flex-col w-full sm:w-1/2 md:w-1/4 p-2'
          data-aos='fade-up'
          data-aos-delay='600'
          data-aos-duration='3000'
          mirror='true'
        >
          <div className='flex flex-col flex-grow bg-white shadow-md rounded-xl transition-transform duration-300 hover:scale-105'>
            <div className='p-6'>
              <h5 className='font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900'>
                Data
              </h5>
              <p className='font-sans text-base font-light leading-relaxed'>
                Explore the hidden patterns of Scams in Australia
              </p>
            </div>
            <div className='mt-auto p-6'>
              <button
                className='font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]'
                type='button'
                onClick={() => navigate("/data")}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
        <div
          className='flex flex-col w-full sm:w-1/2 md:w-1/4 p-2'
          data-aos='fade-up'
          data-aos-delay='900'
          data-aos-duration='3000'
          mirror='true'
        >
          <div className='flex flex-col flex-grow bg-white shadow-md rounded-xl transition-transform duration-300 hover:scale-105'>
            <div className='p-6'>
              <h5 className='font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900'>
                News
              </h5>
              <p className='font-sans text-base font-light leading-relaxed'>
                Read the latest news on Scams
              </p>
            </div>
            <div className='mt-auto p-6'>
              <button
                className='font-sans font-bold text-center uppercase transition-all text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md hover:shadow-lg focus:opacity-[0.85] active:opacity-[0.85]'
                type='button'
                onClick={() => navigate("/News")}
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionCards;
