import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addFavorite } from "../utils";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const [coffee, setCoffee] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);

    // Initialize favorite status based on local storage
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((fav) => fav.id === id));
  }, [data, id]);

  if (!coffee) {
    return <p>Loading...</p>;
  }

  const {
    name,
    image,
    category,
    ingredients,
    nutrition_info,
    origin,
    type,
    description,
    making_process,
    rating,
    popularity,
  } = coffee;

  // Toggle favorite status
  const handleFavoriteClick = () => {
    const success = addFavorite(coffee);
    if (success) setIsFavorite(true); // Set favorite status only if successfully added
  };

  return (
    <div className="coffee-details p-4">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <img src={image} alt={name} className="w-full h-auto mb-4 rounded-lg" />
      <p>
        <strong>Category:</strong> {category}
      </p>
      <p>
        <strong>Origin:</strong> {origin}
      </p>
      <p>
        <strong>Type:</strong> {type}
      </p>
      <p>
        <strong>Rating:</strong> {rating}
      </p>
      <p>
        <strong>Popularity:</strong> {popularity}
      </p>
      <p>
        <strong>Description:</strong> {description}
      </p>
      <p>
        <strong>Making Process:</strong> {making_process}
      </p>

      {/* Favorite Button */}
      <button
        onClick={handleFavoriteClick}
        className={`px-4 py-2 mb-4 rounded-lg shadow my-6 ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>

      <h3 className="text-xl font-semibold mt-4">Ingredients</h3>
      <ul className="list-disc list-inside">
        {ingredients.map((ingredient, idx) => (
          <li key={idx}>{ingredient}</li>
        ))}
      </ul>

      <div>
        <h3 className="text-xl font-semibold mt-4">Nutrition Info</h3>
        <p>Calories: {nutrition_info.calories}</p>
        <p>Fat: {nutrition_info.fat}g</p>
        <p>Carbohydrates: {nutrition_info.carbohydrates}g</p>
        <p>Protein: {nutrition_info.protein}g</p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
