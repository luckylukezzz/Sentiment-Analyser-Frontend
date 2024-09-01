import { ImprovementTips } from '../components';
import React, { useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { useStateContext } from '../contexts/ContextProvider';

const Improvement = () => {
  const { selectedProduct } = useStateContext(); 
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
      <ImprovementTips clz="max-h-full" />
    </div>
  );
};

export default Improvement;
