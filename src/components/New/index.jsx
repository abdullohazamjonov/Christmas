import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import new1 from "../../assets/image/new_1.svg";
import new2 from "../../assets/image/new_2.svg";
import new3 from "../../assets/image/new_3.svg";

const gifts = [
  {
    id: 1,
    image: new1,
    price: "$18",
    name: "Christmas Wreath",
  },
  {
    id: 2,
    image: new2,
    price: "$95",
    name: "Reindeer",
  },
  {
    id: 3,
    image: new3,
    price: "$20",
    name: "Snow Globe",
  },
];

const New = () => {
  return (
    <section className="py-24">
      <h2 className="text-5xl font-bold text-center mb-16 dark:text-white">
        New Gifts
      </h2>

      {/* Desktop */}
      <div className="hidden xl:flex justify-center gap-14">
        {gifts.map((gift) => (
          <div
            key={gift.id}
            className="relative w-[250px] h-[280px] bg-white dark:bg-[#160d0d] rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-[150px] bg-red-500 rounded-b-[100px] flex items-center justify-center">
              <img
                src={gift.image}
                alt={gift.name}
                className="w-[110px]"
              />
            </div>

            <div className="text-center pt-4">
              <h3 className="text-3xl font-bold dark:text-white">
                {gift.price}
              </h3>

              <p className="text-gray-500 mt-1">{gift.name}</p>
            </div>

            <button className="absolute bottom-0 right-0 w-10 h-10 bg-red-500 rounded-tl-xl flex items-center justify-center">
              <FontAwesomeIcon
                icon={faHeart}
                className="text-white"
              />
            </button>
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className="xl:hidden px-4">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.1}
          centeredSlides={true}
        >
          {gifts.map((gift) => (
            <SwiperSlide key={gift.id}>
              <div className="relative mx-auto w-[250px] h-[280px] bg-white dark:bg-[#160d0d] rounded-xl shadow-lg overflow-hidden">
                <div className="h-[150px] bg-red-500 rounded-b-[100px] flex items-center justify-center">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-[110px]"
                  />
                </div>

                <div className="text-center pt-4">
                  <h3 className="text-3xl font-bold dark:text-white">
                    {gift.price}
                  </h3>

                  <p className="text-gray-500 mt-1">
                    {gift.name}
                  </p>
                </div>

                <button className="absolute bottom-0 right-0 w-10 h-10 bg-red-500 rounded-tl-xl flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white"
                  />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-2 mt-10">
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
          <span className="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>
    </section>
  );
};

export default New;