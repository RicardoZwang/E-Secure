import React from "react";
import styles from "../styles";
import WordCloud from "../components/LearningCenter/WordCloud";
import InformationCards from "../components/LearningCenter/CaseStudy/InformationCards";
import scrollToTop from "../components/scrollToTop";
import ScamCaseAccordin from "../components/LearningCenter/CaseStudy/ScamCaseAccordin";

const LearningCenter = () => {
  scrollToTop(); //Scrolls to the top when page change
  //This shows each sections in te Learning center page.
  return (
    <div className={`${styles.flexCenter} bg-gray-100`}>
      <div className={`w-full`}>
        <InformationCards />

        <ScamCaseAccordin />

        <WordCloud />
      </div>
    </div>
  );
};

export default LearningCenter;
