import React, { useEffect } from 'react';

const Widget1 = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: 1000,
      height: 800,
      defaultColumn: 'overview',
      screener_type: 'most_actives',
      displayCurrency: 'USD',
      colorTheme: 'light',
      locale: 'in',
    });

    const widgetContainer = document.getElementById('tradingview-widget');
    if (widgetContainer && widgetContainer.childElementCount === 0) {
      widgetContainer.appendChild(script);
    }

    return () => {
      if (widgetContainer) {
        widgetContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div className="tradingview-widget-container__widget" id="tradingview-widget"></div>
    </div>
  );
};

export default Widget1;
