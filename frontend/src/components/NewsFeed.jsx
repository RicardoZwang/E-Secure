import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import newsData from "./test.json"; // Path to your JSON file
const NewsFeed = ({ timeframe }) => {
  const [articles, setArticles] = useState([]); //Holds all the fetched articles
  const [displayedArticles, setDisplayedArticles] = useState([]); // Articles that are currently displayed
  const [visibleCount, setVisibleCount] = useState(6); // State to track the number of visible articles

  useEffect(() => {
    const fetchNews = async() => {
      try {
        const res = await axios.get("http://localhost:3001/news")
        setArticles(res.data); // Set all fetched articles from local JSON data
        setDisplayedArticles(res.data.slice(0, 6)); // Display only the first 6 articles initially
        console.log(res.data);
      } catch(err) {
        console.log("Fail to fetch news");
      }
    }; 
    fetchNews();

    // setArticles(newsData.articles); // Set all fetched articles from local JSON data
    // setDisplayedArticles(newsData.articles.slice(0, 6)); // Display only the first 6 articles initially
  }, [timeframe]);

  const handleShowMore = () => {
    const nextVisibleCount = visibleCount + 6;
    setVisibleCount(nextVisibleCount);
    setDisplayedArticles(articles.slice(0, nextVisibleCount)); // Increase the number of displayed articles
  };

  return (
    <>
      <div className='text-center mb-8'>
        <h1 className='text-3xl font-bold uppercase mb-5 text-green-400'>
          Recent News
        </h1>
        <hr className={`border-b-2`} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 items-stretch'>
        {displayedArticles.map((article, index) => (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 50,
            }}
            whileHover={{ scale: 1.05 }}
            className='flex flex-col'
          >
            <a
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
              key={index}
              className='flex-col h-full max-w-sm rounded overflow-hidden shadow-lg bg-white block'
            >
              <img
                className='w-full'
                src={article.urlToImage}
                alt={article.title}
              />
              <div className='px-6 py-4 flex-grow'>
                <div className='font-bold text-xl mb-2'>{article.title}</div>
                <hr className={`border-b-2 mb-3`} />
                <p className='text-black text-base line-clamp-3'>
                  {article.description}
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <span
                  key={article.sourceId}
                  className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  text-gray-700 mr-2 mb-2'
                >
                  {article.sourceName}
                </span>
              </div>
            </a>
          </motion.div>
        ))}
        {visibleCount < articles.length && (
          <div className='col-span-full text-center mt-4'>
            <button
              onClick={handleShowMore}
              className='mx-auto block transition-transform duration-300 transform hover:scale-110 bg-blue-500 text-white font-bold px-6 py-2 border-b-4 border-blue-700  rounded'
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NewsFeed;
