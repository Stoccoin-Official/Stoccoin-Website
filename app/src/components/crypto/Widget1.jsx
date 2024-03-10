import React, { useEffect } from "react";

const Widget1 = ({ darkMode }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: 1000,
      height: 800,
      defaultColumn: "overview",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      colorTheme: `${darkMode ? "dark" : "light"}`,
      locale: "in",
    });

    const widgetContainer = document.getElementById("tradingview-widget");
    if (widgetContainer && widgetContainer.childElementCount === 0) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = "";
      }
    };
  }, [darkMode]);

  return (
    <div
      className="tradingview-widget-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        className="tradingview-widget-container__widget"
        id="tradingview-widget"
      ></div>
    </div>
  );
};

export default Widget1;
