import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { pieChartData } from "../../data/dummy";
import { ChartsHeader, Pie as PieChart } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const SentimentPie = () => {
  const { currentMode, selectedProduct } = useStateContext();
  const navigate = useNavigate();
  const [chartData, setChartData] = useState(pieChartData);

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
      const response = await axios.get(
        `http://localhost:5000/api/v1/dashboard/sentiment-pie?asin=${asin}`
      );
      setChartData(response.data);
    } catch (error) {
      console.error("Error fetching chart data:", error);
    }
  };
  if (!selectedProduct) {
    return null;
  }
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Sentiment Analysis Breakdown" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={chartData}
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
};

export default SentimentPie;
