import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
        <form className="flex flex-col items-start p-4 px-6 gap-6 text-lg">
          <h2 className="mx-auto text-2xl md:text-2xl font-semibold">
            Signup to our platform
          </h2>
          <div className="w-full flex flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <label for="firstName">First Name</label>
              <input
                name="firstName"
                placeholder="Jhon"
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
            </div>
            <div className="flex flex-col items-start gap-2">
              <label for="lastName">Last Name</label>
              <input
                name="lastName"
                placeholder="Doe"
                className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <label for="username">Username</label>
            <input
              name="username"
              placeholder="jhon007"
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
          </div>
          <div className="w-full flex flex-col items-start gap-2">
            <label for="signupEmail">Your Email</label>
            <input
              name="signupEmail"
              placeholder="jhon@xyz.com"
              className="w-[100%] bg-slate-100 py-2 px-4 focus:outline-indigo-500"
            />
          </div>
          <div className="w-full flex flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-start gap-2">
              <label for="singupCreatePassword">Create Password</label>
              <input
                name="singupCreatePassword"
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
            Signup to our platform
          </button>
        </form>
      </Modal>
    </div>
  );
}
