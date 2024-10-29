import React from "react";
import MainCard from "./MainCard";
import Card from "./Card";

const Main = () => {
  return (
    <div className="container mt-4">
      <MainCard />
      <div className="row">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Main;
