import React from "react";
import { useTranslation } from 'react-i18next'
import ScrollToTopButton from "./scrollButton";


function Footer() {

  const { t } = useTranslation()

  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <hr className="border-gray-700 my-8" />
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">{t("About Us")}</h2>
            <p
              className="text-gray-600 leading-loose"
              style={{ maxWidth: "300px" }}
            >
              {t("We're a web app for trading stocks and crypto with real-time market data and news feeds to help you make informed investment decisions.")}
            </p>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">{t("Follow Us")}</h2>
            <ul className="list-none">
              <li className="mb-2">
                <a
                  href="https://www.instagram.com/stoccoin/"
                  target="blank"
                  className="text-gray-600 hover:text-black"
                >
                  <i className="fab fa-instagram-f"></i>{t("Instagram")}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://twitter.com/stoc_coin"
                  target="blank"
                  className="text-gray-600 hover:text-black"
                >
                  <i className="fab fa-twitter"></i>{t("Twitter")}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.linkedin.com/company/stoccoin/"
                  target="blank"
                  className="text-gray-600 hover:text-black"
                >
                  <i className="fab fa-instagram"></i>{t("LinkedIn")}
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://www.kooapp.com/profile/stoccoin/"
                  target="blank"
                  className="text-gray-600 hover:text-black"
                >
                  <i className="fab fa-instagram"></i>{t("Koo")}
                </a>
              </li>{" "}
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">{t("Newsletter")}</h2>
            <form>
              <input
                type="email"
                placeholder={t("Enter your email")}
                className="bg-gray-200 rounded-md py-2 px-3 text-gray-900 w-full mb-2 duration-200 ease-out focus:outline-gray-900"
              />
              <button
                type="submit"
                className="bg-gray-600 hover:bg-gray-700 rounded py-2 px-4 text-white w-full duration-200 ease-out"
              >
                {t("Subscribe")}
              </button>
            </form>
          </div>
        </div>
        <br />
        <p className="text-gray-500 text-center">
          &copy; {t("2023 Stoccoin. All rights reserved.")}
        </p>
        <ScrollToTopButton/>
      </div>
    </footer>
  );
}

export default Footer;
