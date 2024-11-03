import React from "react";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center mx-auto  my-10">
      <h1 className="text-3xl font-bold my-2">{title}</h1>
      <p className="opacity-60">{subtitle}</p>
    </div>
  );
};

export default Heading;
