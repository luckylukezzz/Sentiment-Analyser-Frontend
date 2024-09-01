import React, { useEffect, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
// import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { positiveTerms, negativeTerms, aspectList } from "../data/dummy";
import { Button, LineChart, ImprovementTips, Aspects } from "../components";
import { pieChartData, pieChartDataEmotion } from "../data/dummy";
import { Pie as PieChart, ChartsHeader } from "../components";
import {  dropdownData } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { MdOutlineRateReview} from 'react-icons/md';
import { TbCalendarTime } from "react-icons/tb";
import {BiSolidCategory} from 'react-icons/bi';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent
      id="time"
      fields={{ text: "Time", value: "Id" }}
      style={{ border: "none", color: currentMode === "Dark" && "white" }}
      value="1"
      dataSource={dropdownData}
      popupHeight="220px"
      popupWidth="120px"
    />
  </div>
);

const AllAnalytics = () => {
  const { currentColor, currentMode, selectedProduct } = useStateContext();
  const [sentimentChartData, setSentimentChartData] = useState(pieChartData);
  const [emotionChartData, setEmotionChartData] = useState(pieChartDataEmotion);
  const [positiveData, setPositiveData] = useState([]);
  const [negativeData, setNegativeData] = useState([]);
  const [topBlockData, setTopBlockData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedProduct);
    if (!selectedProduct) {
      navigate("/dashboard/search");
    } else {
      fetchChartData(selectedProduct);
      console.log(selectedProduct);
    }
  }, [selectedProduct, navigate]);

  const fetchChartData = async (asin) => {
    try {
      const response1 = await axios.get(
        `http://localhost:5000/api/v1/dashboard/sentiment-pie?asin=${asin}`
      );
      setSentimentChartData(response1.data); 
      const response2 = await axios.get(
        `http://localhost:5000/api/v1/dashboard/emotion-pie?asin=${asin}`
      );
      setEmotionChartData(response2.data);
      const response3 = await axios.get(
        `http://localhost:5000/api/v1/dashboard/positive?asin=${asin}`
      );
      setPositiveData(response3.data);
      const response4 = await axios.get(
        `http://localhost:5000/api/v1/dashboard/negative?asin=${asin}`
      );
      setNegativeData(response4.data);
      const response5 = await axios.get(
        `http://localhost:5000/api/v1/dashboard/top-block?asin=${asin}`
      );
      setTopBlockData(response5.data);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };
  if (!selectedProduct) {
    return null; // Optionally render a loading or placeholder state
  }
  const topBlocks = [
    {
      icon: <BiSolidCategory />,
      amount: topBlockData?.category || 'Loading...',
      title: 'Category',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
      pcColor: 'green-600',
    },
    {
      icon: <MdOutlineRateReview />,
      amount: topBlockData?.noReviews || 'Loading...',
      title: 'Analysing Reviews',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <TbCalendarTime />,
      amount: topBlockData?.period || 'Loading...',
      title: 'Time Period',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
  ];
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 ">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">product</p>
              <p className="text-2xl">{topBlockData?.name}</p>
              <p className="font-bold text-gray-400">asin</p>
              <p className="text-2xl">{topBlockData?.asin}</p>
            </div>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-4 items-center">
          {topBlocks.map((item) => (
            <div
              key={item.title}
              className="bg-light-gray h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-72  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ---------------------------------------------- */}
      <div className="flex gap-5 flex-wrap justify-center">
        {/* -------------------------------------------------- */}

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-80 md:w-800 h-128 m-3">
          <div className="flex justify-between items-center gap-2 mb-10">
            <p className="text-xl font-semibold">Sentiment over Time</p>
          </div>
          <div className="md:w-full overflow-auto h-full">
            <LineChart />
          </div>
        </div>

        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-96 p-6 m-3 flex flex-col justify-center items-center gap-1 h-auto">
          {/* Chart Header */}
          <div className="w-full text-center">
            <h2 className="text-xl font-semibold">Sentiment Distribution</h2>
          </div>

          <div className="w-full h-full">
            <PieChart
              id="chart-pie-sentiments"
              data={sentimentChartData}
              legendVisiblity
              height="full"
            />
          </div>
        </div>
      </div>
      {/* ---------------------------------------------------- */}
      <div className="flex gap-4 m-4 flex-wrap justify-center">
        <Aspects />
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <ImprovementTips clz="max-h-96" />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {/* ------------------------------------------------------ */}
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Top negative terms</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-4 max-h-96 overflow-y-auto">
            {negativeData.length > 0 ? (
              <div className="space-y-3">
                {negativeData.map((term, index) => (
                  <div
                    key={index}
                    className="bg-red-100 text-custom-red border border-red-300 rounded-lg shadow-md p-4"
                  >
                    {term}
                  </div>
                ))}
              </div>
            ) : (
              <p>No negative terms available</p>
            )}
          </div>
        </div>
        {/* ---------------------------------------------- */}
        <div className="w-400 bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl p-6 m-3">
          <div className="flex justify-between">
            <p className="text-xl font-semibold">Top positive terms</p>
            <button
              type="button"
              className="text-xl font-semibold text-gray-400"
            >
              <IoIosMore />
            </button>
          </div>
          <div className="mt-4 max-h-96 overflow-y-auto">
            {positiveData.length > 0 ? (
              <div className="space-y-3">
                {positiveData.map((term, index) => (
                  <div
                    key={index}
                    className="bg-lime-100 text-custom-green border border-custom-green rounded-lg shadow-md p-4"
                  >
                    {term}
                  </div>
                ))}
              </div>
            ) : (
              <p>No positive terms available</p>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-96 p-6 m-3 flex flex-col justify-center items-center gap-1 h-auto">
          {/* Chart Header */}
          <div className="w-full text-center">
            <h2 className="text-xl font-semibold">Emotions Distribution</h2>
          </div>

          <div className="w-full h-full">
            <PieChart
              id="chart-pie-emotions"
              data={emotionChartData}
              legendVisiblity
              height="full"
            />
          </div>
        </div>

        {/* ------------------------- */}
      </div>
    </div>
  );
};

export default AllAnalytics;
