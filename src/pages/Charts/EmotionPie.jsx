import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChartsHeader, Pie as PieChart } from "../../components";
import { useStateContext } from "../../contexts/ContextProvider";
import { pieChartDataEmotion } from '../../data/dummy';

const EmotionPie = () => {
  const { currentMode } = useStateContext();
  const { selectedProduct } = useStateContext(); 
  const navigate = useNavigate();
  
  const [chartData, setChartData] = useState(pieChartDataEmotion); // Default to dummy data

  useEffect(() => {
    console.log(selectedProduct); 
    if (!selectedProduct) {
      navigate('/dashboard/search'); 
    } else {
      fetchChartData(selectedProduct);
      console.log(selectedProduct)
    }
  }, [selectedProduct, navigate]);

  const fetchChartData = async (asin) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/v1/dashboard/emotion-pie?asin=${asin}`);
      setChartData(response.data); // Update chart data with the fetched data
    } catch (error) {
      console.error('Error fetching chart data:', error);
    }
  };

  if (!selectedProduct) {
    return null; 
  }

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pie" title="Emotion Distribution" />
      <div className="w-full">
        <PieChart
          id="chart-pie"
          data={chartData} // Use fetched chart data
          legendVisiblity
          height="full"
        />
      </div>
    </div>
  );
};

export default EmotionPie;
