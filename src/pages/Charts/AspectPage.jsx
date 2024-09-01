import { Aspects } from "../../components";
import React, { useEffect } from 'react'; 
import { useStateContext } from '../../contexts/ContextProvider'; 
import { useNavigate } from 'react-router-dom'; 

const AspectPage = () => {

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
        <div className="flex items-center justify-center min-h-screen">
        <Aspects/>
        </div>
     );
}
 
export default AspectPage;