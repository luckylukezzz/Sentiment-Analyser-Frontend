import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import debounce from 'lodash/debounce';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);

  // Function to fetch products
  const fetchProducts = useCallback(debounce((term) => {
    if (term.length === 0) {
      // Fetch initial 10 products if search term is empty
      axios.get('http://127.0.0.1:5000/search')
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching data:', error));
    } else {
      // Fetch products based on search term
      axios.get(`http://127.0.0.1:5000/search?term=${term}`)
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, 300), []); // Debounce for 300 milliseconds

  useEffect(() => {
    fetchProducts(searchTerm);
  }, [searchTerm, fetchProducts]);

  return (
    <div>
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
          <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-[#9aa0a6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-light-gray h-64 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-32 object-cover rounded-md"
            />
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.title.slice(0, 50)}</span>
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

