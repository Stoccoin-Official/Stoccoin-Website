import React from 'react'
import Navbar from "../Navbar"
import { useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import Chart from './Chart'
import "./CoinDetails.css"
import { BsArrowLeft } from 'react-icons/bs';


const CoinDetails = () => {
  const [coin,setCoin]=useState();
  const [loading,setLoading]=useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days,setDays]=useState("24hr")
  const [chartArray,setChartArray]=useState([])
  const params=useParams()
  const navigate = useNavigate();

  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const butns=["24h","7d","14d","30d","60d","200d","365d","max"];
   useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`);

        const {data:chartdata}=await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
        setLoading(false);
        setCoin(data);
        setChartArray(chartdata.prices)
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchCoin();
  }, [params.id],currency,days);

  const switchChartStats = async (key) => {
    switch (key) {
      case "24h":
        setDays("24h");
        setLoading(true);
        break;
  
      case "7d":
        setDays("7d");
        setLoading(true);
        break;
  
      case "14d":
        setDays("14d");
        setLoading(true);
        break;
  
      case "30d":
        setDays("30d");
        setLoading(true);
        break;
  
      case "60d":
        setDays("60d");
        setLoading(true);
        break;
  
      case "200d":
        setDays("200d");
        setLoading(true);
        break;
  
      case "365d":
        setDays("365d");
        setLoading(true);
        break;
  
      default:
        setDays("24h");
        setLoading(true);
        break;
    }
  
    try {
      const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`);
      setChartArray(data.prices);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  const handleClick = () => {
    navigate('./CoinCard.jsx');
  };
  
  return (
    
    <>
      <Navbar/>
      <br /><br /><br />


      <button className="back-button" onClick={handleClick}>
        <BsArrowLeft className="back-icon" />
        <span>Back</span>
      </button>

      <div className="chart">
        <Chart arr={chartArray} currency={currencySymbol} days={days}/>
      </div>

<div className="buttons">
  {butns.map((btn) => (
    <button
      key={btn}
      className={`chart-button ${days === btn ? "active" : ""}`}
      onClick={() => switchChartStats(btn)}
    >
      {btn}
    </button>
  ))}
</div>


      <div className='radio_btns' >
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

      <div className='main_container'>
        <span className='time' >
          Last Update on { Date(coin.last_updated).split("G")[0]}
        </span>
        <img src={coin.image.large} alt="" />
        <div className="info">
          <h3 className='name' > {coin.name} </h3>
          <h3 className='symbol' > {currencySymbol}{coin.market_data.current_price[currency]} </h3>
          {/* <div className={coin.market_data.price_change_percentage_24h>0?"increase_symbol": <AiFillCaretDown/> }>
            {coin.market_data.price_change_percentage_24h}%
          </div> */}
        </div>
        <div className="rank">
          Rank:#{coin.market_data.market_cap_rank}
        </div>
        <div className='high_low'>
          <div className="high">
          High:{` ${currencySymbol}${coin.market_data.high_24h[currency]}`} 
          </div>
          <br/>
          <div className="low">
          Low :{` ${currencySymbol}${coin.market_data.low_24h[currency]}`} 
          </div>

        </div>

        <div className="supply">
        <div className="max_supply">
          Max-supply:{coin.market_data.max_supply}
        </div>
        <div className="circulating_supply">
          Circulating-supply:{coin.market_data.circulating_supply}
        </div>
        <div className="market_cap">
          Market-cap:{`${currencySymbol}${coin.market_data.market_cap[currency]}`}
        </div>
        <div className="all_time_high">
          All-Time-high:{`${currencySymbol}${coin.market_data.ath[currency]}`}
        </div>
        <div className="all_time_low">
          All-Time-low:{`${currencySymbol}${coin.market_data.atl[currency]}`}
        </div>
        </div>

      </div>
      
      </>
  )
}

export default CoinDetails