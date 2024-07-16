import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

function formatMillions(num) {
  return `${(num / 1e6).toFixed(2)}`;
}
const HomeBarchart = () => {
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

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Amount (in millions)",
              data: values,
              backgroundColor: "#F6AF3B",
              borderColor: "#F6AF3B",
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
          color: "rgba(255, 255, 255, 0.2)", // Changes the color of x-axis grid lines
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
            return `${value.toLocaleString()}M`;
          },
        },
      },
    },
  };

  return (
    <div className='container mx-auto p-4'>
      <div className='grid grid-cols-1 md:grid-cols-1 gap-4'>
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
      </div>
    </div>
  );
};

export default HomeBarchart;
