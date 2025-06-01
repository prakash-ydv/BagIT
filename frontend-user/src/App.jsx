import React from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";
import FlashDeals from "./components/FlashDeals";

function App() {
  return (
    <div className="mx-auto lg:max-w-[90rem]">
      <Navbar />
      <Categories />
      <FlashDeals />
    </div>
  );
}

export default App;
