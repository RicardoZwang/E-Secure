import { useSpring, animated } from "@react-spring/web";
import React from 'react';

type BarItemProps = {
    name: string;
    value: number;
    barHeight: number;
    barWidth: number;
    x: number;
    y: number;
};

type AnimatedProps = {
    barWidth: number;
    value: number;
    valueOpacity: number;
    y: number;
};

export const BarItem = (props: BarItemProps) => {
    const { name, value, barHeight, barWidth, x, y } = props;

    const springProps = useSpring<AnimatedProps>({
        // the 'from' properties will be used only to animate the initialization of the component
        // if you put nothing it will be initialized with the first prop that is provided
        from: {
            value: 0,
            barWidth: 0,
            valueOpacity: 0,
        },
        to: {
            value: value,
            barWidth: barWidth,
            valueOpacity: barWidth > 80 ? 1 : 0,
            y,
        },
        config: {
            friction: 100,
        },
    });

    return (
        <g>
            <animated.rect
                x={x}
                y={springProps.y}
                width={springProps.barWidth}
                height={barHeight}
                opacity={0.7}
                stroke="#0088FE"
                fill="#0088FE"

                strokeWidth={1}
                rx={1}
            />
            <animated.text
                x={springProps.barWidth?.to((width) => width - 7)}
                y={springProps.y?.to((y) => y + barHeight / 2)}
                textAnchor="end"
                alignmentBaseline="central"
                fontSize={10}
                opacity={springProps.valueOpacity}
                fill="white"
            >
                {springProps.value?.to((value) => value.toFixed(0))}
            </animated.text>
            <animated.text
                x={x + barWidth}
                y={springProps.y?.to((y) => y + barHeight / 2)}
                textAnchor="start"
                alignmentBaseline="central"
                fontSize={12}
                fill="white"
            >
                {name}
            </animated.text>
        </g>
    );
};
