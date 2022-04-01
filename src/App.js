import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home/Home";

function App() {
    return (
        <div className="wrapper">
            <Header/>
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
