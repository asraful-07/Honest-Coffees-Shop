import React from "react";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {
  const { id, name, image, category, popularity, origin, rating } = coffee;

  return (
    <Link to={`/coffee/${id}`}>
      <div className="bg-white rounded-lg shadow-lg p-5 w-full max-w-xs mx-auto transition-transform transform hover:scale-105">
        <img
          src={image}
          alt={`${name} coffee`}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 text-sm mb-2">Category: {category}</p>
        <h4 className="text-sm font-medium mb-2">
          Origin: {origin || "Unknown"}
        </h4>
        <p className="text-gray-600 text-sm mb-2">Popularity: {popularity}</p>
        <p className="text-yellow-500 text-sm mb-2">Rating: {rating} ★</p>
        <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg shadow hover:bg-yellow-600 focus:outline-none">
          View Details
        </button>
      </div>
    </Link>
  );
};

export default CoffeeCard;
