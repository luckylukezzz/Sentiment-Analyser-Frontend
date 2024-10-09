//import { aspectList } from "../../data/dummy";
import Button from "../Button";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStateContext } from "../../contexts/ContextProvider";
import { BiSolidCrown } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { FcCustomerSupport } from "react-icons/fc";
import { LiaCertificateSolid } from "react-icons/lia";
import { TbTruckDelivery } from "react-icons/tb";

// Map icon names to actual React components
const iconMapping = {
  BiSolidCrown: BiSolidCrown,
  BsCurrencyDollar: BsCurrencyDollar,
  TbTruckDelivery: TbTruckDelivery,
  FcCustomerSupport: FcCustomerSupport,
  LiaCertificateSolid: LiaCertificateSolid,
};

const Aspects = () => {
  // getting aspectList from the backend
  const { currentColor } = useStateContext();
  const { selectedProduct } = useStateContext();
  const navigate = useNavigate();
  const [aspectList, setAspectData] = useState([]);
  const backendApiUrl = process.env.REACT_APP_BACKEND_API;
  useEffect(() => {
    if (!selectedProduct) {
      navigate("/dashboard/search");
    } else {
      fetchAspectData(selectedProduct);
    }
  }
  , [selectedProduct, navigate]);

  const fetchAspectData = async (asin) => {
    try {
      const headers = {
        "ngrok-skip-browser-warning": "true",
      };

      const response = await axios.get(
        `${backendApiUrl}/dashboard/aspect-info?asin=${asin}`,
        { headers }
      );

      setAspectData(response.data); // Update aspect data with the fetched data
    } catch (error) {
      console.error("Error fetching aspect data:", error);
    }
  };

  return (
    <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl m-3 ">
      <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-semibold">Product Aspects</p>
        {/* <DropDown currentMode={currentMode} /> */}
      </div>
      <div className="mt-10 w-72 md:w-400">
        {aspectList.map((item) => {
          // Get the icon component from the mapping
          const IconComponent = iconMapping[item.icon];
          return (
            <div key={item.title} className="flex justify-between mt-4">
              <div className="flex gap-4">
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg,
                  }}
                  className="text-2xl rounded-lg p-4 hover:drop-shadow-xl"
                >
                  {IconComponent ? <IconComponent /> : null}
                </button>
                <div>
                  <p className="text-md font-semibold">{item.title}</p>
                  <p
                    className={`text-sm ${
                      item.sentiment === "Positive"
                        ? "text-green-600"
                        : item.sentiment === "Negative"
                        ? "text-red-600"
                        : "text-cyan-600"
                    }`}
                  >
                    {item.sentiment}
                  </p>
                </div>
              </div>
              <p
                  className={`text-sm ${
                    item.sentiment === "Positive"
                      ? "text-green-600"
                      : item.sentiment === "Negative"
                      ? "text-red-600"
                      : "text-cyan-600"
                  }`}
              >
                {item.score}
              </p>
            </div>
          )
        })}
      </div>
      <div className="flex justify-between items-center mt-5 border-t-1 border-color">
        <div className="mt-3">
          <Button
            color="white"
            bgColor={currentColor}
            text="How aspects are calculated?"
            borderRadius="10px"
          />
        </div>
      </div>
    </div>
  );
};

export default Aspects;


// aspectList = [
//   {
//     "icon": "BiSolidCrown",
//     "score": "1.00",
//     "title": "Quality",
//     "sentiment": "Positive",
//     "iconColor": "#03C9D7",
//     "iconBg": "#E5FAFB",
//     "pcColor": "green-600"
//   },
//   {
//     "icon": "BsCurrencyDollar",
//     "score": "0.00",
//     "title": "Price",
//     "sentiment": "Neutral",
//     "iconColor": "rgb(0, 194, 146)",
//     "iconBg": "rgb(235, 250, 242)",
//     "pcColor": "red-600"
//   },
//   {
//     "icon": "TbTruckDelivery",
//     "score": "0.00",
//     "title": "Shipping",
//     "sentiment": "Neutral",
//     "iconColor": "rgb(255, 244, 229)",
//     "iconBg": "rgb(254, 201, 15)",
//     "pcColor": "red-600"
//   },
//   {
//     "icon": "FcCustomerSupport",
//     "score": "1.00",
//     "title": "Customer Service",
//     "sentiment": "Positive",
//     "iconColor": "rgb(228, 106, 118)",
//     "iconBg": "rgb(255, 244, 229)",
//     "pcColor": "green-600"
//   },
//   {
//     "icon": "LiaCertificateSolid",
//     "score": "0.00",
//     "title": "Warranty",
//     "sentiment": "Neutral",
//     "iconColor": "#03C9D7",
//     "iconBg": "#E5FAFB",
//     "pcColor": "red-600"
//   }
// ]