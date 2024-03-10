import React, { useEffect } from "react";

const Widget1 = ({ darkMode }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      title: "Stocks",
      width: 1000,
      height: 800,
      locale: "in",
      showSymbolLogo: true,
      symbolsGroups: [
        {
          name: "Financial",
          symbols: [
            {
              name: "NYSE:JPM",
              displayName: "Jpmorgan Chase & Co",
            },
            {
              name: "NYSE:WFC",
              displayName: "Wells Fargo Co New",
            },
            {
              name: "NYSE:BAC",
              displayName: "Bank Amer Corp",
            },
            {
              name: "NYSE:HSBC",
              displayName: "Hsbc Hldgs Plc",
            },
            {
              name: "NYSE:C",
              displayName: "Citigroup Inc",
            },
            {
              name: "NYSE:MA",
              displayName: "Mastercard Incorporated",
            },
          ],
        },
        {
          name: "Technology",
          symbols: [
            {
              name: "NASDAQ:AAPL",
              displayName: "Apple",
            },
            {
              name: "NASDAQ:GOOGL",
              displayName: "Google Inc",
            },
            {
              name: "NASDAQ:MSFT",
              displayName: "Microsoft Corp",
            },
            {
              name: "NASDAQ:FB",
              displayName: "Meta Platforms, Inc",
            },
            {
              name: "NYSE:ORCL",
              displayName: "Oracle Corp",
            },
            {
              name: "NASDAQ:INTC",
              displayName: "Intel Corp",
            },
          ],
        },
        {
          name: "Services",
          symbols: [
            {
              name: "NASDAQ:AMZN",
              displayName: "Amazon Com Inc",
            },
            {
              name: "NYSE:BABA",
              displayName: "Alibaba Group Hldg Ltd",
            },
            {
              name: "NYSE:T",
              displayName: "At&t Inc",
            },
            {
              name: "NYSE:WMT",
              displayName: "Wal-mart Stores Inc",
            },
            {
              name: "NYSE:V",
              displayName: "Visa Inc",
            },
          ],
        },
      ],
      colorTheme: `${darkMode ? "dark" : "light"}`,
    });

    const widgetContainer = document.createElement("div");
    widgetContainer.className = "tradingview-widget-container";

    widgetContainer.appendChild(script);

    const container = document.getElementById("tradingview-widget");
    if (container && container.childElementCount === 0) {
      container.appendChild(widgetContainer);
    }

    return () => {
      if (container) {
        container.innerHTML = "";
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
