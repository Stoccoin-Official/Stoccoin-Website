import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillMail, AiFillEyeInvisible, AiFillGoogleCircle, AiFillFacebook, AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import Modal from "./Modal";

const navigation = [
  { name: "Dashboard", route: "/Dashboard" },
  { name: "Stocks", route: "/Stocks" },
  { name: "Cryptocurrencies", route: "/Cryptocurrencies" },
  { name: "News", route: "/News" },
  { name: "NFT", route: "/NFT" },
  { name: "Trade", route: "/Trade" },
  { name: "Institutional", route: "/Institutional" },
  { name: "Derivatives", route: "/Derivatives" },
  { name: "Support", route: "/Support" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const [showSignup, setshowSignup] = useState(false);
  const [showResetPassword, setshowResetPassword] = useState(false);
  const [createPasswordValue, setcreatePasswordValue] = useState("");
  const [confirmPasswordValue, setconfirmPasswordValue] = useState("");

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1 ">
            <Link to={"/"}>
              <div className="-m-1.5 p-1.5 ">
                <span className="sr-only">Stoccoin</span>
                <img
                  className="h-8 w-auto"
                  src="./logo.svg"
                  alt="Stoccoin Logo"
                />
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <NavLink to={item.route}>
                <div
                  key={item.name}
                  // href={item.href}
                  className="nav text-sm font-semibold leading-6 text-gray-900 relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-indigo-600 after:rounded-full after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
                >
                  {item.name}
                </div>
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <button
              className="text-sm font-semibold leading-6 text-gray-900 hover:bg-indigo-500 px-3 py-1 rounded-sm duration-200 ease-out hover:text-white"
              onClick={() => {
                setshowLogin(true);
              }}
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel
            className={`fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10`}
          >
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Stoccoin</span>
                <img className="h-8 w-auto" src="./logo.svg" alt="" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <div
                      key={item.name}
                      className="nav py-3 text-sm font-semibold leading-6 text-gray-900 relative w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-indigo-600 after:rounded-full after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center"
                    >
                      <NavLink to={item.route}>{item.name}</NavLink>
                    </div>
                  ))}
                </div>
                <div className="py-6">
                  <button
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setshowLogin(true);
                    }}
                  >
                    Log in
                  </button>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      {/* Login Modal */}
      <Modal
        isOpen={showLogin}
        closeModal={() => {
          setshowLogin(false);
        }}
      >
        <form className="flex flex-col items-start p-4 px-6 gap-6 text-lg">
          <h2 className="mx-auto text-2xl md:text-2xl font-semibold">
            Login in to our platform
          </h2>
          <div className="w-full flex flex-col items-start gap-2">
            <label for="loginEmail">Your Email</label>
            <input
              name="loginEmail"
              placeholder="name@company.com"
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <label for="loginPassword">Your Password</label>
            <input
              name="loginPassword"
              type="password"
              placeholder="*********"
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
          </div>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="flex flex-row justify-between items-center">
              <input type="checkbox" name="checkbox" className="h-4 w-4" />
              <label className="px-2" for="checkbox">
                {" "}
                Remember Me
              </label>
            </div>
            <a
              href="#"
              className="text-blue-700 hover:underline duration-300 ease-out"
              onClick={() => {
                setshowLogin(false);
                setshowResetPassword(true);
              }}
            >
              Forgot password?
            </a>
          </div>
          <button className="w-full bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out ">
            Login to your account
          </button>
          <div className="mx-auto">
            <p>
              Not Registered?{" "}
              <button
                className="text-blue-700 hover:underline duration-200 ease-out"
                onClick={() => {
                  setshowLogin(false);
                  setshowSignup(true);
                }}
              >
                Create Account
              </button>{" "}
            </p>
          </div>
        </form>
      </Modal>

      {/* Signup Modal */}
      <Modal
        isOpen={showSignup}
        closeModal={() => {
          setshowSignup(false);
        }}
      >
        <div className="flex justify-evenly w-[700px] items-center bg-cyan-200 p-4 gap-12 rounded-md shadow-xl">

          {/* left part */}
          <div className="flex flex-col justify-between gap-36 items-center">
            <div className="flex flex-col gap-4">
              <h1 className="font-extrabold text-6xl">Stoccoin</h1>
              <h2 className="font-semibold text-2xl font-sans">Welcome Back</h2>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="font-semibold text-purple-700 text-xl">Login using</p>
              <div className="flex gap-4 justify-center items-center">
                <AiFillGoogleCircle className="text-4xl hover:text-yellow-700 text-gray-700 transition-all duration-200 ease-in-out cursor-pointer hover:transform hover:scale-110" />
                <AiFillFacebook className="text-4xl hover:text-[#3b5998] text-gray-700 transition-all duration-200 ease-in-out cursor-pointer hover:transform hover:scale-110" />
                <AiFillTwitterCircle className="text-4xl hover:text-[#00acee] text-gray-700 transition-all duration-200 ease-in-out cursor-pointer hover:transform hover:scale-110" />
                <AiFillGithub className="text-4xl hover:text-black text-gray-700 transition-all duration-200 ease-in-out cursor-pointer hover:transform hover:scale-110" />
              </div>
            </div>
          </div>

          {/* right part */}
          <form className="flex flex-col justify-center items-start p-6 px-8 gap-6 text-lg bg-white rounded-md shadow-lg">
            <h2 className="mx-auto text-2xl md:text-2xl font-semibold">
              Signup to our platform
            </h2>
            <div className="w-[320px] flex items-center">
              <FaUserAlt className='w-[20px] h-[20px] text-cyan-600 absolute mt-2 ml-2 text-center' />
              <input
                name="fullname"
                placeholder="Full Name | John Doe"
                className="w-[100%] bg-slate-100 py-2 px-4 text-center focus:outline-indigo-500"
              />
            </div>
            <div className="w-[320px] flex flex-col items-start gap-2">
              <FaUserAlt className='w-[20px] h-[20px] text-cyan-600 absolute mt-3 ml-2 text-center' />
              <input
                name="username"
                placeholder="Username | john007"
                className="w-[100%] bg-slate-100 py-2 px-4 text-center focus:outline-indigo-500"
              />
            </div>
            <div className="w-[320px] flex flex-col items-start gap-2">
              <AiFillMail className='w-[20px] h-[20px] text-cyan-600 absolute mt-3 ml-2 text-center' />
              <input
                name="signupEmail"
                placeholder="Email | john@xyz.com"
                className="w-[100%] bg-slate-100 py-2 px-4 text-center focus:outline-indigo-500"
              />
            </div>
            <div className="w-[320px] flex flex-col items-start gap-2">
              <RiLockPasswordFill className='w-[20px] h-[20px] text-cyan-600 absolute mt-3 ml-2 text-center' />
              <input
                name="singupCreatePassword"
                type="password"
                placeholder="Create Password"
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500 text-center"
                onChange={(e) => {
                  setcreatePasswordValue(e.target.value);
                }}
              />
            </div>
            <div className="w-[320px] flex flex-col items-start gap-2">
              <RiLockPasswordFill className='w-[20px] h-[20px] text-cyan-600 absolute mt-3 ml-2 text-center' />
              <input
                name="signupConfirmPassword"
                type="password"
                placeholder="Confirm Password"
                className={
                  !confirmPasswordValue.length == 0 &&
                    confirmPasswordValue === createPasswordValue
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500 text-center"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500 text-center"
                }
                onChange={(e) => {
                  setconfirmPasswordValue(e.target.value);
                }}
              />
            </div>
            <button className="w-full bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out ">
              Signup to our platform
            </button>
          </form>
        </div>
      </Modal>

      {/* Reset Password Modal */}
      <Modal
        isOpen={showResetPassword}
        closeModal={() => {
          setshowResetPassword(false);
        }}
      >
        <form className="flex flex-col items-start p-4 px-6 gap-6 text-lg">
          <h2 className="mx-auto text-2xl md:text-2xl font-semibold">
            Reset Password
          </h2>
          <div className="w-full flex flex-col items-start gap-2">
            <label for="resetPasswordEmail">Your Email</label>
            <input
              name="resetPasswordEmail"
              placeholder="jhon@xyz.com"
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
          </div>
          <div className="w-full items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <label for="resetCreatePassword">Create Password</label>
              <input
                name="resetCreatePassword"
                type="password"
                placeholder="********"
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
                onChange={(e) => {
                  setcreatePasswordValue(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label for="signupConfirmPassword">Confirm Password</label>
              <input
                name="signupConfirmPassword"
                type="password"
                placeholder="********"
                className={
                  !confirmPasswordValue.length == 0 &&
                    confirmPasswordValue === createPasswordValue
                    ? "w-[100%] bg-slate-100 py-2 px-4 focus:outline-green-500"
                    : "w-[100%] bg-slate-100 py-2 px-4 focus:outline-red-500"
                }
                onChange={(e) => {
                  setconfirmPasswordValue(e.target.value);
                }}
              />
            </div>
          </div>
          <button className="w-full bg-indigo-600 px-4 py-2 rounded-md text-lg text-white hover:bg-indigo-800 duration-200 ease-out ">
            Reset Password
          </button>
        </form>
      </Modal>
    </div>
  );
}
