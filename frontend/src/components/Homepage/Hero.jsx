import React from "react";
import styles from "../../styles";
import { stats } from "../../constants";
import { ReactTyped } from "react-typed";
import { BsArrowDownCircle } from "react-icons/bs";
import scamImg from "../../assets/scam.png";

const Hero = () => {
  return (
    <>
      <section
        id='hero'
        className={`flex md:flex-row flex-row ${styles.paddingY}`}
      >
        <div className='flex flex-col justify-between items-center w-full md:m-[-50px]'>
          <h1 className='text-[30px] pl-[10px] ss:pl-[5px] font-poppins font-semibold ss:text-[55px] md:text-[55px] text-white inline-block text-transparent bg-clip-text'>
            Empower Your Trust, Defend Your Dreams
          </h1>
          <span className='pl-[10px] flex-1 font-poppins font-semibold ss:text-[60px] text-[30px] text-white text-transparent bg-clip-text'>
            Don't pave the way for Scammers
          </span>
          <p
            className={`${styles.paragraph} max-w-[950px] mt-5 pl-[10px] text-[25px] sm:text-[20px]`}
          >
            According to National Anti-Scam Centre $82.1 million is lost between
            October to December in 2023, Don't fall victims to scams. Learn to
            Identify and prevent it.
          </p>
          <div className='sm:flex w-[200px] justify-center items-center m-auto mt-[10px] '>
            <img
              className='w-[200px] h-[200px] relative z-[5] md:w-auto md:h-auto m-auto pt-[5px]'
              src={scamImg}
            ></img>
          </div>
        </div>
      </section>
      <div className='flex-1 justify-center items-center flex-row'>
        <div className='mx-auto flex-1 justify-center items-center flex-row mt-[10px]'>
          <h4 className='flex justify-center font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
            <ReactTyped
              strings={["Scams occured in Australia in 2023"]}
              typeSpeed={40}
            />
          </h4>
        </div>

        <section
          className={`${styles.flexCenter} animate-fadeInUp flex-row flex-wrap sm:mb-20 mb-6 mt-[-30px]`}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className='flex-1 flex justify-center items-center md:flex-row flex-col m-3 mt-12 mx-auto'
            >
              <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>
                {stat.value}
              </h4>
              <p className='font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
                {stat.title}
              </p>
            </div>
          ))}
        </section>
        <div className='flex justify-center md:mt-[-65px] '>
          <BsArrowDownCircle className='text-white text-3xl animate-float' />
        </div>
      </div>
    </>
  );
};

export default Hero;
