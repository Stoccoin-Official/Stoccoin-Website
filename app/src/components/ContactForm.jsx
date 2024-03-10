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
      className="mx-auto grid max-w-screen-xl grid-cols-1 gap-8 rounded-lg bg-white-100 px-8 py-16 dark:text-white text-gray-900 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 pt-55 pb-20"
      id="contact"
    >
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-4xl lg:pt-5 font-bold leading-tight lg:text-5xl">
            Get in Touch
          </h2>
          <div className="mt-8 text-gray-700 lg:text-base lg:mt-4 dark:text-cyan-300">
            Reach out to us with any questions or feedback
          </div>
        </div>
        <div className="mt-8 text-center">
          <img src="./contactus.svg" alt="" />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="">
          <div>
            <span className="text-sm font-bold uppercase text-gray-600 dark:text-cyan-200">
              Full Name
            </span>
            <input
              className="dark:bg-slate-800 dark:text-cyan-300 focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="text"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600 dark:text-cyan-200">
              Email
            </span>
            <input
              className="dark:bg-slate-800 dark:text-cyan-300 focus:shadow-outline mt-2 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-8">
            <span className="text-sm font-bold uppercase text-gray-600 dark:text-cyan-200">
              Message
            </span>
            <textarea
              className="dark:bg-slate-800 dark:text-cyan-300 focus:shadow-outline mt-2 h-32 w-full rounded-lg bg-gray-300 p-3 text-gray-900 focus:outline-none"
              defaultValue={""}
              onChange={(e) => setMessage(e.target.value)}
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
