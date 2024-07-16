import React,{useEffect, useState} from "react";
import { FaArrowUp } from "react-icons/fa";

const Fab = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if(window.scrollY > 20 ) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
          };
    },[])

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    return(
            <button 
                type="button"
                onClick={scrollToTop} 
                className={`${isVisible ? 'block' : 'hidden'} fixed bottom-4 ms:right-6 right-4 bg-[#34D399] hover:bg-[#167d59] hover:scale-110 text-white font-bold p-4 rounded-full cursor-pointer shadow-lg bg-opacity-70`}
                >
                <FaArrowUp className={`rounded-full w-5 h-5 object-cover `}/>
            </button>
    );
}

export default Fab;