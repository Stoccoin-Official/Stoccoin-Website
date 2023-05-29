import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

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

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 "
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to={"/"}>
              <div className="-m-1.5 p-1.5">
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
          <div className="hidden lg:flex lg:gap-x-12">
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
            <a
              href="#"
              className="inline-block px-4 py-2 text-sm font-semibold leading-6 text-white transition-all duration-300 bg-gray-900 rounded hover:bg-indigo-500 hover:text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
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
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
