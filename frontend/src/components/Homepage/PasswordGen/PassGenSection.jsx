import React from "react";
import PassGen from "./PassGen";
import { FaEyeSlash, FaCopy } from "react-icons/fa";
import Fade from "react-awesome-reveal";

const PassGenSection = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center'>
      <div className='container mx-auto px-4'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 my-6 '>
          <div data-aos='fade-right' data-aos-delay='300'>
            <PassGen />
          </div>
          <div data-aos='fade-left'>
            <div className='flex flex-col justify-center md:min-h-screen bg-transparent p-4'>
              <h1 className='text-3xl font-bold uppercase mb-5 text-green-400'>
                Random Password Generator
              </h1>
              <hr className={`border-b-2 border-white`} />
              <p className='text-lg mb-4 text-white mt-5'>
                Select at least one or all options of either Capital letters,
                Numerical Numbers, and Symbols. <br />
                <br />
                A default 12-letter lower and upper case password takes 300
                years to crack. Combining that with numerical values will
                require the hacker to spend 2 thousand years to crack, and 34
                thousand years if you add in some symbols. <br />
                <br />
                The longer and more complex the password, the better. <br />
                <br />
                After generating the password, simply click on the{" "}
                <span className='inline-block'>
                  <FaCopy color='#34d399' />
                </span>{" "}
                to copy to your clipboard or click{" "}
                <span className='inline-block'>
                  <FaEyeSlash color='#34d399' />
                </span>{" "}
                to view your generated password.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassGenSection;
