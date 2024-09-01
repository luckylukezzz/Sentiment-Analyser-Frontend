import React, { useState, useEffect } from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  LineSeries,
  DateTime,
  Legend,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import { useNavigate } from "react-router-dom";
import {
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import axios from 'axios';
import { useStateContext } from "../../contexts/ContextProvider";

const LineChart = () => {
  const { currentMode, selectedProduct } = useStateContext();
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedProduct) {
      navigate("/dashboard/search");
    } else {
      fetchChartData(selectedProduct);
    }
  }, [selectedProduct, navigate]);

  const fetchChartData = async (asin) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/dashboard/line-data?asin=${asin}`
      );
      setChartData(response.data);
    } catch (error) {
      console.error("Error fetching chart data:", error);
      // Handle error state here, e.g., set an error message
    } finally {
      setIsLoading(false);
    }
  };

  if (!selectedProduct) {
    return null;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ChartComponent
      id="line-chart"
      height="420px"
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{
        background: currentMode === "Dark" ? "#33373E" : "#fff",
        textStyle: { color: currentMode === "Dark" ? "#fff" : "#000" },
      }}
    >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {chartData.map((item, index) => (
          
          <SeriesDirective
            key={index}
            dataSource={item.dataSource}
            xName={item.xName}
            yName={item.yName}
            name={item.name}
            width={item.width}
            marker={item.marker}
            type={item.type}
            fill={item.color}
          />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;