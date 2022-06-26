import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs {price}</p>
          <p className="coin-volume">Rs {volume.toLocaleString()}</p>{" "}
          {/* To display the actual commas,in the string */}
        </div>
      </div>
    </div>
  );
};

export default Coin;
