import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard";
import CoffeeCards from "../components/CoffeeCards";
import CoffeeDetails from "../components/CoffeeDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:category",
            element: <CoffeeCards />,
            loader: () => fetch("../coffees.json"),
          },
        ],
      },
      {
        path: "/coffee",
        element: <Coffee />,
        loader: () => fetch("../coffees.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: () => fetch("../coffees.json"),
      },
    ],
  },
]);

export default routes;
