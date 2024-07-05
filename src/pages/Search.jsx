import React from 'react';
import { useState } from 'react';

function Search() {
  const products = [
    { id: 1, name: "apple 12 phone", description: "128 GB, 8 GB RAM, white" },
    { id: 2, name: "samsung galaxy s21", description: "256 GB, 12 GB RAM, phantom gray" },
    { id: 3, name: "oneplus 9", description: "128 GB, 8 GB RAM, astral black" },
    { id: 4, name: "google pixel 5", description: "128 GB, 8 GB RAM, just black" },
    { id: 5, name: "sony xperia 1", description: "256 GB, 8 GB RAM, frost blue" },
    { id: 6, name: "nokia 8.3", description: "128 GB, 8 GB RAM, polar night" },
    { id: 7, name: "xiaomi mi 11", description: "256 GB, 12 GB RAM, horizon blue" },
    { id: 8, name: "oppo find x3", description: "256 GB, 12 GB RAM, glossy black" },
    { id: 9, name: "vivo x60", description: "128 GB, 8 GB RAM, midnight black" },
    { id: 10, name: "realme gt", description: "128 GB, 8 GB RAM, racing yellow" },
    { id: 11, name: "asus rog phone 5", description: "256 GB, 16 GB RAM, phantom black" }
  ];
  
  const [ names , setNames] = useState(products);

  const filterNames = e => {
    const search = e.target.value.toLowerCase()
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search))
    setNames(filteredProducts);
  }

  return (
    <div>
      <input type="text" onChange={(e) => filterNames(e)} />
      {/* <ul>
      {names.map(product => (
        <li key={product.id}>{product.name}</li>
      ))}
      </ul> */}
      <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {names.map((item) => (
             <div key={item.id} className="bg-light-gray h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl">
             
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.name}</span>
              </p>
              <p className="text-sm text-gray-400 mt-1">
            {item.description.length > 50 ? `${item.description.slice(0, 50)}...` : item.description}
          </p>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Search;