import React from "react";
import wishes from "../../assets/image/wishes.png";

const Wishes = () => {
  return (
    <section className="py-16 xl:py-24 px-6">
      <div className="max-w-5xl mx-auto bg-[#E53945] rounded-[30px] px-6 md:px-10 xl:px-16 py-10">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-10">
          <div className="text-center xl:text-left">
            <h2 className="text-white text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-8">
              Send Good <br />
              Wishes!
            </h2>
            <input type="text" placeholder="Write your message" className="w-full max-w-[320px] h-12 rounded-full px-5 outline-none bg-white text-gray-600"/>
            <button className="block w-full max-w-[320px] mt-4 bg-[#2B252A] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
              Send Message
            </button>
          </div>
          <div>
            <img src={wishes} alt="Christmas Letter" className="w-[220px] md:w-[280px] xl:w-[320px]"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wishes;