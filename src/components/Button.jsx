import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
  const { setIsClicked, initialState } = useStateContext();
  const navigate = useNavigate(); // Create navigate instance

  const handleClick = () => {
    setIsClicked(initialState);  // Reset context state
    navigate('/dashboard/aspect');  // Navigate to /aspect
  };

  return (
    <button
      type="button"
      onClick={handleClick}  // Use handleClick for onClick event
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
