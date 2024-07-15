import React, { useEffect, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList
} from "recharts";

const data = [
    {
        name: "VIC",
        2020: 49.1,
        2021: 74.3,
        2022: 120,
        2023: 110.5,
        2024: 9.8,
        amt: 2400
    },
    {
        name: "NSW",
        2020: 46.3,
        2021: 110.1,
        2022: 155.5,
        2023: 138.6,
        2024: 18.6,
        amt: 2400
    },
    {
        name: "QLD",
        2020: 32.2,
        2021: 58.6,
        2022: 90.3,
        2023: 91.9,
        2024: 9.3,
        amt: 2400
    },
    {
        name: "WA",
        2020: 10.3,
        2021: 22.2,
        2022: 50.5,
        2023: 54.2,
        2024: 2.1,
        amt: 2400
    },
    {
        name: "SA",
        2020: 8,
        2021: 19.4,
        2022: 27.3,
        2023: 24.1,
        2024: 3.6,
        amt: 2400
    },
    {
        name: "TAS",
        2020: 2.1,
        2021: 4.4,
        2022: 10.4,
        2023: 7,
        2024: 0.5354,
        amt: 2500
    },
    {
        name: "ACT",
        2020: 3.1,
        2021: 7.1,
        2022: 14.7,
        2023: 13.5,
        2024: 2.6,
        amt: 2100
    }
];

interface ICustomLabelProps {
    x: number;
    y: number;
    width: number;
    value: string;
}

const renderCustomizedLabel = (props: ICustomLabelProps) => {
    const { x, y, width, value } = props;
    const radius = 10;

    return (
        <g>
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#8884d8" />
            <text
                x={x + width / 2}
                y={y - radius}
                fill="#fff"
                textAnchor="middle"
                dominantBaseline="middle"
            >
                {value}
            </text>
        </g>
    );
};

const App: React.FC = () => {

    const [chartSize, setChartSize] = useState({ width: 700, height: 700 });
    const [legendPadding, setLegendPadding] = useState(20);  // Default padding


    const updateChartAndLegendSize = () => {
        if (window.innerWidth <= 768) {
            setChartSize({ width: 100, height: 350 });
            setLegendPadding(15);  // Smaller padding for smaller screens
        } else {
            setChartSize({ width: 700, height: 700 });
            setLegendPadding(20);  // Larger padding for larger screens
        }
    };


    // Update chart size on window resize

    useEffect(() => {
        updateChartAndLegendSize();
        window.addEventListener("resize", updateChartAndLegendSize);
        return () => window.removeEventListener("resize", updateChartAndLegendSize);
    }, []);

    return (
        <div className='bg-white w-full mx-auto grid md:grid-cols-2 gap-4 grid-cols-1'>
            <div className="flex">
                <BarChart
                    width={chartSize.width}
                    height={chartSize.height}
                    data={data}
                    margin={{
                        top: 100,
                        right: 20,
                        left: 30,
                        bottom: 20,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend wrapperStyle={{ padding: legendPadding }} />
                    <Bar dataKey="2020" fill="#e7ba9c" minPointSize={10} />
                    <Bar dataKey="2021" fill="#f1bf5e" minPointSize={10} />
                    <Bar dataKey="2022" fill="#a7dbb4" minPointSize={10} />
                    <Bar dataKey="2023" fill="#e47363" minPointSize={10} />
                </BarChart>
            </div>
            <div className='flex items-center text-black pb-5 pl-5'>
                <h2 className='text-xl sm:text-3xl font-bold pl-5 md:text-5xl'>Finanical Lost by State in Australia between 2020-2024</h2>

            </div>
        </div>


    );
};

export default App;