import React from 'react';
import { useTranslation } from 'react-i18next';

function Accordion() {

  const { t } = useTranslation()

  return (
    <section className="relative pt-20 pb-20 bg-blueGray-50 overflow-hidden">
      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src="flaro-assets/images/faqs/gradient.svg"
        alt=""
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-5 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
            {t("Have any questions?")}
          </p>
          <h2 className="mb-8 text-4xl md:text-8xl xl:text-4xl text-center font-bold font-heading tracking-px-n leading-none">
            {t("Frequently Asked Questions")}
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            <div className="w-full p-1">
              <a href="#">
                <div className="py-7 px-8 bg-white bg-opacity-60 border-2 border-indigo-600 rounded-2xl shadow-10xl">
                  <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                      <h3 className="mb-4 text-lg font-semibold leading-normal">
                        {t("Do you provide any free plan?")}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {t("Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.")}
                      </p>
                    </div>
                    <div className="w-auto p-2">
                      <svg
                        className="relative top-1"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                          stroke="#4F46E5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-1">
              <a href="#">
                <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                  <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                      <h3 className="text-lg font-semibold leading-normal">
                        {t("How to claim your 25% discount offer?")}
                      </h3>
                    </div>
                    <div className="w-auto p-2">
                      <svg
                        className="relative top-1"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.25 6.75L9 12L3.75 6.75"
                          stroke="#18181B"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-1">
              <a href="#">
                <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                  <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                      <h3 className="text-lg font-semibold leading-normal">
                        {t("What’s your refund policy?")}
                      </h3>
                    </div>
                    <div className="w-auto p-2">
                      <svg
                        className="relative top-1"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.25 6.75L9 12L3.75 6.75"
                          stroke="#18181B"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full p-1">
              <a href="#">
                <div className="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                  <div className="flex flex-wrap justify-between -m-2">
                    <div className="flex-1 p-2">
                      <h3 className="text-lg font-semibold leading-normal">
                        {t("How to get support for the product?")}
                      </h3>
                    </div>
                    <div className="w-auto p-2">
                      <svg
                        className="relative top-1"
                        width={18}
                        height={18}
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.25 6.75L9 12L3.75 6.75"
                          stroke="#18181B"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-center font-medium">
            <span>{t("Still have any questions?")} </span>
            <a
              className="font-semibold text-indigo-600 hover:text-indigo-700"
              href="#"
            >
              {t("Contact us")}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
export default Accordion;