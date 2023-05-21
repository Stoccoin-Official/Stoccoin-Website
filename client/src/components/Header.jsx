export default function Example() {
  
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          
          </div>
            <div className="container mx-auto flex">
              <div className="max-w-xl pt-20 pl-10 pr-60">
                <div className="text-left">
                  <h1
                    className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl"
                    style={{ fontFamily: "'Open Sans Extra Bold', sans-serif" }}
                  >
                    Stoccoin
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Learn-Invest-Repeat
                  </p>
                  <div className="mt-10 flex items-center justify-left gap-x-6">
                    <a
                      href="#"
                      className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Get started
                    </a>
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
              <div pt-50 style={{ float: 'right' }}>
                <img src="./header.svg" alt="your-image-description" style={{ maxHeight: '50rem', maxWidth: '35rem' }}/>
              </div>
            </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">  
        </div>
      </div>
    </div>
  );
}
