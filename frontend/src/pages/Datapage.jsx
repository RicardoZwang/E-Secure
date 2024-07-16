import React, { useState } from "react";
// Importing chart components from the respective paths
import Barchart from "../components/Datapages/Barchart.jsx";
import DonutChart from "../components/Datapages/DonutChart.jsx";
import BarchartT10S from "../components/Datapages/BarchartT10S.jsx";
import BarchartT10SL from "../components/Datapages/BarchartT10SL.jsx";
import BarchartMonthly from "../components/Datapages/BarchartMonthly.jsx";
// Importing CSS styles
import styles from "../styles";
import scrollToTop from "../components/scrollToTop.jsx";

// Datapage functional component definition
const Datapage = () => {
  // State 'visibleChart' to determine which chart is currently shown
  const [visibleChart, setVisibleChart] = useState("barchart");

  // Function to render the appropriate chart based on 'visibleChart' state
  const renderChart = () => {
    scrollToTop(); //Scrolls to the top when page change
    switch (visibleChart) {
      case "barchart":
        return <Barchart />;
      case "donutchart":
        return <DonutChart />;
      case "barchartT10S":
        return <BarchartT10S />;
      case "barchartT10SL":
        return <BarchartT10SL />;
      case "barchartMonthly":
        return <BarchartMonthly />;
      default:
        return <Barchart />; // Renders nothing if 'none' is selected
    }
  };
  const buttonClass = (chart) =>
    `bg-blue-500 hover:bg-blue-400 font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${
      visibleChart === chart ? "text-teal-400" : "text-white"
    }`;

  return (
    // Main container with full viewport height and primary background color
    <div className='bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col h-screen'>
      <div className='flex justify-center items-center pt-4'>
        <h2 className='text-white text-2xl font-bold'>Scam Statistics</h2>
      </div>
      {/*Container for buttons, styled to be in a centered row*/}
      <div className='flex justify-center p-4 gap-1 md:gap-4 '>
        {/*Buttons to select which chart to display; clicking changes the 'visibleChart' state*/}
        <button
          className={buttonClass("barchart")}
          onClick={() => setVisibleChart("barchart")}
        >
          Age
        </button>
        <button
          className={buttonClass("donutchart")}
          onClick={() => setVisibleChart("donutchart")}
        >
          Gender
        </button>
        <button
          className={buttonClass("barchartT10S")}
          onClick={() => setVisibleChart("barchartT10S")}
        >
          Top 10 Types
        </button>
        <button
          className={buttonClass("barchartT10SL")}
          onClick={() => setVisibleChart("barchartT10SL")}
        >
          Top 10 Loss
        </button>
        <button
          className={buttonClass("barchartMonthly")}
          onClick={() => setVisibleChart("barchartMonthly")}
        >
          Monthly Loss
        </button>
      </div>
      {/*Container to display the selected chart, centered both vertically and horizontally*/}
      <div className='flex-grow flex justify-center mt-[50px]'>
        {/*Calls renderChart to display the current chart based on state*/}
        {renderChart()}
      </div>
    </div>
  );
};

// Exporting Datapage as a default export for use in other parts of the app
export default Datapage;
