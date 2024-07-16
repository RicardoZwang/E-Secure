import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaCopy } from "react-icons/fa"; // Import eye icons for reveal button

const PassGen = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [showPassword, setShowPassword] = useState(false);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [error, setError] = useState("");
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [length, includeUppercase, includeNumbers, includeSymbols]);

  const generatePassword = () => {
    if (!includeUppercase && !includeNumbers && !includeSymbols) {
      setError("Select at least one option");
      return; // Stop the function if no options are selected
    }

    setError(""); // Clear any existing errors
    setButtonPressed(false);
    //Will be used for combinations
    const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = '!@#$%^&*()_+-=[]{}|;:",.<>?';
    let validChars = lowerLetters;

    if (includeUppercase) validChars += upperLetters;
    if (includeNumbers) validChars += numbers;
    if (includeSymbols) validChars += symbols;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword +=
        validChars[Math.floor(Math.random() * validChars.length)];
    }

    setPassword(generatedPassword);
  };

  const handleGenerateClick = () => {
    setButtonPressed(true); // Set that the button has been pressed
    generatePassword();
  };

  const copyToClipboard = () => {
    if (!password) return;
    navigator.clipboard.writeText(password).then(
      () => {
        alert("Password copied to clipboard!");
      },
      () => {
        alert("Failed to copy password");
      }
    );
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col items-center justify-center md:min-h-screen h-96 to-blue-800 p-4'>
      <div
        className='bg-white p-6 rounded shadow-md text-center '
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <div className='relative mb-4'>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            readOnly
            className='text-center w-full bg-gray-200 text-lg rounded p-2 pr-16'
          />
          <button
            onClick={toggleShowPassword}
            className='absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black'
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
          <button
            onClick={copyToClipboard}
            className='absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black pr-2'
          >
            <FaCopy />
          </button>
        </div>
        <div className='mb-4'>
          <label htmlFor='length' className='block mb-2'>
            Character Length: {length}
          </label>
          <input
            type='range'
            id='length'
            min='12'
            max='20'
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className='w-full bg-[#d3d3d3] h-[5px]'
          />
        </div>
        <div className='flex gap-7 mb-4 justify-center'>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
            />
            <span className='ml-2'>A-Z</span> {/* Apply margin-left */}
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
            />
            <span className='ml-2'>0-9</span> {/* Apply margin-left */}
          </label>
          <label className='flex items-center'>
            <input
              type='checkbox'
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
            <span className='ml-2'>!@#</span> {/* Apply margin-left */}
          </label>
        </div>
        <div className='h-7'>
          {error && <p className='text-red-500 mb-4'>{error}</p>}
        </div>

        <button
          className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700  rounded'
          onClick={handleGenerateClick}
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default PassGen;
