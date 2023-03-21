import React from 'react';

function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-8">
        <hr className="border-gray-700 my-8" />
        <div className="flex flex-wrap justify-center">
            
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">About Us</h2>
            <p className="text-gray-400 leading-loose" style={{maxWidth: "300px"}}>We're a web app for trading stocks and crypto with real-time market data and news feeds to help you make informed investment decisions.</p>
          </div>
          
          <div className="w-full md:w-1/3 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">Follow Us</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram-f mr-2"></i>Instagram</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter mr-2"></i>Twitter</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram mr-2"></i>LinkedIn</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-3 mb-3 md:mb-0 text-left">
            <h2 className="text-xl font-bold text-black mb-4">Newsletter</h2>
            <form>
              <input type="email" placeholder="Enter your email" className="bg-gray-700 rounded py-2 px-3 text-gray-200 w-full mb-2" />
              <button type="submit" className="bg-gray-600 hover:bg-gray-700 rounded py-2 px-4 text-white w-full">Subscribe</button>
            </form>
          </div>
        </div>
        <br/>
        <p className="text-gray-500 text-center">&copy; 2023 Stoccoin. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
