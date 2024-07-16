import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FaTrash } from "react-icons/fa";
import RiskAnalysisModal from "./RiskAnalysisModal";
import Fade from "react-awesome-reveal";

const PredictInfo = ({ isModalOpen, setModalOpen }) => {
  const openModal = () => {
    setModalOpen(true);
  };

  useEffect(() => {
    // Notify parent component when isModalOpen changes
    setModalOpen(isModalOpen);
  }, [isModalOpen, setModalOpen]);

  return (
    <div className='flex flex-col justify-center items-center md:min-h-screen h-96 to-blue-800 p-4'>
      <div className='min-w-full w-full '>
        <h1 className='text-3xl font-bold uppercase mb-3 text-green-400 text-center'>
          Scam Message Predictor
        </h1>
        <hr className='border-b-2 mb-3 border-white' />
        <Accordion defaultActiveKey='0' flush>
          <Accordion.Item eventKey='0'>
            <Accordion.Header className='text-3xl font-semibold'>
              What is the Scam Message Predictor?
            </Accordion.Header>
            <Accordion.Body>
              <span className='leading-loose space-y-4'>
                <p>
                  Scam Message Predictor is a large language model that can{" "}
                  <span className='font-semibold text-[#34d399]'>
                    detect the potential scam in the message
                  </span>
                  , help users to prevent the risk of being scammed.
                </p>
                <p>
                  Just copy your message to the input box and click{" "}
                  <span className='font-semibold text-[#34d399]'>"Detect"</span>
                  .
                </p>
                <p>
                  After generating the result, simply click on the{" "}
                  <span className='inline-block'>
                    <FaTrash color='#34d399' />
                  </span>{" "}
                  to clear the input box and begin the detection of the next
                  message text.
                </p>
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='1'>
            <Accordion.Header className='text-3xl font-semibold'>
              The risk levels
            </Accordion.Header>
            <Accordion.Body>
              <span className='leading-loose'>
                <p className='font-semibold inline-block'>High Risk:</p> This
                message contains known phishing keywords and suspicious
                sentences. Do not click any{" "}
                <span className='font-semibold text-[#34d399]'>links </span>or
                provide{" "}
                <span className='font-semibold text-[#34d399]'>
                  personal information
                </span>
                .
                <br />
                <p className='font-semibold inline-block'>No Risk:</p> This
                message does not exhibit common signs of phishing or scams.
                However, always{" "}
                <span className='font-semibold text-[#34d399]'>
                  stay vigilant
                </span>
                .
              </span>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='2'>
            <Accordion.Header className='text-3xl font-semibold'>
              Educational info on spam messages red flags
            </Accordion.Header>
            <Accordion.Body>
              <ol class='list-decimal pl-5 mb-4'>
                <li>
                  <p className='font-semibold'>
                    Urgent demands for action or use of excessive capitalization
                    and exclamation marks
                  </p>
                  <span className='leading-loose'>
                    <p>Examples:</p>
                    <ul className='list-disc pl-5 font-light'>
                      <li>
                        "<span className='bg-red-400'>ACT NOW</span>! This offer
                        expires <span className='bg-red-400'>in 24 hours</span>
                        !"
                      </li>
                      <li>
                        "<span className='bg-red-400'>LAST CHANCE</span> to
                        claim your FREE gift!!!!!"
                      </li>
                      <li>
                        <span className='bg-red-400'>
                          "Urgent; Now; Immediate; Recent;"
                        </span>
                      </li>
                    </ul>
                  </span>
                </li>
                <li>
                  <p className='font-semibold'>
                    Promises of large sums of money or unrealistic offers
                  </p>
                  <span className='leading-loose'>
                    <p>Examples:</p>
                    <ul className='list-disc pl-5 font-light'>
                      <li>
                        "Congratulations!{" "}
                        <span className='bg-red-400'>You've won</span> a
                        $1,000,000{" "}
                        <span className='bg-red-400'>lottery prize</span>!"
                      </li>
                      <li>
                        "<span className='bg-red-400'>Earn</span> $5,000 per
                        week working from home -{" "}
                        <span className='bg-red-400'>no experience needed</span>
                        !"
                      </li>
                    </ul>
                  </span>
                </li>
                <li>
                  <p className='font-semibold'>
                    Unsolicited commercial emails or messages from unknown
                    senders
                  </p>
                  <span className='leading-loose'>
                    <p>Examples:</p>
                    <ul className='list-disc pl-5 font-light'>
                      <li>
                        "From:{" "}
                        <span className='bg-red-400'>
                          info@amazingdeals.com
                        </span>
                        !"
                      </li>
                      <li>
                        "Subject:{" "}
                        <span className='bg-red-400'>Incredible discounts</span>{" "}
                        on top-brand watches!"
                      </li>
                    </ul>
                  </span>
                </li>
                <li>
                  <p className='font-semibold'>
                    Inclusion of suspicious attachments or links
                  </p>
                  <span className='leading-loose'>
                    <p>Examples:</p>
                    <ul className='list-disc pl-5 font-light'>
                      <li>
                        "Click here to{" "}
                        <span className='bg-red-400'>download</span> your
                        exclusive gift!"
                      </li>
                      <li>
                        "Open the attached file to{" "}
                        <span className='bg-red-400'>claim your prize</span>."
                      </li>
                    </ul>
                  </span>
                </li>
              </ol>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey='3'>
            <Accordion.Header className='text-3xl font-semibold'>
              Some useful actionable advice
            </Accordion.Header>
            <Accordion.Body className='ml-5'>
              <button
                className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
                onClick={openModal}
              >
                View Useful Advice
              </button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default PredictInfo;
