import React from "react";
import {
  Gift,
  ChevronDown,
  Laptop,
  Smartphone,
  Headphones,
  House,
  Watch,
  Tv,
  Camera,
} from "lucide-react";

function Categories() {
  const category = [
    { icon: <Laptop size={20} />, name: "Electronics" },
    { icon: <Smartphone size={20} />, name: "Smartphones" },
    { icon: <Headphones size={20} />, name: "Audio" },
    { icon: <Camera size={20} />, name: "Camera" },
    { icon: <Watch size={20} />, name: "Wearables" },
    { icon: <Tv size={20} />, name: "TVs" },
    { icon: <House size={20} />, name: "Home" },
  ];

  return (
    <div className="w-full h-12 flex items-center justify-between text-sm border-b-1 border-zinc-300 px-5">
      <button className="center gap-2 px-5 h-10 md:w-68 border-1 border-zinc-300 rounded-md">
        All Categories <ChevronDown size={20} />
      </button>

      <div className="hidden md:flex items-center justify-between gap-8 overflow-x-scroll px-5 my-scroll-container ">
        {category.map((item, index) => (
          <span className="center gap-2 cursor-pointer">
            {item.icon} {item.name}
          </span>
        ))}
      </div>

      <button className="center md:w-68 gap-2 font-semibold px-5 text-purple-900">
        <Gift /> Today's Deals
      </button>
    </div>
  );
}

export default Categories;
