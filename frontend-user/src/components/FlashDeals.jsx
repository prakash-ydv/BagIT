import React from "react";
import { Timer } from "lucide-react";
import DealCard from "./common/DealCard";

function FlashDeals() {
  const dummyProducts = [
    {
      title: "Wireless Bluetooth Headphones",
      src: "https://i5.walmartimages.com/asr/183858fb-2bb5-4eb8-b26d-0abebdb1da13.b7f604429140c19276c2b2dc27a75ba9.jpeg",
      originalPrice: 1999,
      finalPrice: 1499,
      discount: "25%",
      sold: 120,
      available: 300,
    },
    {
      title: "Smart Fitness Watch",
      src: "https://static.vecteezy.com/system/resources/previews/013/826/401/original/y2k-flip-phone-pink-cute-phone-2000s-aesthetic-retro-nostalgia-vector.jpg",
      originalPrice: 2999,
      finalPrice: 2099,
      discount: "30%",
      sold: 80,
      available: 150,
    },
    {
      title: "Cotton Crew Neck T-shirt",
      src: "https://www.phonestablets.co.ke/wp-content/uploads/2023/02/Nothing-Phone-2.jpg",
      originalPrice: 799,
      finalPrice: 499,
      discount: "37%",
      sold: 250,
      available: 400,
    },
    {
      title: "USB-C Fast Charger Adapter",
      src: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/fe07ea12-01d5-4d33-be04-bea28ff68839.__CR0,0,970,600_PT0_SX970_V1___.jpg",
      originalPrice: 999,
      finalPrice: 749,
      discount: "25%",
      sold: 320,
      available: 500,
    },
    {
      title: "Stainless Steel Water Bottle",
      src: "https://i5.walmartimages.com/asr/56032e73-db49-4aeb-a3ef-ba4fc0f5abe2.3509d675dac200fcb417303924e17222.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
      originalPrice: 599,
      finalPrice: 449,
      discount: "25%",
      sold: 100,
      available: 200,
    },
    {
      title: "Gaming Mouse with RGB",
      src: "https://via.placeholder.com/150?text=Gaming+https://m.media-amazon.com/images/I/61hz18usRfL._AC_SX679_.jpg",
      originalPrice: 1599,
      finalPrice: 1199,
      discount: "25%",
      sold: 180,
      available: 250,
    },
    {
      title: "Laptop Stand Adjustable",
      src: "https://via.placeholder.com/150?text=Laptop+Stand",
      originalPrice: 1399,
      finalPrice: 999,
      discount: "29%",
      sold: 90,
      available: 180,
    },
    {
      title: "Classic Leather Wallet",
      src: "https://via.placeholder.com/150?text=Wallet",
      originalPrice: 1299,
      finalPrice: 899,
      discount: "31%",
      sold: 140,
      available: 220,
    },
    {
      title: "Noise Cancelling Earbuds",
      src: "https://via.placeholder.com/150?text=Earbuds",
      originalPrice: 2499,
      finalPrice: 1899,
      discount: "24%",
      sold: 300,
      available: 350,
    },
    {
      title: "Mini Portable Fan",
      src: "https://via.placeholder.com/150?text=Mini+Fan",
      originalPrice: 499,
      finalPrice: 349,
      discount: "30%",
      sold: 260,
      available: 320,
    },
  ];

  return (
    <div className="p-5">
      <div className="w-full flex items-center gap-15 justify-between md:justify-start">
        <h1 className="font-bold text-lg ">Flash Deals</h1>

        <span className="center bg-blue-50 p-1 px-2 rounded-xl gap-2">
          <Timer size={20} color="red" />
          <span className="text-sm font-semibold hidden md:block">
            Ends in
          </span>{" "}
          <span className="time-box">00</span>:
          <span className="time-box">00</span>:{" "}
          <span className="time-box">59</span>
        </span>
      </div>

      <div className="flex gap-5 mt-5 overflow-x-auto">
        {dummyProducts.map((item, index) => (
          <DealCard
            key={index}
            discount={item.discount}
            src={item.src}
            title={item.title}
            finalPrice={item.finalPrice}
            originalPrice={item.originalPrice}
            sold={item.sold}
            available={item.available}
          />
        ))}
      </div>
    </div>
  );
}

export default FlashDeals;
