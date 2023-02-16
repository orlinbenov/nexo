import "./App.css";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./screens/Home";
import AssetScreen from "./screens/AssetScreen";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/:assetName/*' element={<ResultsChildRoutes/>}/>
            </Routes>
        </BrowserRouter>
    );
}

function ResultsChildRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<AssetScreen modal={false} />} />
                <Route exact path="/details" element={<AssetScreen modal={true} />} />
            </Routes>
        </div>
    );
}
