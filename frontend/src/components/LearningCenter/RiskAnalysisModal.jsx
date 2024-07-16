import React, { useEffect, useState } from "react";
import Fade from "react-awesome-reveal";
import { FaRegWindowClose } from "react-icons/fa";

const RiskAnalysisModal = ({ isModalOpen, setModalOpen }) => {
    const content = [
        {
            title: "Check out these verbs that frequently appeared in spam messages",
            action: "Especially note some frequently spam keywords",
            imgSrc: "/assets/tip1.png"
        },
        {
            title: "Check spelling mistakes/bad grammars",
            action: "Approximately 69% of spam emails contained spelling and grammatical errors, so we need to place considerable value on this situation (Symantec, 2019).",
            imgSrc: "/assets/tip2.png"
        },
        {
            title: "Check the tone being used",
            action: "Scammers typically will make up a story to make you believe that it's necessary for you to (Federal Trade Commission, 2019): Respond to them immediately; Click on the link they provided; Provide your personal information directly to them; instead of seeking professional help from secured channels (especially the keywords, such as urgent, recent, now, etc.).",
            imgSrc: "/assets/tip3.png"
        },
        {
            title: "Check the address of the sender",
            action: "Note to alter the behaviour from spam emails/messages: Need you to click on fake links; Clicking on links that request Login Credentials; Install malicious software; Clicking on email addresses that is sent from fake domain.",
            imgSrc: "/assets/tip4.png"
        }
    ]
    useEffect(() => {
        document.body.style.overflow = isModalOpen ? "hidden" : "auto";
    }, [isModalOpen]);

    const [currentIndex, setCurrentIndex] = useState(0);
    console.log("Case info: " + content);

    const nextContent = () => {
        if (currentIndex < content.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevContent = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setCurrentIndex(0); // Reset the index to the first item
    };

    if (!isModalOpen) return null;

    return (
        <div className='fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4'>
            <Fade direction='up' triggerOnce={true}>
                <div className='bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-xl font-bold'>
                            {currentIndex + 1}. {content[currentIndex].title}
                        </h2>
                        <button
                            onClick={handleModalClose}
                            className='relative inline-flex items-center justify-center p-2 rounded-full transition duration-300 ease-in-out transform hover:scale-110 bg-transparent '
                            title='Close'
                        >
                            <FaRegWindowClose className='text-gray-800 hover:text-teal-500 text-2xl' />
                        </button>
                    </div>
                    <hr className='my-4' />
                    <p className='text-gray-800'><span className="font-semibold">Action</span>: {content[currentIndex].action}</p>

                    <img src={`${content[currentIndex].imgSrc}`} className="my-4 max-h-full max-w-full" />

                    <div className='flex justify-end mt-4 space-x-4'>
                        <button
                            className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded disabled:opacity-50'
                            onClick={prevContent}
                            disabled={currentIndex === 0}
                        >
                            Previous
                        </button>

                        <button
                            className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded disabled:opacity-50'
                            onClick={nextContent}
                            disabled={currentIndex === content.length - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default RiskAnalysisModal;