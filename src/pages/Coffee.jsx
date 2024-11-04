import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const Coffee = () => {
  const data = useLoaderData();
  const [coffee, setCoffee] = useState(data);

  const handleClick = (sortBy) => {
    if (sortBy === "popularity") {
      const sorted = [...coffee].sort((a, b) => b.popularity - a.popularity);
      setCoffee(sorted);
    } else if (sortBy === "rating") {
      const sorted = [...coffee].sort((a, b) => b.rating - a.rating);
      setCoffee(sorted);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between my-12">
        <h1 className="text-2xl font-semibold mb-4 md:mb-0">
          Sort Coffee by Popularity & Rating
        </h1>
        <div className="flex space-x-4">
          <button
            onClick={() => handleClick("popularity")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleClick("rating")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 focus:outline-none"
          >
            Sort By Rating
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold my-4">Coffee Card: {coffee.length}</h1>
      <div className="grid my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffee.map((coffeeItem, idx) => (
          <CoffeeCard key={idx} coffee={coffeeItem} />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
