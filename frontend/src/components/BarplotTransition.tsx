import React, { useState } from "react";
import { data, data2, data3, data4 } from "./data.ts";
import { Barplot } from "./Barplot.tsx";

const BUTTONS_HEIGHT = 40;

type BarplotDatasetTransitionProps = {
    width: number;
    height: number;
};

const buttonStyle = {
    border: "1px solid #0088FE",
    borderRadius: "4px",
    padding: "4px 8px",
    margin: "10px 2px",
    fontSize: 16,
    color: "#0088FE",



};

export const BarplotTransition = ({
    width,
    height,
}: BarplotDatasetTransitionProps) => {
    const [selectedData, setSelectedData] = useState(data);

    return (
        <div>
            <div style={{ height: BUTTONS_HEIGHT }}>
                <button style={buttonStyle} onClick={() => setSelectedData(data)}>
                    2020
                </button>
                <button style={buttonStyle} onClick={() => setSelectedData(data2)}>
                    2021
                </button>
                <button style={buttonStyle} onClick={() => setSelectedData(data3)}>
                    2022
                </button>
                <button style={buttonStyle} onClick={() => setSelectedData(data4)}>
                    2023
                </button>
            </div>

            <Barplot
                width={width}
                height={height - BUTTONS_HEIGHT}
                data={selectedData}
            />
        </div>
    );
};
