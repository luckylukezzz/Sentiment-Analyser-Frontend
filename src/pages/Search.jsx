import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import debounce from "lodash/debounce";
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const { setSelectedProduct } = useStateContext();
  const navigate = useNavigate();
  const backendApiUrl = process.env.REACT_APP_BACKEND_API;
  console.log(backendApiUrl);
  const handleProductSelect = (item) => {
    setSelectedProduct(item.parent_asin);
    navigate("/dashboard/");
  };
  // Function to fetch products
  const fetchProducts = useCallback(
    debounce((term) => {
      if (term.length === 0) {
        // Fetch initial 10 products if search term is empty
        axios
          .get(`${backendApiUrl}/dashboard/search`, {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          })
          .then((response) => {
            console.log("Response data:", response);
            setProducts(response.data);
          })
          .catch((error) => console.error("Error fetching data:", error));

        console.log("products are", products);
      } else {
        // Fetch products based on search term
        axios
          .get(`${backendApiUrl}/dashboard/search?term=${term}`, {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          })
          .then((response) => setProducts(response.data))
          .catch((error) => console.error("Error fetching data:", error));
      }
    }, 300),
    []
  ); // Debounce for 300 milliseconds

  useEffect(() => {
    fetchProducts(searchTerm);
  }, [searchTerm, fetchProducts]);

  return (
    <div>
      <p className="dark:text-white text-white text-xl font-semibold w-full text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 rounded-lg shadow-lg">
        Select a product to get analytics
      </p>
      <div className="flex justify-center mt-8">
        <div className="relative w-[584px] max-w-full">
          <input
            type="text"
            placeholder="Search products"
            className="w-full py-3 px-12 text-base rounded-full border shadow-sm focus:outline-none focus:ring-1 transition-colors duration-200
                      dark:bg-[#303134] dark:text-white dark:border-[#5f6368] dark:placeholder-[#9aa0a6] dark:focus:ring-blue-300
                      bg-white text-gray-900 border-gray-200 placeholder-gray-500 focus:ring-blue-300"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-[#9aa0a6]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      <div className="flex m-3 flex-wrap justify-center gap-1 items-center overflow-hidden p-0.5 ">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-light-gray h-64 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl m-2"
            onClick={() => handleProductSelect(item)}
          >
            <img
              src={item.image ? item.image : "/images/productimg.jpg"}
              alt={item.title}
              className="w-full h-32 object-cover rounded-md"
            />
            <p className="mt-3">
              <span className="text-lg font-semibold">
                {item.title.slice(0, 50)}
              </span>
            </p>
            {/* <p className="text-sm text-gray-400 mt-1">
              {item.description.length > 50
                ? `${item.description.slice(0, 50)}...`
                : item.description}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
