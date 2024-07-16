import React from "react";

//This is just a file i created to reuse buttons
const Buttons = ({ styles }) => {
  return (
    <button
      type='button'
      className={`transition-transform duration-300 transform hover:scale-110 bg-blue-gradient focus:outline-none rounded-[10px] py-4 px-6 font-poppins font-medium text-[18px] text-primary  outline-none ${styles}  hover:bg-violet-600`}
    >
      Get Started
    </button>
  );
};

export default Buttons;
