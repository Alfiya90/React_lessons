
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







const App=({dateBase, addMessage, addPost})=> {
    console.log(dateBase, dateBase.profilePage, dateBase.messagePage)
    return    (
        <BrowserRouter>
            <div className = 'app-wrapper'>
                <Header />
                <NavBar dialogData={dateBase.messagePage}/>
                <div className = 'app-wrapper-content'>
                    <Routes>
                        <Route path = "/profile" element ={<Profile postData={dateBase.profilePage.postData} addPost ={addPost}/>} />
                        <Route path = "/dialogs" element={<Dialogs dialogData={dateBase.messagePage.dialogData}
                                                                   messageData={dateBase.messagePage.messageData}
                                                                    addMessage ={addMessage}/>} />
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
