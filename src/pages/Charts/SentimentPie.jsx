import React from "react";
import { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { pieChartData } from "../../data/dummy";
import { ChartsHeader, Pie as PieChart } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";

const SentimentPie = () => {
  const { currentMode,selectedProduct } = useStateContext(); 
    const navigate = useNavigate();
  
    useEffect(() => {
      console.log(selectedProduct); 
      if (!selectedProduct) {
        navigate('/dashboard/search'); 
      }
    }, [selectedProduct, navigate]);
  
    if (!selectedProduct) {
      return null; 
    }
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Sentiment Analysis Breakdown" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={pieChartData}
          legendVisiblity
          height="full"
          
        />
      </div>
    </div>
  );
};

export default SentimentPie;
