//加个防抖
import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Label, Textarea } from "flowbite-react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Predict = () => {
  const [inputMsg, setInputMsg] = useState("");
  const [result, setResult] = useState("");
  const [flag, setFlag] = useState();

  const handlePredictClick = () => {
    if (inputMsg != "") {
      axios
        .post(`http://localhost:3003/detect/?input=${inputMsg}`)
        .then((res) => {
          console.log("fetch data: ", res.data.prediction);
          setResult(res.data.prediction);
          setFlag(res.data.index);
        })
        .catch((err) => {
          console.error("Fail to fetch data", err);
        });
    } else {
      alert("You should input message!");
    }
  };

  const displayColor = flag == 1 ? "text-red-500" : "text-green-500";

  const handleClearClick = () => {
    setInputMsg("");
    setResult("");
  };

  return (
    <div className='flex flex-col justify-center items-center md:min-h-screen h-96 to-blue-800 p-4'>
      <div
        className='bg-white p-6 rounded shadow-md text-center '
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <div className='relative mb-4'>
          <div className='mb-2 block'>
            <Label
              htmlFor='comment'
              value='Your message'
              className='text-lg font-semibold'
            />
          </div>

          <Textarea
            id='comment'
            placeholder='Enter your message...'
            required
            rows={4}
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
          />
          <button
            className='absolute bottom-2 right-0 mt-2 mr-2 text-gray-600 hover:text-black'
            onClick={handleClearClick}
          >
            <FaTrash />
          </button>
        </div>

        <button
          className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700  rounded'
          onClick={handlePredictClick}
        >
          Detect
        </button>

        <div className='relative h-7 m-8 '>
          {result && (
            <p className={`${displayColor} text-xl font-semibold`}>{result}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Predict;
