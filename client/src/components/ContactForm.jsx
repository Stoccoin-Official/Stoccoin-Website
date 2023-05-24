import { React, useState } from "react";
import { sendMail } from "./helpers/apiCalls";

export default function App() {

  const [formData, setformData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendMail(formData)
  };

  return (
    <div
      className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg bg-white-100 px-8 py-16 text-gray-900 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 pt-55 pb-20"
      id="contact"
    >
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Get in Touch
          </h2>
          <div className="mt-8 text-gray-700">
            Reach out to us with any questions or feedback you may have
          </div>
        </div>
        <div className="mt-8 text-center">
          <img src="./contactus.svg" alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div>
            <span className="text-sm font-bold uppercase text-gray-600">
              Full Name
            </span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="text"
              placeholder=""
              onChange={(e) => setformData({
                ...formData,
                name: e.target.value,
              })}
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              Email
            </span>
            <input
              className="focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="email"
              onChange={(e) => setformData({
                ...formData,
                email: e.target.value,
              })}
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600">
              Message
            </span>
            <textarea
              className="focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              defaultValue={""}
              onChange={(e) => setformData({
                ...formData,
                message: e.target.value,
              })}
            />
          </div>
          <div className="mt-8">
            <button className="focus:shadow-outline w-full rounded-lg bg-indigo-500 p-3 text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
