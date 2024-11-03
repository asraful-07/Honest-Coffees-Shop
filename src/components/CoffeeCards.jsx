import React, { useEffect, useState } from "react";
import { useLoaderData, useParams, useNavigate } from "react-router-dom";
import CoffeeCard from "./CoffeeCard";

const CoffeeCards = () => {
  const navigate = useNavigate(); // Initialize navigate
  const data = useLoaderData();
  const { category } = useParams();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    if (data) {
      if (category) {
        const filterByCategory = data.filter(
          (coffee) => coffee.category === category
        );
        setCoffees(filterByCategory);
      } else {
        setCoffees(data.slice(0, 6)); // Show only the first 6 items by default
      }
    }
  }, [category, data]);

  return (
    <div>
      <h1 className="text-3xl font-bold my-4">Coffee Card: {coffees.length}</h1>
      <div className="grid my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coffees.map((coffee, idx) => (
          <CoffeeCard key={idx} coffee={coffee} />
        ))}
      </div>
      <button className="btn btn-warning" onClick={() => navigate("/coffee")}>
        View All
      </button>
    </div>
  );
};

export default CoffeeCards;
