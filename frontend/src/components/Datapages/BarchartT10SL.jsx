import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

function formatMillions(num) {
  return `${(num / 1e6).toFixed(2)}`;
}

function BarchartT10SL() {
  const [activeYear, setActiveYear] = useState("2022");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    axios
      .get(`${apiUrl}/top10ScamMoneyLostByYear`)
      .then((res) => {
        const rawData = res.data;
        const formatData = rawData.reduce((acc, item) => {
          const { myYear, scam_type, amount } = item;
          if (!acc[myYear]) {
            acc[myYear] = {};
          }
          acc[myYear][scam_type] = amount;
          return acc;
        }, {});

        const entries = Object.entries(formatData[activeYear]);
        // Sort entries from most reported case to least
        entries.sort((a, b) => b[1] - a[1]);

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
              label: `Most Scam Money Lost in ${activeYear}`,
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
        text: `Top 10 Most Expensive Scams in ${activeYear}`,
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
            return `$ ${context.label}: ${value.toLocaleString()} Millions`;
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
            Yearly Overview of the Top 10 Financial Scams
          </p>
          <p className='mt-2 text-white'>
            2020 through 2024 have seen a staggering escalation in both the
            diversity and the magnitude of scams, with investment fraud
            consistently leading as the most financially draining. The graph
            provides not only a visual representation of these scams' financial
            toll but also a crucial insight into which types of scams are
            becoming more common and how their impacts vary year by year. And As
            we navigate these costly waters, understanding these trends is more
            than an exercise in statistics, it's a vital tool in developing
            strategies to protect ourselves and our communities from financial
            predators. Stay informed and stay vigilant as you explore the
            intricacies of these deceptive practices that have significantly
            impacted countless lives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BarchartT10SL;
