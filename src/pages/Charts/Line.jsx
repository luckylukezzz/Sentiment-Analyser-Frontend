import React, { useEffect } from 'react'; 
import { useStateContext } from '../../contexts/ContextProvider'; 
import { useNavigate } from 'react-router-dom'; 
import { ChartsHeader, LineChart } from '../../components'; 

const Line = () => {
  const { selectedProduct } = useStateContext(); 
  const navigate = useNavigate();
  
  useEffect(() => {
    console.log(selectedProduct); // Log the selectedProduct for debugging
    if (!selectedProduct) {
      navigate('/dashboard/search'); // Redirect to search if no product (parent_asin) is selected
    }
  }, [selectedProduct, navigate]);

  if (!selectedProduct) {
    return null; // Optionally render a loading or placeholder state
  }

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Sentiment over Time" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
