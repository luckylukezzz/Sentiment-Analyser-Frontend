import React,{ useEffect }from "react";
import { BsCurrencyDollar } from "react-icons/bs";
// import { GoPrimitiveDot } from 'react-icons/go';
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { positiveTerms, negativeTerms, aspectList } from "../data/dummy";
import {
  Stacked,
  Button,
  LineChart,
  SparkLine,
  ImprovementTips,
  Aspects,
} from "../components";
import {
  pieChartData,
  improvementTips,
  pieChartDataEmotion,
} from "../data/dummy";
import { Pie as PieChart, ChartsHeader } from "../components";
import {
  topBlocks,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from 'react-router-dom';
import product9 from "../data/product9.jpg";

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
  const { currentColor, currentMode ,selectedProduct} = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(selectedProduct)
    if (!selectedProduct) {
      navigate('/dashboard/search'); // Redirect to search if no product (parent_asin) is selected
    }
  }, [selectedProduct, navigate]);

  if (!selectedProduct) {
    return null; // Optionally render a loading or placeholder state
  }
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 ">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">product</p>
              <p className="text-2xl">Apple Iphone 12</p>
              <p className="font-bold text-gray-400">asin</p>
              <p className="text-2xl">B812AD45C</p>
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
        {/* <div
            className=" rounded-2xl md:w-400 p-4 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Earnings</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">
                  $63,448.78
                </p>
                <p className="text-gray-200">Monthly revenue</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine
                currentColor={currentColor}
                id="column-sparkLine"
                height="100px"
                type="Column"
                data={SparklineAreaData}
                width="320"
                color="rgb(242, 252, 253)"
              />
            </div>
          </div> */}
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
              data={pieChartData}
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
            {negativeTerms.length > 0 ? (
              <div className="space-y-3">
                {negativeTerms.map((term, index) => (
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
            {positiveTerms.length > 0 ? (
              <div className="space-y-3">
                {positiveTerms.map((term, index) => (
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
              data={pieChartDataEmotion}
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
