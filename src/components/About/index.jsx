import React from "react";
import About1 from "../../assets/image/about_1.png";
import About2 from "../../assets/image/adout_2.png";
import About3 from "../../assets/image/adout_3.png";

const About = () => {
  const items = [
    {
      img: About1,
      title: "Surprise gifts",
      desc: "They are the best gifts there is.",
    },
    {
      img: About2,
      title: "Ornaments",
      desc: "Give a moment to decorate",
    },
    {
      img: About3,
      title: "Lots of love",
      desc: "Give away feelings that last forever.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 xl:px-0 py-20 xl:py-28">
      <h2 className="text-3xl xl:text-5xl font-bold text-center text-[#2E2E2E] dark:text-white mb-14 xl:mb-20">
        Start Giving This <br />
        Christmas
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center xl:px-4">
            <img src={item.img} alt={item.title} className="w-24 h-24 xl:w-36 xl:h-36 object-contain mb-6 xl:mb-8 hover:scale-110 transition duration-300"/>
            <h3 className="text-xl xl:text-3xl font-semibold text-[#2E2E2E] dark:text-white mb-3">
              {item.title}
            </h3>
            <p className="text-sm xl:text-lg text-gray-500 dark:text-gray-400 max-w-[220px] xl:max-w-[260px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;