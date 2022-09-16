import logo from './logo.svg';
import './App.css';
import React from 'react';

import Setting from "./components/navBar/setting/Setting";
import Profile from "./components/content/Profile";
import Header from "./components/header/Header";
import Dialogs from "./components/navBar/dialogs/Dialogs";
import {BrowserRouter, Route } from "react-router-dom";
import News from "./components/navBar/news/News";
import Musics from "./components/navBar/Music/Musics";
import NavBar from "./components/navBar/NavBar";







function App() {
    return (<BrowserRouter>
                <div className = 'app-wrapper'>
                    <Header />
                    <NavBar />
                    <div className = 'app-wrapper-content'>
                        <Route path ="/profile"component={Profile} />
                        <Dialogs />
                        <News />
                        <Musics />
                        <Setting />
                        {/*<Dialogs/>*/}
                        {/*<Route component={Profile} />
                        <Route component={Dialogs} />*/}
                    </div>

                </div>
            </BrowserRouter>

    );


}
export default App;
