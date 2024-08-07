import React, { useEffect } from "react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdOutlineAttachEmail } from "react-icons/md";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";

const ScamCaseAccordin = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 to-indigo-900'>
      <Carousel
        data-aos='fade-up'
        data-aos-delay='300'
        data-aos-duration='3000'
        once='false'
        mirror='true'
      >
        <Carousel.Item>
          <div className='flex justify-center md:m-5 mt-10'>
            <div className='flex flex-col basis-2/3 gap-2 md:p-5 accordion-container w-full'>
              <div className='flex justify-center items-center text-white md:text-3xl font-bold m-2 md:m-10'>
                Successful Investment Scam Prevention Case study
              </div>
              <Accordion
                defaultActiveKey='0'
                className='accordion basis-1/2 gap-5 md:mb-5'
              >
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div className='flex gap-3 items-center'>
                      <FaMoneyBillTrendUp size={30} /> Social Media Scams
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className='flex flex-col p-3 text-sm md:text-base'>
                      <p>
                        In 2021, a Melbourne-based retiree named John (surname
                        withheld) was approached onFacebook by a{" "}
                        <a className='underline decoration-pink-500 underline-offset-2 decoration-2'>
                          scammer posing as a financial advisor offering a
                          high-return investment opportunity.
                        </a>{" "}
                        Despite the tempting offer, John decided to{" "}
                        <a className='underline decoration-[#34d399] underline-offset-2 decoration-2'>
                          conduct his own research and discovered that the
                          company was not registered with the Australian
                          Securities and Investments Commission{" "}
                        </a>
                        (ASIC). He reported the scammer to Facebook and ASIC,
                        helping to prevent others from falling victim to the
                        same scam (ASIC, 2021).
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <div className='flex gap-3 items-center'>
                      <MdOutlineAttachEmail size={30} /> Phishing Scams
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className='flex flex-col p-3 text-sm md:text-base'>
                      <p>
                        In 2022, a Sydney-based small business owner received a{" "}
                        <a className='underline decoration-pink-500 underline-offset-2 decoration-2'>
                          suspicious email claiming to be from their bank,
                          requesting sensitive financial information.
                        </a>
                        Instead of responding to the email,{" "}
                        <a className='underline decoration-[#34d399] underline-offset-2 decoration-2'>
                          they contacted their bank directly and confirmed it
                          was a phishing scam.{" "}
                        </a>
                        By taking quick action and reporting the incident, they
                        helped prevent others from falling victim to the same
                        scam(SuncorpBank, 2022).
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <div className='flex gap-3 items-center'>
                      <FaMoneyBillTrendUp size={30} /> Streaming Scams
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className='flex flex-col p-3 text-sm md:text-base'>
                      <p>
                        In 2023, a Brisbane-based university student named Sarah
                        (surname withheld) came across an{" "}
                        <a className='underline decoration-pink-500 underline-offset-2 decoration-2'>
                          advertisement on social media offering discounted
                          subscriptions to a popular streaming service.
                        </a>{" "}
                        Suspicious of the offer,{" "}
                        <a className='underline decoration-[#34d399] underline-offset-2 decoration-2'>
                          Sarah visited the official website of the streaming
                          service and discovered that the advertised deal was
                          not legitimate.
                        </a>{" "}
                        She reported the scam to the streaming service and the
                        Australian Competition and Consumer Commission (ACCC),
                        helping to raise awareness andprevent others from
                        falling victim to similar scams (ACCC, 2023).
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className='flex justify-center md:m-5 mt-10'>
            <div className='flex flex-col basis-2/3 gap-2 md:p-5 accordion-container'>
              <div className='flex justify-center items-center text-white md:text-3xl font-bold m-2 md:m-10'>
                Successful Romance Scam Prevention Case Study
              </div>
              <Accordion
                defaultActiveKey='0'
                className='accordion basis-1/2 gap-5 md:mb-5'
              >
                <Accordion.Item eventKey='0'>
                  <Accordion.Header>
                    <div className='flex gap-3 items-center'>
                      <FaMoneyBillTrendUp size={30} /> Social Media Scams
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className='flex flex-col p-3 text-sm md:text-base'>
                      <p>
                        In 2023, a Perth woman named Lisa (surname withheld) was
                        targeted by a romance scammer on a popular dating app.
                        <a className='underline decoration-pink-500 underline-offset-2 decoration-2'>
                          The scammer claimed to be a successful businessman
                          working overseas and quickly professed his love for
                          Lisa, requesting money to help with a sudden financial
                          emergency.
                        </a>{" "}
                        <a className='underline decoration-[#34d399] underline-offset-2 decoration-2'>
                          Suspecting a scam, Lisa cut off communication
                        </a>{" "}
                        and reported the scammer to the dating app and the
                        Australian Competition and Consumer Commission (ACCC).
                        By taking swift action and sharing her experience, Lisa
                        helped prevent others from falling victim to similar
                        scams (ACCC, 2023).
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                  <Accordion.Header>
                    <div className='flex gap-3 items-center'>
                      <MdOutlineAttachEmail size={30} /> Phishing Scams
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className='flex flex-col p-3 text-sm md:text-base'>
                      <p>
                        In 2022, an Adelaide-based widow named Margaret (surname
                        withheld) received{" "}
                        <a className='underline decoration-pink-500 underline-offset-2 decoration-2'>
                          an email purportedly from a dating website, claiming
                          that she had a new message from a potential match. The
                          email asked her to click on a link and log in to her
                          account.
                        </a>{" "}
                        Margaret, being cautious, noticed that the email address
                        and link looked suspicious. She{" "}
                        <a className='underline decoration-[#34d399] underline-offset-2 decoration-2'>
                          contacted the dating website directly and confirmed
                          that the email was a phishing attempt.
                        </a>{" "}
                        By reporting the scam to the dating website and the
                        Australian Cyber Security Centre (ACSC), Margaret helped
                        raise awareness and prevent others from falling victim
                        to similar scams (ACSC, 2022).
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                  <Accordion.Header>
                    <div className='flex gap-3 items-center'>
                      <FaMoneyBillTrendUp size={30} /> Streaming Scams
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className='flex flex-col p-3 text-sm md:text-base'>
                      <p>
                        In 2022, a Gold Coast-based retiree named David (surname
                        withheld) received{" "}
                        <a className='underline decoration-pink-500 underline-offset-2 decoration-2'>
                          an email claiming to be from a popular streaming
                          service, asking him to update his payment information.
                        </a>{" "}
                        David noticed that the{" "}
                        <a className='underline decoration-[#34d399] underline-offset-2 decoration-2'>
                          email address did not match the official domain of the
                          streaming service and realized it was a phishing
                          attempt.
                        </a>{" "}
                        He reported the scam to the streaming service and the
                        Australian Cyber Security Centre (ACSC), helping to
                        raise awareness and prevent others from falling victim
                        to similar scams (ACSC, 2022).
                      </p>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ScamCaseAccordin;
