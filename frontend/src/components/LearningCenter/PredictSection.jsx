import React, { useState } from "react";
import Predict from "./Predict";
import PredictKeywords from "./PredictKeywords";
import { FaTrash, FaEyeSlash, FaCopy } from "react-icons/fa";
import Fade from "react-awesome-reveal";
import PredictInfo from "./PredictInfo";
import RiskAnalysisModal from "./RiskAnalysisModal";

const PredictSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  console.log("isModalOpen: ", isModalOpen);

  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='container mx-auto px-4'>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 my-6 justify-items-stretch'>
          <Fade>
            <div className='flex-1 flex-col justify-center md:min-h-screen bg-transparent p-4'>
              <PredictInfo
                isModalOpen={isModalOpen}
                setModalOpen={setModalOpen}
              />
            </div>
          </Fade>
          <Fade delay={500}>
            <Predict />
          </Fade>
        </div>

        <div>
          <RiskAnalysisModal
            isModalOpen={isModalOpen}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default PredictSection;
