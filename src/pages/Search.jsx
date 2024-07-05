import React from "react";
import { useState } from "react";

function Search() {
  const products = [
    { id: 1, name: "apple 12 phone", description: "128 GB, 8 GB RAM, white" },
    {
      id: 2,
      name: "samsung galaxy s21",
      description: "256 GB, 12 GB RAM, phantom gray",
    },
    { id: 3, name: "oneplus 9", description: "128 GB, 8 GB RAM, astral black" },
    {
      id: 4,
      name: "google pixel 5",
      description: "128 GB, 8 GB RAM, just black",
    },
    {
      id: 5,
      name: "sony xperia 1",
      description: "256 GB, 8 GB RAM, frost blue",
    },
    { id: 6, name: "nokia 8.3", description: "128 GB, 8 GB RAM, polar night" },
    {
      id: 7,
      name: "xiaomi mi 11",
      description: "256 GB, 12 GB RAM, horizon blue",
    },
    {
      id: 8,
      name: "oppo find x3",
      description: "256 GB, 12 GB RAM, glossy black",
    },
    {
      id: 9,
      name: "vivo x60",
      description: "128 GB, 8 GB RAM, midnight black",
    },
    {
      id: 10,
      name: "realme gt",
      description: "128 GB, 8 GB RAM, racing yellow",
    },
    {
      id: 11,
      name: "asus rog phone 5",
      description: "256 GB, 16 GB RAM, phantom black",
    },
  ];

  const [names, setNames] = useState(products);

  const filterNames = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(search)
    );
    setNames(filteredProducts);
  };

  return (
    <div>
      <div class="flex justify-center mt-8">
  <div class="relative w-[584px] max-w-full">
    <input 
      type="text"
      placeholder="Search products"
      class="w-full py-3 px-12 text-base rounded-full border shadow-sm focus:outline-none focus:ring-1 transition-colors duration-200
             dark:bg-[#303134] dark:text-white dark:border-[#5f6368] dark:placeholder-[#9aa0a6] dark:focus:ring-blue-300
             bg-white text-gray-900 border-gray-200 placeholder-gray-500 focus:ring-blue-300"
      onKeyDown={(e) => e.key === 'Enter' && filterNames(e)}
      onChange={(e) => filterNames(e)}
    />
    <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-[#9aa0a6]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  </div>
</div>
      {/* <input 
  type="text"
  placeholder="Enter to search..."
  class="w-full py-3 px-4 text-lg rounded-lg border focus:outline-none focus:ring-2 transition-colors duration-200
         dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500
         bg-white text-gray-900 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
  onKeyDown={(e) => e.key === 'Enter' && filterNames(e)}
  onChange={(e) => filterNames(e)}
/> */}
      {/* <ul>
      {names.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
      </ul> */}
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
        {names.map((item) => (
          <div
            key={item.id}
            className="bg-light-gray h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl"
          >
            <p className="mt-3">
              <span className="text-lg font-semibold">{item.name}</span>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {item.description.length > 50
                ? `${item.description.slice(0, 50)}...`
                : item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
