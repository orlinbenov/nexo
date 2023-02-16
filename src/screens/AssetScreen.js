import React, { useState, useEffect } from "react";
import Axios from "axios";
import Asset from "../components/Asset";
import { useNavigate } from 'react-router-dom';

function Asset() {
    const navigate = useNavigate();
    const [binanceAssetsList, setBinanceAssetsList] = useState([]);
    const [bitfinexAssetsList, setBitfinexAssetsList] = useState([]);
    const [huobiAssetsList, setHuobiAssetsList] = useState([]);
    const [krakenAssetsList, setKrakenAssetsList] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    const handleClick = () => navigate('/' + searchWord.replace('/','').toLowerCase());

    useEffect(() => {
        document.title = 'The Right Place For Your Digital Assets • Nexo';

        Axios.get("https://api.binance.com/api/v3/exchangeInfo").then(
            (response) => {
                setBinanceAssetsList(response.data.symbols);
            }
        );
        Axios.get("https://api.huobi.pro/v1/common/symbols").then(
            (response) => {
                setHuobiAssetsList(response.data.data);
            }
        );
        Axios.get("https://api.kraken.com/0/public/AssetPairs").then(
            (response) => {
                setKrakenAssetsList(response.data.result);
            }
        );
        Axios.get("https://api.bitfinex.com/v1/symbols").then(
            (response) => {
                setBitfinexAssetsList(response.data.result);
            }
        );
    }, []);

    const filteredBinanceAsset = binanceAssetsList.filter((asset) => {
        return asset.symbol.toLowerCase() === searchWord.replace('/','').toLowerCase();
    });

    const filteredBitfinexAsset = bitfinexAssetsList.filter((asset) => {
        return asset.symbol.toLowerCase() === searchWord.replace('/','').toLowerCase();
    });

    const filteredHuobiAsset = huobiAssetsList.filter((asset) => {
        return asset.symbol.toLowerCase() === searchWord.replace('/','').toLowerCase();
    });

    const krakenArrayList = Object.keys(krakenAssetsList);

    function checkKrakenAsset(asset) {
        return asset.toLowerCase() === searchWord.replace('/','').toLowerCase()
    }

    const filteredKrakenAsset = krakenArrayList.filter(checkKrakenAsset);

    return (
        <div className="App">
            <div className="appHeader">
                <a className="b-logo" href="https://nexo.io" target="_blank">
                    <svg width="142" height="35" viewBox="0 0 142 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className="nexo-logo-letter-o"
                              d="M131.664 8.00053C129.59 7.97288 127.555 8.56254 125.817 9.69451C124.08 10.8265 122.718 12.4497 121.905 14.3576C121.092 16.2656 120.865 18.3722 121.253 20.4096C121.64 22.4469 122.625 24.323 124.081 25.7993C125.538 27.2756 127.401 28.2853 129.433 28.7002C131.465 29.1151 133.574 28.9163 135.493 28.1292C137.412 27.3421 139.053 26.0021 140.208 24.2798C141.363 22.5574 141.98 20.5304 141.98 18.4565C141.981 15.7074 140.898 13.0688 138.967 11.1119C137.036 9.15496 134.413 8.03719 131.664 8.00053ZM131.664 24.4164C130.846 24.4604 130.028 24.3374 129.259 24.0547C128.49 23.772 127.787 23.3356 127.192 22.7722C126.598 22.2087 126.124 21.5301 125.801 20.7776C125.477 20.0251 125.31 19.2146 125.31 18.3955C125.31 17.5764 125.477 16.7659 125.801 16.0134C126.124 15.2609 126.598 14.5823 127.192 14.0189C127.787 13.4555 128.49 13.0191 129.259 12.7364C130.028 12.4537 130.846 12.3306 131.664 12.3746C133.205 12.4575 134.655 13.128 135.716 14.2481C136.778 15.3681 137.369 16.8525 137.369 18.3955C137.369 19.9386 136.778 21.4229 135.716 22.543C134.655 23.663 133.205 24.3335 131.664 24.4164Z"
                              fill="#2853C3"></path>
                        <path className="nexo-logo-letter-x"
                              d="M117.434 8.1452C117.382 8.09595 117.313 8.06851 117.242 8.06851C117.17 8.06851 117.101 8.09595 117.049 8.1452L109.959 15.1478L102.957 8.1452C102.905 8.09595 102.836 8.06851 102.764 8.06851C102.692 8.06851 102.623 8.09595 102.571 8.1452L99.7179 11.1038C99.6686 11.1558 99.6412 11.2247 99.6412 11.2964C99.6412 11.368 99.6686 11.4369 99.7179 11.4889L106.72 18.4915L99.6128 25.5991C99.5636 25.6511 99.5361 25.72 99.5361 25.7917C99.5361 25.8633 99.5636 25.9322 99.6128 25.9842L102.414 28.7678C102.445 28.8017 102.483 28.8288 102.525 28.8474C102.567 28.8659 102.613 28.8755 102.659 28.8755C102.705 28.8755 102.751 28.8659 102.793 28.8474C102.835 28.8288 102.873 28.8017 102.904 28.7678L109.907 21.7652L116.909 28.7678C116.961 28.817 117.03 28.8445 117.102 28.8445C117.173 28.8445 117.242 28.817 117.294 28.7678L120.148 25.9317C120.197 25.8797 120.225 25.8108 120.225 25.7392C120.225 25.6675 120.197 25.5986 120.148 25.5466L113.145 18.544L120.253 11.5415C120.302 11.4894 120.33 11.4205 120.33 11.3489C120.33 11.2772 120.302 11.2083 120.253 11.1563L117.434 8.1452Z"
                              fill="#2853C3"></path>
                        <path className="nexo-logo-letter-e"
                              d="M97.951 17.3348C97.517 12.1417 93.1918 8.04459 87.8957 8.00046C86.3861 8.00046 84.9087 8.3185 83.5411 8.9567C79.7901 10.7098 77.6934 14.4304 77.6934 18.497C77.8993 24.0138 82.6143 28.5449 88.1385 28.5449H93.9347C94.2437 28.5449 94.5011 28.2948 94.5011 27.9785V24.6611C94.5011 24.3522 94.251 24.0947 93.9347 24.0947H87.8884C85.358 24.0947 83.2101 22.2117 82.4378 19.9388H97.2669C97.6714 19.9388 97.9951 19.6372 97.9951 19.2694C97.9876 18.8055 97.951 17.3348 97.951 17.3348ZM93.1845 16.2683H82.4599C83.3353 13.8044 85.7706 12.2235 88.3665 12.4727C90.6173 12.686 92.4342 14.2307 93.1845 16.2683Z"
                              fill="#2853C3"></path>
                        <path className="nexo-logo-letter-n"
                              d="M64.7095 8.00948C62.7909 8.0551 60.9279 8.6639 59.3526 9.76012V8.60469C59.3526 8.51183 59.3157 8.42278 59.25 8.35712C59.1844 8.29146 59.0953 8.25457 59.0025 8.25457H55.2561C55.1632 8.25457 55.0742 8.29146 55.0085 8.35712C54.9428 8.42278 54.906 8.51183 54.906 8.60469V17.9356C54.8972 18.0931 54.8972 18.2509 54.906 18.4083V27.9318C54.9059 28.082 54.9643 28.2264 55.0689 28.3342C55.1735 28.4421 55.316 28.5049 55.4662 28.5095H58.7924C58.8674 28.5095 58.9418 28.4945 59.0109 28.4652C59.08 28.436 59.1426 28.3932 59.1948 28.3393C59.2471 28.2854 59.288 28.2215 59.3151 28.1515C59.3422 28.0815 59.3549 28.0068 59.3526 27.9318V18.1807C59.3536 17.38 59.5221 16.5885 59.8472 15.8568C60.1724 15.1251 60.6469 14.4695 61.2404 13.932C61.8339 13.3946 62.5332 12.9872 63.2934 12.7361C64.0537 12.4849 64.8581 12.3955 65.6549 12.4736C67.1048 12.6259 68.4461 13.3127 69.417 14.4002C70.388 15.4877 70.9191 16.8979 70.9068 18.3558V27.9668C70.9045 28.0418 70.9172 28.1166 70.9443 28.1866C70.9714 28.2566 71.0123 28.3204 71.0646 28.3743C71.1168 28.4282 71.1794 28.471 71.2485 28.5002C71.3177 28.5295 71.392 28.5445 71.467 28.5445H74.7757C74.929 28.5445 75.0759 28.4836 75.1842 28.3753C75.2926 28.267 75.3534 28.12 75.3534 27.9668V18.1807C75.35 16.8057 75.0687 15.4456 74.5266 14.182C73.9844 12.9184 73.1925 11.7774 72.1984 10.8274C71.2044 9.8775 70.0286 9.13822 68.7417 8.65397C67.4548 8.16973 66.0833 7.95052 64.7095 8.00948Z"
                              fill="#2853C3"></path>
                        <path className="nexo-logo-shape-6"
                              d="M0.0507812 6.14661V28.0742C0.0511771 28.2059 0.0868314 28.3352 0.154258 28.4495C0.221685 28.5638 0.318577 28.6593 0.435462 28.7264L10.0525 34.0996V11.7217L0.0507812 6.14661Z"
                              fill="#60BEFF"></path>
                        <path className="nexo-logo-shape-5"
                              d="M30.0234 0.55603L39.6405 5.92922C39.7573 5.9964 39.8542 6.09182 39.9217 6.20614C39.9891 6.32046 40.0247 6.44978 40.0251 6.58146V28.509L30.0234 22.9184V0.55603Z"
                              fill="#1A4199"></path>
                        <path className="nexo-logo-shape-4"
                              d="M10.0361 34.0997L20.0378 28.5091L10.0361 22.9185V34.0997Z" fill="#3CA9E5"></path>
                        <path className="nexo-logo-shape-3"
                              d="M10.4211 0.773929L30.0238 11.7377V22.9189L0.0507812 6.14712L9.66779 0.773929C9.78176 0.708309 9.91188 0.673676 10.0445 0.673676C10.177 0.673676 10.3072 0.708309 10.4211 0.773929Z"
                              fill="#3CA9E5"></path>
                        <path className="nexo-logo-shape-2"
                              d="M30.0237 0.55603L20.0381 6.14664L30.0237 11.7372V0.55603Z" fill="#2853C3"></path>
                        <path className="nexo-logo-shape-1"
                              d="M40.0252 28.509L30.4082 33.8822C30.2898 33.9434 30.1576 33.9754 30.0235 33.9754C29.8893 33.9754 29.7572 33.9434 29.6388 33.8822L10.0361 22.9184V11.7217L40.0252 28.509Z"
                              fill="#2853C3"></path>
                    </svg>
                </a>
            </div>
            <div className="assetsWrapper">
                <div className="searchInputWrapper">
                    <input
                        className="searchInput"
                        type="text"
                        placeholder="Search among thousands of assets..."
                        onChange={(event) => {
                            setSearchWord(event.target.value);
                        }}
                    />
                    <button onClick={handleClick}>Go!</button>
                </div>
                {(searchWord !== '' && (filteredBinanceAsset.length || filteredBitfinexAsset.length || filteredHuobiAsset.length || filteredKrakenAsset.length)) ?
                    (<div>
                        <Asset
                            exchange="Binance"
                            asset={filteredBinanceAsset[0]}
                        />
                        <Asset
                            exchange="Bitfinex"
                            asset={filteredBitfinexAsset[0]}
                        />
                        <Asset
                            exchange="Huobi"
                            asset={filteredHuobiAsset[0]}
                        />

                        <Asset
                            exchange="Kraken"
                            asset={krakenAssetsList[filteredKrakenAsset]}
                        />
                    </div>)
                    :
                    <div className="noAssets">There are no assets found based on your search criteria</div>
                }
            </div>
        </div>
    );
}

export default Asset
