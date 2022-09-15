import logo from './logo.svg';
import './App.css';
import React from 'react';

import NavBar from "./components/navBar/NavBar";
import Content from "./components/content/Content";
import Header from "./components/header/Header";

<Header/>

function App() {
    return (
            <div className = 'app-wrapper'>
                <Header/>
                <NavBar/>
                <Content/>
            </div>
    );


}
export default App;
