
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







function App(props) {
    return    (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <Header />
                <NavBar dialogData={props.dateBase.messagePage}/>
                <div className = 'app-wrapper-content'>
                    <Routes>
                        <Route path = "/profile" element ={<Profile postData={props.dateBase.profilePage} addPost ={props.addPost}/>} />
                        <Route path = "/dialogs" element={<Dialogs dialogData={props.dateBase.messagePage}
                                                                   messageData={props.dateBase.messagePage}
                                                                    addMessage ={props.addMessage}/>} />
                        <Route path = "/news" element ={<News/>} />
                        <Route path = "/music" element ={<Musics/>}/>
                        <Route path = "/setting" element={<Setting/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )

}

export default App;
