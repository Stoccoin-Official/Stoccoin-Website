import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "./scrollButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faBitcoin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Subscription successful!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <hr className="border-gray-700 my-8" />
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">About Us</h2>
            <p className="text-gray-600 leading-loose" style={{ maxWidth: "300px" }}>
              Discover our mission to provide real-time market data and curated news feeds for stocks and cryptocurrencies. <br /> Stay informed and make confident investment decisions with our comprehensive resources.
            </p>

          </div>

          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">Follow Us</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/stoccoin/"
                  target="blank"
                  className="text-gray-600 hover:text-black flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-indigo-500 text-3xl mr-2"
                  />
                  Instagram
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com/stoccoinco"
                  target="blank"
                  className="text-gray-600 hover:text-black flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-indigo-500 text-3xl mr-2"
                  />
                  Twitter
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/company/stoccoin/"
                  target="blank"
                  className="text-gray-600 hover:text-black flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="text-indigo-500 text-3xl mr-2"
                  />
                  LinkedIn
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.kooapp.com/profile/stoccoin/"
                  target="blank"
                  className="text-gray-600 hover:text-black flex flex-row items-center">
                  <img
                    src="/koo-icon.svg"
                    alt="koo"
                    height={24}
                    width={24}
                    className=" text-indigo-500 text-3xl mr-3"
                  />
                  Koo
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://github.com/Stoccoin-Official/Stoccoin-Website"
                  target="blank"
                  className="text-gray-600 hover:text-black flex flex-row items-center">
                  <img
                    src="/github.svg"
                    alt="github"
                    height={24}
                    width={24}
                    className=" text-indigo-500 text-3xl mr-3"
                  />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">Newsletter</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-200 rounded-md py-2 px-3 text-gray-900 w-full mb-2 duration-200 ease-out focus:outline-gray-900"
              />
              <br />
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 rounded py-2 px-4 text-white w-full duration-200 ease-out">
                Subscribe
              </button>
            </form>
            <br />
            <p className="text-gray-500 text-center">
          &copy; 2023 Stoccoin. All rights reserved.
        </p>
          </div>
        </div>
        <br />
        
        <ScrollToTopButton />
      </div>
      <ToastContainer />
    </footer>
  );
}

export default Footer;
