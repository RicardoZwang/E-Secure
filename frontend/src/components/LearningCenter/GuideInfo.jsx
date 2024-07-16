import React, { useState, useEffect } from "react";
import styles from "../../styles";
import lcStyles from "../../lcStyles";
import { Link } from "react-router-dom";
import { CiZoomIn, CiZoomOut } from "react-icons/ci";
import { TbZoomReset } from "react-icons/tb";
import { Card } from "flowbite-react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../../cardTransition.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Button, ButtonGroup } from "flowbite-react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;

const GuideInfo = ({ category }) => {
    const [fontSize, setFontSize] = useState(20);
    const [tipsData, setTipsData] = useState([]);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    //Fetch the tips from API 
    useEffect(() => {
        axios.get(`${apiUrl}/tips`,{params:{category:category}})
        .then(res => {
            const data = res.data
            setTipsData(data.map(item =>({
                title:item.title,
                content: item.content
            })));
        })
        .catch(err => {
            console.error('Error fetching the card data:', err);
        })
    },[category]);    

    //Button for zooming in
    const handleZoomIn = () => {
        setFontSize(fontSize * 1.1); 
    };
    //Button for zooming out
    const handleZoomOut = () => {
        setFontSize(fontSize / 1.1);
    };
    //Button for resting zooming size
    const resetFontSize = () => {
        setFontSize(20);
    };
    
    const titleFontSize = Math.round(fontSize * 3.0);
    const subTopics = Math.round(fontSize * 1.5);

    //FirstLetter capitalizing
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }
      
    //Button for next card
    const handleNextCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === tipsData.length ? 0 : prevIndex + 1
        );
    };
    //Button for previous card
    const handlePreviousCard = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex === 0 ? tipsData.length : prevIndex - 1
        );
    };

    const renderCard = () => {
        // Check if tipsData is populated with at least one item before trying to access its properties
        if (tipsData.length === 0) {
            // Return a loading indicator or null if the data hasn't been fetched yet
            return <div>Loading...</div>;
        }
    
        const tip = tipsData[currentCardIndex]; // Get the current tip based on currentCardIndex
    
        return (
            <Card className={`relative max-w-xl w-full`}>
                <div className={`absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-[#34D399] rounded-full text-white w-20 h-20 flex items-center justify-center`}>
                    <p className="font-bold text-5xl">{currentCardIndex + 1}</p>
                </div>
                <article className={`text-pretty`}>
                    <h3 
                    style={{ fontSize: `${subTopics}px` }}
                    className={`font-sans font-bold leading-9 mt-10`}
                    horizontal>
                        {tip.title} {/* Use the title from the current tip */}
                        <hr className={`h-px my-5 bg-gray-200 border-0 dark:bg-gray-700`}/>
                    </h3>
                    <span className={`mb-10`}>
                        {tip.content} {/* Use the content from the current tip */}
                    </span>
                </article>
            </Card>
          );
    };

  return (
    <div className='bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col h-screen justify-center'>
      <div
        id='top'
        className={`flex justify-between items-center mb-3 px-4 pl-5`}
      >
        <button
          type='button'
          className={`${lcStyles.button3} flex items-center justify-center w-32 py-6 relative overflow-hidden`}
        >
          <Link
            to='/learning_center'
            className='absolute inset-0 flex items-center justify-center font-poppins font-medium text-[20px] text-white'
          >
            Back
          </Link>
        </button>

        <div id='title' className={`flex-1 text-center pr-10`}>
          <span
            style={{ fontSize: `${titleFontSize}px` }}
            className={` font-mono font-bold text-white subpixel-antialiased`}
          >
            Tips to Avoid {capitalizeFirstLetter(category)} Scam
          </span>
        </div>
      </div>
      <hr className={`h-px mb-10 bg-gray-200 border-0 dark:bg-gray-700`} />
      <div id='content' className={` justify-center mt-10 ${fontSize}`}>
        <div
          className={`flex flex-row justify-center relative  ${styles.margin}`}
        >
          {currentCardIndex > 0 && (
            <Button
              onClick={handlePreviousCard}
              className='sticky mx-20 p-4 place-self-center place-items-center bg-[#34D399] text-white rounded-full shadow-lg hover:bg-[#1f7958] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
            >
              <FaArrowAltCircleLeft className={`size-10 place-self-center`} />
            </Button>
          )}

          <TransitionGroup className={``}>
            <CSSTransition
              key={currentCardIndex}
              timeout={300}
              classNames='card'
            >
              {renderCard()}
            </CSSTransition>
          </TransitionGroup>
          {currentCardIndex < tipsData.length - 1 && (
            <Button
              onClick={handleNextCard}
              className='sticky mx-20 p-4 place-self-center place-items-center bg-[#34D399] text-white rounded-full shadow-lg hover:bg-[#1f7958] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
            >
              <FaArrowAltCircleRight className={`size-10 place-self-center`} />
            </Button>
          )}
        </div>
      </div>
      {/*Button group for zooming feature*/}
      <ButtonGroup className='fixed bottom-10 right-4 flex flex-col space-y-2'>
        <Button
          onClick={handleZoomIn}
          className='p-2 bg-[#34D399] text-white rounded-full shadow-lg hover:bg-[#1f7958] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
        >
          <CiZoomIn className={`size-9`} />
        </Button>
        <Button
          onClick={handleZoomOut}
          className='p-2 bg-[#34D399] text-white rounded-full shadow-lg hover:bg-[#1f7958] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
        >
          <CiZoomOut className={`size-9`} />
        </Button>
        <Button
          onClick={resetFontSize}
          className='p-2 bg-[#34D399] text-white rounded-full shadow-lg hover:bg-[#1f7958] transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'
        >
          <TbZoomReset className={`size-9`} />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default GuideInfo;
