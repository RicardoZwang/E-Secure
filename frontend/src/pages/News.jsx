import React from "react";
import NewsFeed from "../components/NewsFeed";
import styles from "../styles";
import scrollToTop from "../components/scrollToTop";
const News = () => {
  scrollToTop(); //Scrolls to the top when page change
  //This displays the Newsfeed pages
  return (
    <div
      className={`bg-gradient-to-r from-blue-800 to-indigo-900 ${styles.flexStart}`}
    >
      <div className={`${styles.flexCenter} ${styles.padding}`}>
        <div className={`w-full h-full`}>
          <NewsFeed />
        </div>
      </div>
    </div>
  );
};

export default News;
