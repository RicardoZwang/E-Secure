import React, { useState, useEffect } from "react";
import Fade, { Slide } from "react-awesome-reveal";
import InformationModal from "./InformationModal";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const InformationCards = () => {
  const [tips, setTips] = useState([]); // State to hold the fetched tips
  const [tipCards, setCards] = useState([]); // State to hold the fetched cards
  //Fetch Tips from the Database
  useEffect(() => {
    const fetchTips = async () => {
      try {
        const response = await axios.get(`${apiUrl}/tips`);

        setTips(response.data); // Set the fetched tips into state
      } catch (error) {
        console.error("Failed to fetch tips:", error);
      }
    };

    fetchTips(); // Call the fetch function
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${apiUrl}/cards`);
        setCards(response.data); // Set the fetched cards into state
      } catch (error) {
        console.error("Failed to fetch cards:", error);
      }
    };

    fetchCards(); // Calls the fetch function
  }, []);

  //This is for the tips modal card that will appear after button click.
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = (cardId) => {
    //Gets only the specific tips card instead of all of them
    const filteredTips = tips.filter((tip) => tip.setId === cardId);
    setModalContent(filteredTips); // Set content based on index
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Empty dependency array means this effect runs once on mount

  return (
    <div className='min-h-screen flex flex-col justify-center items-center mt-10'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-8'>
          <h1 className='text-3xl font-bold uppercase mb-5 text-green-400'>
            Anti-Scam Guidance
          </h1>
          <hr className={`border-b-2`} />
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8'>
          {Array.isArray(tipCards) &&
            tipCards.map((card, index) => (
              <Fade
                key={card.id}
                cascade={false}
                delay={index * 500}
                direction='up'
              >
                <div className=' text-black p-4 rounded shadow-lg h-full'>
                  <img
                    className='w-full'
                    src={`${card.imageUrl}`}
                    alt='Image description'
                  />
                  <div className='px-6 py-4 flex flex-col'>
                    <div className='font-bold text-xl mb-2'>
                      <span>{card.title}</span>
                    </div>
                    <div>
                      <p className='text-gray-700 text-base'>
                        {card.description}
                      </p>
                    </div>
                  </div>
                  <div className='px-6 pt-4 pb-2'>
                    <button
                      className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                      onClick={() => openModal(index + 1)}
                    >
                      Read more
                    </button>
                  </div>
                </div>
              </Fade>
            ))}
          <InformationModal
            isOpen={isModalOpen}
            content={modalContent}
            closeModal={closeModal}
          />
        </div>
      </div>
    </div>
  );
};

export default InformationCards;
