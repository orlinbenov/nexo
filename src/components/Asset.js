import React from "react";
import "./Asset.css"
import { useLocation, useNavigate } from "react-router-dom";

function Asset({ name, asset }) {
    const location = useLocation();
    const navigate = useNavigate();

    const passInfo = () => {
        navigate(`${location.pathname}/details`, { state: { asset: asset } } );
    }

    let formatCurrency = (price) => {
        return '$' + price
    }

    return (
        <div className="assetContainer">
            <div className="asset">
                <div className="assetLeft">
                    <div className="exchangeName">{asset.exchange}</div>
                    <div className="assetName">1 {name}</div>
                </div>
                <div className="assetRight">
                    <div className="assetPriceTitle">Price</div>
                    <div onClick={passInfo} className="assetPrice">{asset.price ? formatCurrency(asset.price) : '-'}</div>
                </div>
            </div>
        </div>
    );
}

export default Asset;
