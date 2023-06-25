import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import CoinCard from './CoinCard';
import "./CoinCard.css"

const Widget1 = () => {
  const [loading, setLoading] = useState(false);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("inr");
  const [pages,setPages]=useState(1);

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`);
        setLoading(false);
        setCoins(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchCoins();
  }, [currency]);

  return (
    <>
    <div className="radio_btns" >
      <div>
        <input
          type="radio"
          name="currency"
          value="inr"
          checked={currency === "inr"}
          onChange={() => setCurrency("inr")}
        />
        <label htmlFor="inr">INR</label>
      </div>
      <div>
        <input
          type="radio"
          name="currency"
          value="eur"
          checked={currency === "eur"}
          onChange={() => setCurrency("eur")}
        />
        <label htmlFor="eur">EUR</label>
      </div>
      <div>
        <input
          type="radio"
          name="currency"
          value="usd"
          checked={currency === "usd"}
          onChange={() => setCurrency("usd")}
        />
        <label htmlFor="usd">USD</label>
      </div>
    </div>

      <div>
        {loading ? (
          <div>Loading..</div>
        ) : (
          <div className='topi' >
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                name={i.name}
                symbol={i.symbol}
                price={i.current_price}
                image={i.image}
                currencySymbol={currencySymbol}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Widget1;
