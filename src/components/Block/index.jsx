import React from "react";
import block from "../../assets/image/Block.png";

const Block = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 xl:px-0 py-16 xl:py-24">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-center">
        <div className="flex justify-center">
          <img src={block} alt="Christmas Fireplace" className="w-full max-w-[320px] md:max-w-[450px] xl:max-w-[520px] object-contain"/>
        </div>
        <div className="text-center xl:text-left">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight text-[#2E2E2E] dark:text-white">
            Celebrate With A <br />
            Lot Of Love
          </h2>
          <p className="mt-6 text-base md:text-lg xl:text-xl text-gray-600 dark:text-gray-400 leading-7 xl:leading-8 max-w-lg mx-auto xl:mx-0">
            In this holidays, celebrate with much love and peace, offering
            many blessings to our loved ones, friends and neighbors, wishing
            them a good Christmas message.
          </p>
          <button className="mt-8 bg-red-600 hover:bg-red-500 text-white font-medium px-8 py-4 xl:px-10 xl:py-5 rounded-full transition duration-300">
            Send Good Wishes
          </button>
        </div>
      </div>
    </section>
  );
};

export default Block;