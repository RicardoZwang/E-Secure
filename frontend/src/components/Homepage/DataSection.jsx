import React from "react";
import styles, { layout } from "../../styles";
import Button from "../Buttons";
import useOnScreen from "../useOnScreen";
import Barchart from "../Datapages/HomeBarchart";
import { Link } from "react-router-dom";
import HomeBarchart from "../Datapages/HomeBarchart";
function handleClick() {
  window.scrollTo(0, 0);
}
const DataSection = () => {
  const [ref, isVisible] = useOnScreen({
    threshold: 0.5, // Trigger when 50% of the element is in view
  });
  return (
    <>
      <section className={`${layout.section} mt-20`}>
        <div
          ref={ref}
          className={`${layout.section}  ${
            isVisible ? "animate-fadeInUp" : "opacity-0"
          }`}
        >
          <div ref={ref} className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Explore the hidden patterns of Scams in Australia
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Dive into our comprehensive statistics and uncover the trends that
              could affect you. whether you're interested in seeing how scams
              vary by age,gender,type or state. We have a full breakdown
              providing a detailed and clear informative perspective. Click here
              to see where you or your loved ones might be most vulnerable and
              stay one step ahead of the scammers
            </p>
            <Link to='/data' onClick={handleClick}>
              <Button styles='mt-10' />
            </Link>
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <Barchart />
          </div>
        </div>
      </section>
    </>
  );
};

export default DataSection;
