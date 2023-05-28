import React, { useEffect, useRef, useState } from "react";

function ScrollToTopButton() {
  const buttonRef = useRef(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      setShowButton(scrollPosition > 200); // Adjust the value (200) as per your requirement
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const button = buttonRef.current;

    if (button) {
      button.addEventListener("click", scrollToTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (button) {
        button.removeEventListener("click", scrollToTop);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`fixed bottom-5 right-5 w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-600 focus:outline-none animate-bounce ${
        showButton ? "" : "invisible"
      }`}
    >
      <span className="sr-only">Scroll to Top</span>
      <svg
        className="w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;
