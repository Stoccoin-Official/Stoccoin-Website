import React from 'react';
import { Link } from 'react-router-dom';
import "./CoinCard.css"

const CoinCard = ({ id, name, symbol, price, image, currencySymbol }) => {
  return (
    <>
    <div className="top">
    <div className="container">
      <Link to={`/coin/${id}`}>
        <div className="card">
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <div className="content">
            <h2>{name}</h2> 
            <p>Symbol: {symbol}</p>
            <p>Price: {currencySymbol} {price}</p>
          </div>
        </div>
      </Link>
    </div>
    </div>
    </>
  );
};

export default CoinCard;


