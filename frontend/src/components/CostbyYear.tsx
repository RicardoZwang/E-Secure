import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, ResponsiveContainer, Cell } from 'recharts';

interface IData {
    name: string;
    value: number;
}

const data = [

    { name: "2020", value: 138, color: "#0088FE" },
    { name: "2021", value: 276, color: "#00C49F" },
    { name: "2022", value: 435, color: "#FFBB28" },
    { name: "2023", value: 412, color: "#FF8042" },
    { name: "2024", value: 55, color: "#e11d48" },
];

interface IActiveShapeProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    startAngle: number;
    endAngle: number;
    fill: string;
    payload: any;
    percent: number;
    value: number;
}

const renderActiveShape = (props: IActiveShapeProps) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 10) * cos;
    const my = cy + (outerRadius + 10) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
            <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                {payload.name}
            </text>
            <Sector
                cx={cx}
                cy={cy}
                innerRadius={innerRadius}
                outerRadius={outerRadius}
                startAngle={startAngle}
                endAngle={endAngle}
                fill={fill}
            />
            <Sector
                cx={cx}
                cy={cy}
                startAngle={startAngle}
                endAngle={endAngle}
                innerRadius={outerRadius + 6}
                outerRadius={outerRadius + 10}
                fill={fill}
            />
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill}>{`$ ${value} Mil`}</text>

        </g>
    );
};

interface IDatavisualState {
    activeIndex: number;
}

class CostbyYear extends PureComponent {
    state: IDatavisualState = {
        activeIndex: 0,
    };

    onPieEnter = (_: any, index: number) => {
        this.setState({
            activeIndex: index,
        });
    };

    render() {
        return (
            <div>
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 grid-cols-1'>

                    <div className='pie-chart-container flex'>
                        <ResponsiveContainer width="100%" height={400}>
                            <PieChart>
                                <Pie
                                    activeIndex={this.state.activeIndex}
                                    activeShape={renderActiveShape}
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                    onMouseEnter={this.onPieEnter}
                                >
                                    {
                                        data.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))
                                    }
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    {/* Text Information Container */}
                    <div className='flex items-center text-[#0088FE] pb-5'>
                        <h2 className='text-3xl sm:text-5xl font-bold pl-5'>Finanical Lost to Scams between 2020-2024</h2>

                    </div>

                </div>



            </div >


        );
    }
}

export default CostbyYear;
