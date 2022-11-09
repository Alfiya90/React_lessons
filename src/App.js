import './App.css';
import React from 'react';
import Setting from './components/navBar/setting/Setting';
import Header from './components/header/Header';
import News from './components/navBar/news/News';
import Musics from './components/navBar/Music/Musics';
import NavBar from './components/navBar/NavBar';
import {BrowserRouter} from 'react-router-dom';
import  {Route, Routes} from 'react-router';
import  {SuperDialogsContainer} from "./components/navBar/dialogs/DailogsContainer";
import UsersContainer from './components/navBar/friends/UsersContainer'
import SuperProfileContainer from "./components/content/posts/SuperProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";








const App=({state})=> {
    return    (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <HeaderContainer/>
                <NavBar dialogData={state.messagePage}/>
                <div className = 'app-wrapper-content'>
                    <Routes>
                        <Route path = "/profile/:userId" element ={<SuperProfileContainer/>} />
                        <Route path = "/dialogs" element={<SuperDialogsContainer/>} />
                        <Route path = "/news" element ={<News/>} />
                        <Route path = "/music" element ={<Musics/>}/>
                        <Route path = "/setting" element={<Setting/>} />
                        <Route path = "/users" element ={<UsersContainer/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;
