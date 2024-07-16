import React from "react";
import Accordion from "react-bootstrap/Accordion";

const EducationalTips = () => {
  return (
    <div className='md:mb-10 md:w-3/4 sm:w-full  '>
      <Accordion defaultActiveKey='0' flush>
        <Accordion.Item eventKey='0'>
          <Accordion.Header className='text-3xl font-semibold'>
            The risk levels
          </Accordion.Header>
          <Accordion.Body>
            <span className='leading-loose'>
              <p className='font-semibold inline-block'>High Risk:</p> This
              message contains known phishing keywords and suspicious sentences.
              Do not click any links or provide personal information.
              <br />
              <p className='font-semibold inline-block'>No Risk:</p> This
              message does not exhibit common signs of phishing or scams.
              However, always stay vigilant.
            </span>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey='1'>
          <Accordion.Header className='text-3xl font-semibold'>
            Educational info on spam messages red flags
          </Accordion.Header>
          <Accordion.Body>
            <ol class='list-decimal pl-5'>
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
                      expires <span className='bg-red-400'>in 24 hours</span>!"
                    </li>
                    <li>
                      "<span className='bg-red-400'>LAST CHANCE</span> to claim
                      your FREE gift!!!!!"
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
                      "<span className='bg-red-400'>Earn</span> $5,000 per week
                      working from home -{" "}
                      <span className='bg-red-400'>no experience needed</span>!"
                    </li>
                  </ul>
                </span>
              </li>
              <li>
                <p className='font-semibold'>
                  Unsolicited commercial emails or messages from unknown senders
                </p>
                <span className='leading-loose'>
                  <p>Examples:</p>
                  <ul className='list-disc pl-5 font-light'>
                    <li>
                      "From:{" "}
                      <span className='bg-red-400'>info@amazingdeals.com</span>
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
      </Accordion>
    </div>
  );
};

export default EducationalTips;
