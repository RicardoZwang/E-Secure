import React, { useState, useEffect } from "react";
import styles from "../../styles";
import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import lcStyles, { cardTheme } from "../../lcStyles";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const Guide = () => {
  const [cards, setCardData] = useState([]); // State to store card data

  useEffect(() => {
    // Effect to fetch card data from the server when the component mounts
    axios.get(`${apiUrl}/tips_card`)
      .then(response => {
        console.log('response.data', response.data); // Log the fetched data
        setCardData(response.data); // Set the card data to state
      })
      .catch(error => {
        console.error('Error fetching the card data:', error); // Log any error during fetching
      });
  }, []); // Empty dependency array to run only once on component mount

  // Function to render cards using the card data from state
  const renderCards = () => cards.map((card) => (
    <Card
      key={card.id}
      className={`max-w-sm`} // Styling for width of card
      imgSrc={card.image_url} // Image source for card
      theme={cardTheme} // Theme for the card from lcStyles
    >
      <div id='title'>
        <h5 className={`${lcStyles.title}`}>{card.title}</h5>
      </div>
      <div id='subtitle' className={`mt-3`}>
        <span className={`${lcStyles.content}`}>{card.subtitle}</span>
      </div>

      <button type="button" className={`${lcStyles.button}`}>
        <Link to={`guide_info/${card.category}`} className={`block w-full h-full px-6 py-4 font-poppins font-medium text-[18px] text-white`}>
          Read More {/* Link to read more about the card topic */} 
        </Link>
      </button>
    </Card>
  ));

  return (
    <section className={`${styles.padding} mb-20 `}>
      <div id="title" className={`my-10`}>
        <h2 className={`font-poppins font-semibold xs:text-[48px] text-[40px] ${lcStyles.textColor} xs:leading-[76.8px] leading-[66.8px] w-full flex justify-center `}>Anti Scam Guidance</h2>
        <hr className={`border-b-2`}/> {/* Horizontal rule for styling */}
      </div>
      
      <div id="guidance cards" className={`flex flex-row justify-evenly my-20`}>
        {renderCards()} {/* Call function to render the cards */}
      </div>
    </section>
  );
}

export default Guide;
