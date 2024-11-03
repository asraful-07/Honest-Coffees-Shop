import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CoffeeCard from "../components/CoffeeCard";

const Coffee = () => {
  const data = useLoaderData();
  const [coffee, setCoffee] = useState(data);

  const handelClick = (sortBy) => {
    if (sortBy == "popularity") {
    } else if (sortBy == "rating") {
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
            onClick={() => handelClick("popularity")}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handelClick("rating")}
            className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 focus:outline-none"
          >
            Sort By Rating
          </button>
        </div>
      </div>

      <h1 className="text-3xl font-bold my-4">Coffee Card: {data.length}</h1>
      <div className="grid my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((coffee, idx) => (
          <CoffeeCard key={idx} coffee={coffee} />
        ))}
      </div>
    </div>
  );
};

export default Coffee;
