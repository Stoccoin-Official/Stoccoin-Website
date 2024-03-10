import React, { useState } from "react";

function Accordion() {
  const faq = [
    {
      que: "Do you have free plans?",
      ans: "Yea we have free plans",
    },
    {
      que: "Do you have free plans?",
      ans: "Yea we have free plans",
    },
    {
      que: "Do you have free plans?",
      ans: "Yea we have free plans",
    },
    {
      que: "Do you have free plans?",
      ans: "Yea we have free plans",
    },
  ];

  return (
    <section className="relative pt-20 pb-20 lg:pt-2.5 lg:pb-2.5 bg-blueGray-50 overflow-hidden">
      <img
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        src="flaro-assets/images/faqs/gradient.svg"
        alt=""
      />
      <div className="relative z-10 container px-4 mx-auto">
        <div className="md:max-w-4xl mx-auto">
          <p className="mb-5 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">
            Have any questions?
          </p>
          <h2 className="mb-8 text-4xl md:text-8xl xl:text-4xl text-center font-bold font-heading tracking-px-n leading-none dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {faq.map((member, index) => (
              <QnA key={index} faq={member} />
            ))}
          </div>
          <p className="text-gray-600 text-center font-medium dark:text-cyan-400">
            <span>Still have any questions? </span>
            <a
              className="font-semibold text-indigo-600 hover:text-indigo-700"
              href="#"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
function QnA({ faq }) {
  const [show, setshow] = useState(false);
  return (
    <div className="w-full p-1">
      <div className="QnA" onClick={() => setshow(!show)}>
        <div
          className={`py-7 px-8 bg-white dark:bg-slate-800 bg-opacity-60 border-2 rounded-2xl shadow-10xl ${show ? " border-indigo-600" : ""}`}
        >
          <div className="flex flex-wrap justify-between -m-2">
            <div className="flex-1 p-2">
              <h3 className="dark:text-cyan-100 text-lg font-semibold leading-normal">
                {faq.que}
              </h3>
              <p
                className={`text-gray-600 font-medium mt-4 dark:text-cyan-400 ${show ? "" : "hidden"}`}
              >
                {faq.ans}
              </p>
            </div>
            <div className="w-auto p-2">
              <svg
                className={`relative top-1 ${show ? "" : "hidden"}`}
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
              <svg
                className={`relative top-1 ${show ? "hidden" : ""}`}
                width={20}
                height={20}
                viewBox="0 0 20 20"
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
      </div>
    </div>
  );
}

export default Accordion;
