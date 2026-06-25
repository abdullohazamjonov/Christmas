import React from "react";
import hero from "../../assets/image/hero.png";

const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 xl:px-0 py-12 md:py-16 xl:py-24">
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10 xl:gap-20">
        <div className="order-1">
          <img src={hero} alt="Christmas Tree" className="w-full max-w-[320px] md:max-w-[450px] xl:max-w-xl mx-auto"/>
        </div>
        <div className="order-2 text-center xl:text-left">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-[#2E2E2E] dark:text-white">
            Merry Christmas and <br />
            Happy New Year!
          </h1>
          <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto xl:mx-0">
            Christmas and a new year is about to begin,
            all good wishes and successes.
          </p>
          <button className="mt-8 bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 xl:px-10 xl:py-5 rounded-full transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;