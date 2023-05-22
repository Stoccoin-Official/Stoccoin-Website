import { React, useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      message,
    };

    const res = await fetch("http://localhost:3000/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
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
            <span className="text-sm font-bold uppercase text-gray-600 float-left">
              Full Name
            </span>
            <input
              className="focus:shadow-indigo-500 outline-none mt-2 w-full rounded-md bg-gray-200 p-2 text-gray-900 border-2 border-gray-200 focus:border-indigo-500 duration-100"
              type="text"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600 float-left">
              Email
            </span>
            <input
              className="focus:shadow-indigo-500 outline-none mt-2 w-full rounded-md bg-gray-200 p-2 text-gray-900 border-2 border-gray-200 focus:border-indigo-500 duration-100"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600 float-left">
              Message
            </span>
            <textarea
              className="focus:shadow-indigo-500 mt-2 h-32 w-full rounded-md bg-gray-200 p-2 text-gray-900 border-2 border-gray-200 focus:border-indigo-500 duration-100 outline-none"
              defaultValue={""}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <button className="focus:shadow-outline w-full rounded-lg bg-indigo-500 p-3 text-sm font-bold uppercase tracking-wide text-gray-100 focus:outline-none border-2 border-indigo-500 hover:bg-white hover:text-indigo-500 ease-out duration-200">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
