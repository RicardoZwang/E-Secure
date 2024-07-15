import React, { useEffect, useState } from "react";
import { BarplotTransition } from "./BarplotTransition.tsx";

export const LossbyType = ({ width = 800, height = 800 }) => {
    const [size, setSize] = useState({ width: 800, height: 800 });

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            const isMobile = currentWidth <= 768; // Adjust this value as per your breakpoint needs

            if (isMobile) {
                setSize({ width: currentWidth - 600, height: 400 }); // Adjust these values as per your needs for mobile
            } else {
                setSize({ width: 800, height: 800 }); // Adjust these values as per your needs for desktop
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Initialize size on mount

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    if (!width || !height) {
        return null;
    }

    return (
        <div className="flex">
            <BarplotTransition width={width} height={height} />
        </div >
    );
};
