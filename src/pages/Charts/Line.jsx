import React, { useEffect } from 'react'; // Import useEffect to use the hook
import { useStateContext } from '../../contexts/ContextProvider'; // Import your custom context hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { ChartsHeader, LineChart } from '../../components'; // Import your components

const Line = () => {
  const { selectedProduct } = useStateContext(); // Destructure selectedProduct from context
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
