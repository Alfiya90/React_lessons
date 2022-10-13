
import './App.css';
import React from 'react';
import Dialogs from './components/navBar/dialogs/Dialogs';
import Setting from './components/navBar/setting/Setting';
import Profile from './components/content/Profile';
import Header from './components/header/Header';
import News from './components/navBar/news/News';
import Musics from './components/navBar/Music/Musics';
import NavBar from './components/navBar/NavBar';
import {BrowserRouter} from 'react-router-dom';
import  {Route, Routes} from 'react-router';
import  {SuperDialogsContainer} from "./components/navBar/dialogs/DailogsContainer";
import UsersContainer from './components/navBar/friends/UsersContainer'







const App=({state,dispatch})=> {
    return    (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <Header/>
                <NavBar dialogData={state.messagePage}/>
                <div className = 'app-wrapper-content'>
                    <Routes>
                        <Route path = "/profile" element ={<Profile/>} />
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
