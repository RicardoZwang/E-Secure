import React from "react";
import EducationalTips from "./EducationalTips";
import { Fade } from "react-awesome-reveal";

const AntiScamTipSection = () =>{
    return(
        <section className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-800 via-blue-900 to-indigo-900'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:mx-20 sm:mx-5">
                    <Fade direction="up">
                        <div className="flex flex-col items-center">
                            <h1 className='text-3xl font-bold uppercase mb-3 text-green-400 text-center'>
                                Identifying and Understanding Spam and Phishing Risks
                            </h1>
                            <hr className={`border-b-2 mb-5 border-white`} />
                            <EducationalTips />
                        </div>
                    </Fade>
                    
                    
                </div>
            </div>
        </section>
    )
}

export default AntiScamTipSection;