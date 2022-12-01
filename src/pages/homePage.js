import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
  const balance = useSelector((state) => state.balance);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Balance is {balance}</h2>
    </div>
  );
};

export default HomePage;
