import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Axios from "axios";

function Modal({assetName}) {
    const location = useLocation();
    const navigate = useNavigate();
    const [marketData, setMarketData] = useState([])

    useEffect(() => {
        if (location.state.asset.exchange === 'Kraken') {
            Axios.get("https://api.kraken.com/0/public/Trades?pair=" + assetName.toUpperCase()).then(
                (response) => {
                    console.log(response)
                }
            );
        } else if (location.state.asset.exchange === 'Binance') {
            Axios.get("https://api.binance.com/api/v3/trades?limit=5&symbol=" + assetName.toUpperCase()).then(
                (response) => {
                    let marketShownData = []
                    response.data.forEach(el => {
                        let _el = {}
                        _el.amount = el.qty
                        _el.direction = el.isBuyerMaker ? 'buy' : 'sell'
                        _el.price = el.price
                        marketShownData.push(_el)
                    })
                    setMarketData(marketShownData)
                }
            );
        } else {
            Axios.get("https://api.huobi.pro/market/history/trade?size=5&symbol=" + assetName).then(
                (response) => {
                    let marketShownData = []
                    response.data.data.forEach(el => {
                        let _el = {}
                        _el.amount = el.data[0].amount
                        _el.direction = el.data[0].direction
                        _el.price = el.data[0].price
                        marketShownData.push(_el)
                    })
                    setMarketData(marketShownData)
                }
            );
        }
    }, []);

    return (
        <div className="modal">
            <div className="modalShadow"/>
            <div className="modalContent">
                <div className="modalClose" onClick={() => navigate(-1)}>x</div>
                <div className="modalHead">{assetName.toUpperCase()}</div>
                <div className="modalBody">
                    {marketData.length &&
                        <div>
                            <div className="modalBodyRow"><span className={'tradeDirection' + marketData[0].direction}>{marketData[0].direction.toUpperCase()}</span> {marketData[0].amount} @ {marketData[0].price}</div>
                            <div className="modalBodyRow"><span className={'tradeDirection' + marketData[1].direction}>{marketData[1].direction.toUpperCase()}</span> {marketData[1].amount} @ {marketData[1].price}</div>
                            <div className="modalBodyRow"><span className={'tradeDirection' + marketData[2].direction}>{marketData[2].direction.toUpperCase()}</span> {marketData[2].amount} @ {marketData[2].price}</div>
                            <div className="modalBodyRow"><span className={'tradeDirection' + marketData[3].direction}>{marketData[3].direction.toUpperCase()}</span> {marketData[3].amount} @ {marketData[3].price}</div>
                            <div className="modalBodyRow"><span className={'tradeDirection' + marketData[4].direction}>{marketData[4].direction.toUpperCase()}</span> {marketData[4].amount} @ {marketData[4].price}</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Modal

