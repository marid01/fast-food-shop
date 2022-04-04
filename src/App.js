import React from 'react';
import './scss/App.scss';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="wrapper">
            <header className="header"><svg width="70" height="17" viewBox="0 0 70 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="14" height="17" fill="#E4002B"/>
                <rect x="28" width="14" height="17" fill="#E4002B"/>
                <rect x="56" width="14" height="17" fill="#E4002B"/>
            </svg>
            </header>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    {/*<Route path="/basket" element={<Basket/>}/>*/}
                </Routes>
            </div>
        </div>
    );
}

export default App;
