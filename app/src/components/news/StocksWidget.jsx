import React, { useEffect, useRef } from "react";

const StocksWidget = ({ darkMode }) => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      feedMode: "market",
      colorTheme: darkMode ? "dark" : "light",
      isTransparent: false,
      displayMode: "adaptive",
      width: "1000",
      height: "400",
      locale: "in",
      market: "stock",
    });
    widgetContainerRef.current.appendChild(script);

    return () => {
      widgetContainerRef.current.removeChild(script);
    };
  }, []);

  return (
    <div className="tradingview-widget-container" style={containerStyle}>
      <div className="tradingview-widget-container__center" style={centerStyle}>
        <div
          ref={widgetContainerRef}
          className="tradingview-widget-container__widget"
        ></div>
      </div>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
};

export default StocksWidget;

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const centerStyle = {
  display: "flex",
  justifyContent: "center",
};
