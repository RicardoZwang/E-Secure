import React, { useState, useEffect } from "react";
import Fade from "react-awesome-reveal";
import { FaRegWindowClose } from "react-icons/fa";

const InformationModal = ({ isOpen, content, closeModal }) => {
  useEffect(() => {
    // Lock scrolling when the modal opens and revert back to normal after close
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("Case info " + content);
  // Function to navigate to the next content item
  const nextContent = () => {
    if (currentIndex < content.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Function to navigate to the previous content item
  const prevContent = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //This ensure that when opening other tips it will start from the begining
  const handleModalClose = () => {
    setCurrentIndex(0); // Reset the index to the first item
    closeModal(); // Call the passed closeModal function to update parent state
  };
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4'>
      <Fade direction='up' triggerOnce={true}>
        <div className='bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative'>
          <div className='flex justify-between items-center'>
            <h2 className='text-xl font-bold'>
              {content[currentIndex].cardId}. {content[currentIndex].title}
            </h2>
            <button
              onClick={handleModalClose}
              className='relative inline-flex items-center justify-center p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-110 bg-transparent '
              title='Close'
            >
              <FaRegWindowClose className='text-gray-800 hover:text-teal-500 text-2xl' />
            </button>
          </div>
          <hr className='my-4' />
          <p className='text-gray-800'>{content[currentIndex].description}</p>
          <div className='flex justify-end mt-4 space-x-4'>
            <button
              className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded disabled:opacity-50'
              onClick={prevContent}
              disabled={currentIndex === 0}
            >
              Previous
            </button>

            <button
              className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded disabled:opacity-50'
              onClick={nextContent}
              disabled={currentIndex === content.length - 1}
            >
              Next
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default InformationModal;