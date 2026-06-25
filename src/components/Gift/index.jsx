import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import gift1 from "../../assets/image/gift_1.svg";
import gift2 from "../../assets/image/gift_2.svg";
import gift3 from "../../assets/image/gift_3.svg";
import gift4 from "../../assets/image/gift_4.svg";
import gift5 from "../../assets/image/gift_5.svg";

const gifts = [
  {
    id: 1,
    image: gift1,
    price: "$15",
    name: "Gingerbread",
  },
  {
    id: 2,
    image: gift2,
    price: "$22",
    name: "Santa Claus Hat",
  },
  {
    id: 3,
    image: gift3,
    price: "$12",
    name: "Candy Stick",
  },
  {
    id: 4,
    image: gift4,
    price: "$48",
    name: "Christmas Tree",
  },
  {
    id: 5,
    image: gift5,
    price: "$35",
    name: "Snowman",
  },
];
const Gift = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 xl:px-0 py-16 xl:py-24">
      <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-center mb-12 xl:mb-16 text-[#2E2E2E] dark:text-white">
        Share A Gift
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10 xl:gap-16 justify-items-center">
        {gifts.map((gift) => (
          <div key={gift.id} className="relative w-full max-w-[200px] h-[240px] bg-white dark:bg-[#160d0d] rounded-2xl shadow-lg p-5 hover:-translate-y-1 transition">
            <FontAwesomeIcon icon={faHeart} className="absolute top-5 right-5 text-red-500 text-lg cursor-pointer"/>
            <img src={gift.image} alt={gift.name} className="w-[80px] md:w-[90px] mx-auto mt-3"/>
            <div className="mt-10">
              <h3 className="text-2xl md:text-3xl font-bold text-[#2E2E2E] dark:text-white">
                {gift.price}
              </h3>
              <p className="text-gray-500 mt-2">
                {gift.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gift;