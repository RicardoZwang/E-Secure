import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

function formatMillions(num) {
  return `${(num / 1e6).toFixed(2)}`;
}
const Barchart = () => {
  console.log(apiUrl);
  const [activeYear, setActiveYear] = useState("2022");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  // Update chart data when the active year changes
  useEffect(() => {
    axios
      .get(`${apiUrl}/scamByAge`)
      .then((res) => {
        const rawData = res.data;
        const formatData = rawData.reduce((acc, item) => {
          const { myYear, age_group, amount } = item;
          if (!acc[myYear]) {
            acc[myYear] = {};
          }
          acc[myYear][age_group] = amount;
          return acc;
        }, {});

        console.log(formatData);

        const data = formatData[activeYear];
        const labels = Object.keys(data);
        const values = Object.values(data).map(formatMillions);

        const maxAmount = Math.max(...values);
        const backgroundColor = values.map((value) =>
          value == maxAmount ? "#ef4444" : "#fde047"
        );

        const borderColor = values.map((value) =>
          value == maxAmount ? "#ef4444" : "#fde047"
        );

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Highest rate of victims",
              data: values,
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log("Error in fetching data", err);
      });
  }, [activeYear]);
  const options = {
    scales: {
      x: {
        ticks: {
          color: "white", // This will change the x-axis ticks color to white
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Changes the color of x-axis grid lines
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          // This callback is used to format the Y-axis labels
          callback: function (value) {
            return value === 0 ? "0" : "$" + value.toLocaleString() + "M";
          },
          color: "white",
        },
        grid: {
          color: "rgba(255, 255, 255, 0.2)", // Changes the color of y-axis grid lines
        },
      },
    },

    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white", // Set text to white
        },
      },
      title: {
        display: true,
        text: "Age-Wise Distribution of Scam Incidents",
        color: "white",
        font: {
          size: 20,
        },
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      tooltip: {
        callbacks: {
          // This callback is used to format the tooltip
          label: function (context) {
            let value = context.parsed.y;
            return `$${value.toLocaleString()} Millions`;
          },
        },
      },
    },
  };
  {
    /* Split the column into two one for description and one for the data graph */
  }
  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {/* Chart container with max-width and responsive width */}
        <div className='flex flex-col justify-center items-center'>
          {chartData && chartData.datasets.length > 0 ? (
            <Bar data={chartData} options={options} />
          ) : (
            <p>Loading data...</p>
          )}
          {/* Buttons centered below the chart on all screen sizes */}
          <div className='w-full mt-4 flex justify-center'>
            {/* This is for the buttons for each year where user can select them and the corresponding data will appear */}

            {["2020", "2021", "2022", "2023", "2024"].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 mx-1 text-sm font-medium ${
                  activeYear === year
                    ? "bg-green-200 text-blue-700" // Active button with your chosen color
                    : "text-gray-900 bg-white"
                }  rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300 focus:text-black dark:bg-gray-800 dark:hover:bg-gray-700`}
                aria-current={activeYear === year ? "page" : undefined}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* This is just the description to describe the data */}
        <div className='p-4 flex flex-col justify-center'>
          <p className='text-lg font-semibold text-[#fcd34d]'>
            Age-Wise Distribution of Scam Incidents Over Five Years
          </p>
          <p className='mt-2 text-white'>
            From the Data we collected from Scam Watch we uncovered striking
            trends and unveils the shifting demographics of scam victims. Are
            seniors more at risk, or is the younger generation becoming the new
            target? This graph not only traces the financial magnitude of scams
            per age bracket but also serves as a crucial reminder of the
            pervasive nature of scam activities. Understand the patterns, stay
            informed, and empower yourself and your loved ones with knowledge to
            navigate the digital age securely. Take a closer look at which age
            groups have borne the brunt of scam activities and how the landscape
            has transformed over the past five years.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Barchart;
