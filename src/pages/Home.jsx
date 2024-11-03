import React from "react";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div className="container mx-auto">
      {/* Banner section code */}
      <Banner />
      {/* Heading section code */}
      <Heading
        title="This is a title"
        subtitle="
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis consequuntur amet placeat magnam iure nam tempora voluptas beatae veniam quia."
      />
      <Categories categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
