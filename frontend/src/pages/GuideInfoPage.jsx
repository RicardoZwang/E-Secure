import React from "react";
import styles from "../styles";
import GuideInfo from "../components/LearningCenter/GuideInfo";
import { useParams } from "react-router-dom";

const GuideInfoPage = () => {
    const { category } = useParams();

    return (
        <div className={`${styles.flexCenter} bg-[#60a5fa] ${styles.padding}`}>
            <div className={`w-full h-full`}>
                <GuideInfo category={category}/>
            </div>
        </div>
    );
};

export default GuideInfoPage;