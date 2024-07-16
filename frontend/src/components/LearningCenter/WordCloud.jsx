import React from "react";
import spam from "../../assets/Spam_wordcloud.jpg";
import nonspam from "../../assets/NonSpam_wordcloud.jpg";
import styles from "../../styles";
import lcStyles from "../../lcStyles";
import Fade from "react-awesome-reveal";

const WordCloud = () => {
  return (
    <section className={`${styles.padding} mb-20`}>
      <div id='top' className={`my-10 justify-center`}>
        <h1 className='text-3xl font-bold uppercase mb-3 text-green-400 text-center'>
          Scam Message Predictor
        </h1>
        <hr className={`border-b-2`} /> {/* Horizontal rule for styling */}
      </div>

      <div id='content' className={`${styles.margin},${styles.padding} `}>
        <div
          id='spam'
          className={` w-full grid sm:grid-cols-1 md:grid-cols-2 gap-10 xxs:mb-5`}
        >
          <Fade>
            <img src={spam} alt='spam wordcloud' className={`  `} />
          </Fade>
          <Fade delay={300}>
            <div className={` text-wrap w-full flex flex-col justify-center `}>
              <p className={`text-5xl md:mb-5 xxs:text-3xl xxs:mb-3`}>
                Red Word Cloud - Spam Emails
              </p>
              <span
                className={`text-2xl xxs:text-md leading-loose xxs:leading-normal font-light mb-10`}
              >
                This word cloud represents common vocabulary found in phishing
                emails. Words like "free," "prize," and "claim" are used to
                attract the recipient's attention and provoke curiosity or
                greed, encouraging them to click on links or divulge personal
                information. The language is direct and often conveys a sense of
                urgency with terms like "urgent," "reply," and "stop," aiming to
                prompt immediate action. There is also a frequent mention of
                money or rewards, such as "cash" and "award," intended to lure
                individuals with the promise of gains.
              </span>
            </div>
          </Fade>
        </div>

        <div
          id='nonspam'
          className={`w-full grid sm:grid-cols-1 md:grid-cols-2 gap-10 `}
        >
          <Fade>
            <img src={nonspam} alt='nonspam wordcloud' className={` `} />
          </Fade>

          <Fade delay={300}>
            <div className={` text-wrap w-full flex flex-col justify-center`}>
              <h3 className={`text-5xl md:mb-5 xxs:text-3xl xxs:mb-3`}>
                Green Word Cloud - Normal Emails
              </h3>
              <span
                className={`text-2xl xxs:text-md leading-loose xxs:leading-normal font-light mb-10`}
              >
                This word cloud illustrates the typical language used in
                everyday emails or messages. It features conversational words
                such as "love," "time," and "good," reflecting natural and fluid
                communication that maintains personal relationships. The style
                is more relaxed, with a focus on everyday life details and
                emotional expression, using phrases like "thank you," "happy,"
                and "dear." This showcases more genuine and intimate
                interpersonal interactions, in contrast to the manipulative
                nature of spam emails.
              </span>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default WordCloud;
