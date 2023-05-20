import React from "react";
import style from "../Custom.module.css";
const Footer = () => {
  return (
    <div>
      <div style={{ backgroundColor: "#1A8880" }}>
        <footer className=" pt-4 pb-8 xl:pt-8 lg:px-64">
          <div className="  dark:text-gray-300">
            <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
              <li className="w-1/2 md:w-1/3 lg:w-1/5">
                <div className="text-start">
                  <h2 className="text-white dark:text-gray-200 text-md mb-4">
                    About PSH
                  </h2>
                  <ul className={style.footer_li}>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Our Story</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Our Team</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Our Service</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Testimonials</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/5">
                <div className="text-start">
                  <h2 className="text-white dark:text-gray-200 text-md uppercase mb-4">
                    Rooms Category
                  </h2>
                  <ul className={style.footer_li}>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Standard Room</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Deluxe Room</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Executive Room</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Premium Room</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Family Room</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/5">
                <div className="text-start">
                  <h2 className="text-white dark:text-gray-200 text-md uppercase mb-4">
                    Bookings
                  </h2>
                  <ul className={style.footer_li}>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Book Now</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Room Availability</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Reservation Policies</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Discount and Offers</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/5">
                <div className="text-start">
                  <h2 className="text-white dark:text-gray-200 text-md uppercase mb-4">
                    Bookings
                  </h2>
                  <ul className={style.footer_li}>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Book Now</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Room Availability</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Reservation Policies</a>
                    </li>
                    <li className="mb-4  duration-200 hover:text-gray-800 dark:hover:text-white">
                      <a href="#">Discount and Offers</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="w-1/2 md:w-1/3 lg:w-1/5">
                <div className="text-start">
                  <h2 className="text-white dark:text-gray-200 text-md uppercase mb-4">
                    Connect with us
                  </h2>
                  <div className="flex mx-auto">
                    <i className="fa-brands fa-youtube text-white text-3xl"></i>
                    <i className="fa-brands fa-facebook text-white text-3xl mx-5"></i>
                    <i className="fa-brands fa-linkedin text-white text-3xl"></i>
                    <i className="fa-brands fa-twitter text-white text-3xl ms-5"></i>
                  </div>
                  <div className="mt-12">
                    <img src="https://i.ibb.co/Pg69RP3/app.png" alt="" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </footer>
        <div
          className="text-center   flex items-center justify-center text-white h-24"
          style={{ background: "#166F68" }}
        >
          Copyright © 2022 Raynative.com. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
