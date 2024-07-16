import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

function formatMillions(num) {
  return `${(num / 1e6).toFixed(2)}`;
}

function BarchartMonthly() {
  const [activeYear, setActiveYear] = useState("2022");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    axios
      .get(`${apiUrl}/moneyLostyearMonth`)
      .then((res) => {
        const rawData = res.data;
        const formatData = rawData.reduce((acc, item) => {
          const { myYear, myMonth, amount } = item;
          if (!acc[myYear]) {
            acc[myYear] = {};
          }
          acc[myYear][myMonth] = amount;
          return acc;
        }, {});
        const entries = Object.entries(formatData[activeYear]);
        // Sort entries from most reported case to least

        const labels = entries.map((entry) => entry[0]);
        const values = entries.map((entry) => entry[1]).map(formatMillions);

        const maxAmount = Math.max(...values);
        const backgroundColor = values.map((value) =>
          value == maxAmount ? "#ef4444" : "#fde047"
        );
        setChartData({
          labels: labels,
          datasets: [
            {
              label: `Top 10 Scams Money Lost in ${activeYear}`,
              data: values,
              backgroundColor: backgroundColor,

              borderWidth: 1,
            },
          ],
        });
      })
      .catch((err) => {
        console.log("Error in fetching data", err);
      });
  }, [activeYear]);

  // Chart options
  const options = {
    scales: {
      x: {
        ticks: {
          color: "white",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
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
        display: false,
        position: "top",
        labels: {
          color: "white",
        },
      },
      title: {
        display: true,
        text: `Monthly Financial Losses in ${activeYear}`,
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
          label: function (context) {
            let value = context.parsed.y;
            return `$${context.label}: ${value.toLocaleString()} Millions`;
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
        <div className='flex flex-col justify-center items-center p-4'>
          {chartData.datasets.length > 0 ? (
            <Bar data={chartData} options={options} />
          ) : (
            <p>Loading data...</p>
          )}
          <div className='w-full mt-4 flex justify-center'>
            {/* This is for the buttons for each year where user can select them and the corresponding data will appear */}

            {["2020", "2021", "2022", "2023", "2024"].map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-4 py-2 mx-1 text-sm font-medium ${
                  activeYear === year
                    ? "bg-green-200 text-blue-700"
                    : "text-gray-900 bg-white"
                } rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-300 focus:text-black dark:bg-gray-800 dark:hover:bg-gray-700`}
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
            A Month-by-Month Breakdown of Financial Losses to Scams
          </p>
          <p className='mt-2 text-white'>
            Every year, unsuspecting individuals and businesses fall victim to
            an array of sophisticated scams, losing millions in the process. Our
            interactive visualization charts the monthly financial toll these
            scams have exacted over the past five years, providing a clear,
            concise view of the rising threat in our digital and financial
            landscapes. <br />
            <br />
            Dive into our chart to see which months are most hazardous and how
            scam activities have shifted year over year, equipping yourself with
            the knowledge to protect your finances and stay one step ahead of
            the scammers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BarchartMonthly;
