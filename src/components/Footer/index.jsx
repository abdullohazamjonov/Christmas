import React from "react";
import logo_white from "../../assets/image/logo_white.svg";
import logo_dark from "../../assets/image/logo_dark.svg";
import google_play from "../../assets/image/google_play.svg";
import app_store from "../../assets/image/app_store.svg";
import footer1 from "../../assets/image/footer_1.svg";
import footer2 from "../../assets/image/footer_2.svg";
import { useDarkMode } from "../../hooks/useDarkMode";

const Footer = () => {
  const [theme] = useDarkMode();

  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col xl:grid xl:grid-cols-4 gap-10">
          <div>
            <img src={theme === "light" ? logo_white : logo_dark} alt="Christmas Logo" className="mb-5"/>
            <p className="text-black dark:text-gray-300 leading-7">
              This Christmas give
              <br />
              a lot of love
            </p>
          </div>
          <div>
            <h3 className="text-black dark:text-white text-xl font-bold mb-4">
              Our Services
            </h3>
            <ul className="space-y-3 text-black dark:text-white ">
              <li>Pricing</li>
              <li>Discounts</li>
              <li>Shipping mode</li>
            </ul>
          </div>
          <div>
            <h3 className="text-black dark:text-white  text-xl font-bold mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-black dark:text-white ">
              <li>FAQs</li>
              <li>Support center</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="text-black dark:text-white text-xl font-bold mb-4">
              Available On
            </h3>
            <div className="flex flex-col gap-3">
              <li><a href=""><img src={google_play} alt="" className="w-32"/></a></li>
              <li><a href=""><img src={app_store} alt="" className="w-32"/></a></li>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-16 text-sm">
          © Bedimcode. All rights reserved
        </p>
      </div>
      <img src={footer1} alt="" className="absolute right-1 top-44 xl:left-10 w-20 xl:w-28" />
      <img src={footer2} alt="" className="absolute right-4 bottom-20 w-20 xl:w-28"/>
    </footer>
  );
};

export default Footer;