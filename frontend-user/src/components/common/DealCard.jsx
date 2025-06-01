import React from "react";

function DealCard(props) {
  return (
    <div className="flex flex-col justify-between gap-2 p-2 relative h-78 w-50 border-blue-100 border-1 rounded-xl">
      <span className="absolute top-2 left-0 bg-orange-600 text-white text-xs rounded-2xl px-1">
        -{props.discount}%
      </span>

      {/* image */}
      <div className=" h-44 w-42 mx-auto overflow-hidden">
        <img
          src={props.src}
          alt={props.title}
        />
      </div>

      <h1 className="text-sm turncate">
       {props.title}
      </h1>

      <div className="flex gap-2 items-center">
        <span className="font-bold text-lg">Rs. {props.finalPrice}</span>
        <span className="line-through text-sm text-zinc-600">Rs. {props.originalPrice}</span>
      </div>

      <span>

      </span>

      <div className="w-full flex justify-between text-xs">
        <span className="text-orange-600">{props.sold} sold</span>
        <span className="text-zinc-600">{props.available} Available</span>
      </div>
    </div>
  );
}

export default DealCard;
