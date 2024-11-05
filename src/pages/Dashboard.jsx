import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    // Retrieve favorites from local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setCoffees(favorites);
  }, []);

  return (
    <div>
      <Heading
        title="This is Dashboard Title"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium atque ad voluptatum quis quibusdam expedita error sequi dicta aliquam iure."
      />

      {/* Display favorite coffees */}
      <h2 className="text-2xl font-semibold my-4">Favorite Coffees</h2>
      {coffees.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffees.map((coffee, idx) => (
            <div key={idx} className="p-4 border rounded-lg shadow">
              <h3 className="text-xl font-bold">{coffee.name}</h3>
              <img
                src={coffee.image}
                alt={coffee.name}
                className="w-full h-auto my-2 rounded-lg"
              />
              <p>
                <strong>Category:</strong> {coffee.category}
              </p>
              <p>
                <strong>Origin:</strong> {coffee.origin}
              </p>
              <p>
                <strong>Rating:</strong> {coffee.rating}
              </p>
              <p>
                <strong>Popularity:</strong> {coffee.popularity}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite coffees added yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
