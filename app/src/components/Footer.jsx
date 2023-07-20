import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "./scrollButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BsGithub, BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram, AiFillMail } from "react-icons/ai";
import { koo, koo2 } from '../assets';


function Footer() {

  const [hover, setHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Subscription successful!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };
  return (
    <footer className="bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <hr className="border-gray-700 my-8" />
        <div className="md:flex-row justify-center items-center flex md:justify-around flex-col p-2 md:items-start md:1/4">
          <div className="flex flex-col justify-center items-center gap-2 md:justify-start md:items-start md:1/4">
            <Link to="/">
              <img
                src='./logo.svg'
                alt="logo"
                height={50}
                width={50}
                className="text-indigo-500 text-3xl mr-3 hover:transform hover:scale-110 transition duration-300 ease-in-out"
              />
            </Link>
            <h1 className="text-6xl font-sans font-extrabold text-black dark:text-cyan-100 mb-4 text-center">Stoccoin</h1>
            <p className="font-semibold font-sans text-center md:text-start w-full md:w-96 dark:text-cyan-400">
              Discover our mission to provide real-time market data and curated news feeds for stocks and cryptocurrencies. <br /> Stay informed and make confident investment decisions with our comprehensive resources.
            </p>
          </div>

          <div className="flex md:flex-col md:mt-0 mt-4  md:1/4 justify-start text-left items-center gap-6 md:items-start">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-cyan-100 mb-4">Follow Us</h2>
            <div className="list-none flex gap-6 md:grid grid-cols-2">
              <div className="mb-2">
                <Link to="https://www.instagram.com/stoccoin/" target="_blank">
                  <AiFillInstagram title="Instagram" size={30} className="fill-gray-700 hover:fill-red-600 hover:transform hover:scale-125 transition-all duration-200 ease-in-out" />
                </Link>
              </div>
              <div className="mb-2">
                <Link to="https://twitter.com/stoccoinco" target="_blank">
                  <BsTwitter title="Twitter" size={30} className="fill-gray-700 hover:fill-[#00acee] hover:transform hover:scale-125 transition-all duration-200 ease-in-out" />
                </Link>
              </div>
              <div className="mb-2">
                <Link to="https://www.linkedin.com/company/stoccoin/" target="_blank">
                  <BsLinkedin size={30} title="Linkedin" className="fill-gray-700 hover:fill-[#0A66C2] hover:transform hover:scale-125 transition-all duration-200 ease-in-out" />
                </Link>
              </div>
              <div className="w-[28px]">
                <Link to="https://www.kooapp.com/profile/stoccoin/" target="_blank">
                  {
                    hover
                      ?
                      <img src={koo2} title="Koo" alt="koo-icon" className=" hover:transform hover:scale-125 transition-all duration-200 ease-in-out" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} />
                      :
                      <img src={koo} title="Koo" alt="koo-icon" className=" hover:transform hover:scale-125 transition-all duration-200 ease-in-out" onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)} />
                  }
                </Link>
              </div>
              <div className="mb-2">
                <Link to="https://github.com/Stoccoin-Official/Stoccoin-Website" target="_blank">
                  <BsGithub title="Github" size={30} className="fill-gray-700 hover:fill-[black] dark:hover:fill-white hover:transform hover:scale-125 transition-all duration-200 ease-in-out" />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:w-1/4 w-full px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-3xl font-bold text-slate-800 mb-4 dark:text-cyan-100">Newsletter</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col">
                <AiFillMail className="relative top-[30px] ml-2 text-gray-700" size={20} />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-200 rounded-md py-2 px-3 text-gray-900 w-[110%] mb-2 duration-200 ease-in-out focus:outline-gray-900 pl-10"
                />
              </div>
              <br />
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 rounded py-2 px-4 text-white w-[110%] duration-200 ease-out">
                Subscribe
              </button>
            </form>
            <br />
            <p className="text-gray-500 text-center font-semibold w-[110%]">
              &copy; 2023 Stoccoin. All rights reserved.
            </p>
          </div>
        </div>
        <ScrollToTopButton />
      </div>
      <ToastContainer />
    </footer>
  );
}

export default Footer;
