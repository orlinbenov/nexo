import React from "react";
import "./Coin.css"

function Coin({ name, icon, price, decimals }) {
    return (
        <div className="assetContainer">
            <div className="asset">
                <div className="assetLeft">
                    <img className="assetIcon" src={icon} alt="asset icon" />
                    <div className="assetName">{name}</div>
                </div>
                <div className="assetRight">
                    <div className="assetPriceTitle">Price</div>
                    <div className="assetPrice">{price.toFixed(decimals ? decimals : price.toString().split(".")[1].length)}</div>
                </div>
            </div>
        </div>
    );
}

export default Coin;
