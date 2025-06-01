import React from "react";
import Navbar from "./components/Navbar";
import Categories from "./components/Categories";

function App() {
  return (
    <div className="mx-auto lg:max-w-[90rem]">
      <Navbar />
      <Categories />
    </div>
  );
}

export default App;
