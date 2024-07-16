import React, { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { Label, Textarea } from "flowbite-react";
import axios from "axios";

const PredictKeywords = () => {
    const [inputMsg, setInputMsg] = useState('');
    const [result, setResult] = useState('');
    const [flag, setFlag] = useState()

    const scamIndicators = [
        "congratulations you've won", "urgent action required", "verify your account",
        "password reset", "claim your prize", "click this link", "free trial",
        "bank account", "credit card", "immediate payment required", "confidential information",
        "loan approval", "lottery winner", "inheritance", "investment opportunity", "no credit check",
        "act now", "limited time offer", "final notice", "one-time offer", "exclusive deal",
        "urgent help needed", "your account has been compromised", "you have been selected", "security alert", "urgent request",
        "act fast", "guaranteed winner", "verify your identity", "you have a package", "risk-free trial",
        "earn money fast", "100% satisfaction", "secret shopper", "work from home", "easy money",
        "limited availability", "click to claim", "instant access", "urgent notification", "immediate attention required",
        "prize confirmation", "unbelievable deal", "update your information", "important notice",
        "contact us immediately", "claim your reward", "action needed", "unusual activity detected",
        "limited time", "exclusive offer", "your account is at risk", "free gift", "redeem now",
        "secure your account", "limited slots", "winning notification", "important message", "alert",
        "verify your details", "update required", "special promotion", "urgent message", "act immediately",
        "limited availability", "last chance", "bonus offer", "urgent response required", "you've been chosen, Congratulations! You've won a $1,000,000 lottery prize",
        "Earn $5,000 per week working from home - no experience needed!","info@amazingdeals.com","Incredible discounts",
    ];
    
    const urgencyPhrases = ["do not share", "immediately", "urgent", "now"];
    const urlPattern = /https?:\/\/\S+/;

    const checkForScam = (text) => {
        const lowerCaseText = text.toLowerCase();

        // Check for scam indicators
        for (let indicator of scamIndicators) {
            if (lowerCaseText.includes(indicator)) {
                return true;
            }
        }

        // Check for URLs or suspicious links
        if (urlPattern.test(lowerCaseText)) {
            return true;
        }

        // Check for urgency or secrecy phrases
        for (let phrase of urgencyPhrases) {
            if (lowerCaseText.includes(phrase)) {
                return true;
            }
        }

        return false;
    };


    const handlePredictClick = () => {
        if (!inputMsg.trim()) {
            alert("You should enter the message!");
            return;
        }

        const isScam = checkForScam(inputMsg);
        if (isScam) {
            setFlag(1);
            setResult('It seems to be a scam message');
        } else {
            setFlag(0);
            setResult('It seems to be a normal message.');
        }
    };

    const displayColor = flag == 1 ? "text-red-500" : "text-green-500"

    const handleClearClick = () => {
        setInputMsg('')
        setResult('')
    }

    return (
        <div className='flex-1 flex-col items-center justify-center md:min-h-screen h-96 to-blue-800 p-4'>
            <div
                className='bg-white p-6 rounded shadow-md text-center '
                style={{ width: "100%", maxWidth: "500px" }}
            >
                <div className='relative mb-4'>
                    <div className="mb-2 block">
                        <Label htmlFor="comment" value="Your message" className="text-lg font-semibold" />
                    </div>

                    <Textarea
                        id="comment"
                        placeholder="Enter your message..."
                        required rows={4}
                        value={inputMsg}
                        onChange={e => setInputMsg(e.target.value)}
                    />
                    <button
                        className="absolute bottom-2 right-0 mt-2 mr-2 text-gray-600 hover:text-black"
                        onClick={handleClearClick}
                    >
                        <FaTrash />
                    </button>

                </div>

                <button
                    className='transition-transform duration-300 transform hover:scale-110 bg-blue-500 text-white font-bold py-2 px-4 border-b-4 border-blue-700  rounded'
                    onClick={handlePredictClick}
                >
                    Detect
                </button>

                <div className='relative h-7 m-8 '>
                    {
                        result && <p className={`${displayColor} text-xl font-semibold`}>{result}</p>
                    }
                </div>
            </div>
        </div>
    );
};

export default PredictKeywords;