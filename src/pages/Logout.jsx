import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import animationData from '../assets/animation.json'; // Adjust the path to your JSON file
import { useStateContext } from '../contexts/ContextProvider';

const Logout = () => {
  const navigate = useNavigate();
  const [remainingTime, setRemainingTime] = useState(3); // Start with 3 seconds
  const { currentColor,setSelectedProduct } = useStateContext(); // Use currentColor from context

  useEffect(() => {
    localStorage.removeItem("auth");
    setSelectedProduct(null)
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          navigate("/");
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [navigate]);

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <h1 className={`text-4xl font-bold mb-4`} style={{ color: currentColor }}>Logout Successful!</h1>
      <p className='text-xl text-gray-700 mb-8'>
        You will be redirected to the landing page in{' '}
        <span className='font-semibold' style={{ color: currentColor }}>{remainingTime}</span> seconds...
      </p>
      <Lottie animationData={animationData} style={{ width: 400, height: 400 }} /> {/* Increased size */}
    </div>
  );
}

export default Logout;