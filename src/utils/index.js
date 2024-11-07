import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Add a coffee to favorites in local storage
const addFavorite = (coffee) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favorites.some((fav) => fav.id === coffee.id)) {
    favorites.push(coffee);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    toast.success("Successfully added to favorites!");
    return true;
  } else {
    toast.error("This coffee is already in favorites!");
    return false;
  }
};

export { addFavorite };
