import React, { useEffect, useMemo, useState } from "react";
import * as d3 from "d3";
import { BarItem } from "./BarItem.tsx";

const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
const BAR_PADDING = 0.3;

// screen breakpoints
const SM_BREAKPOINT = 576;
const MD_BREAKPOINT = 768;


type BarplotProps = {
    data: { name: string; value: number }[];
    // Removed width and height as fixed props, they will be dynamic
};

export const Barplot = ({ data }: BarplotProps) => {
    const [svgSize, setSvgSize] = useState({ width: 800, height: 800 });
    // bounds = area inside the graph axis = calculated by substracting the margins

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            let width = 800; // Default width
            let height = 800; // Default height

            if (screenWidth <= SM_BREAKPOINT) {
                width = screenWidth - 20; // Adjust for smaller screens
                height = 400; // Adjust height accordingly

            } else if (screenWidth <= MD_BREAKPOINT) {
                width = screenWidth - 50; // Adjust for medium screens
                height = 600; // Adjust height accordingly
            }

            setSvgSize({ width, height });
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial size

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const boundsWidth = svgSize.width - MARGIN.right - MARGIN.left;
    const boundsHeight = svgSize.height - MARGIN.top - MARGIN.bottom;
    // Y axis is for groups since the barplot is horizontal
    const groups = data.sort((a, b) => b.value - a.value).map((d) => d.name);
    const yScale = useMemo(() => d3.scaleBand()
        .domain(groups)
        .range([0, boundsHeight])
        .padding(BAR_PADDING), [groups, boundsHeight]);

    // X axis
    const max = d3.max(data, (d) => d.value);
    const xScale = useMemo(() => d3.scaleLinear()
        .domain([0, max ?? 0])
        .range([0, boundsWidth]), [max, boundsWidth]);
    const scaleFactor = 0.3;
    // Build the shapes
    const allShapes = data.map((d) => (
        <BarItem
            key={d.name}
            name={d.name}
            value={d.value}
            barHeight={yScale.bandwidth()}
            barWidth={xScale(d.value)}
            x={0} // xScale(0) would always be 0 in this linear scale
            y={yScale(d.name) ?? 0}
        />
    ));

    return (
        <div>
            <svg width={svgSize.width} height={svgSize.height}>
                <g transform={`translate(${MARGIN.left},${MARGIN.top})`}>
                    {allShapes}
                </g>
            </svg>
        </div>
    );
};
