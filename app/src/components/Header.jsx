export default function Header() {
  return (
    <div className="bg-white dark:bg-slate-900">
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"></div>
        <div className="container mx-auto flex flex-wrap-reverse justify-center">
          <div className="md:w-1/2 max-w-xl w-full flex justify-center items-center my-1.5">
            <div className="md:text-left text-center">
              <h1
                className="font-extrabold tracking-tight text-gray-900 text-5xl dark:text-cyan-100"
                style={{ fontFamily: "'Open Sans Extra Bold', sans-serif" }}
              >
                Stoccoin
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 lg:mt-0 dark:text-cyan-400">
                Learn-Invest-Repeat
              </p>
              <div className="mt-10 flex items-center md:justify-left gap-x-6 w-60 mx-auto md:mx-0">
                <a
                  href="#"
                  className="rounded-md z-0 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900 dark:text-cyan-50"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ float: "right", minWidth: "300px" }}
            className="md:w-1/2 md:flex items-center my-1.5 md:max-w-xl max-w-md hidden pt-50"
          >
            <img
              src="./header.svg"
              alt="stoccoin-homepage-header"
              style={{
                height: "25rem",
                maxHeight: "50rem",
                maxWidth: "35rem",
                width: "100%",
              }}
            />
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"></div>
      </div>
    </div>
  );
}
