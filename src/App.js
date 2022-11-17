import React, {useEffect} from "react";
import './App.css';
import Setting from './components/navBar/setting/Setting';
import News from './components/navBar/news/News';
import Musics from './components/navBar/Music/Musics';
import NavBar from './components/navBar/NavBar';
import {BrowserRouter} from 'react-router-dom';
import  {Route, Routes} from 'react-router';
import  {SuperDialogsContainer} from "./components/navBar/dialogs/DailogsContainer";
import UsersContainer from './components/navBar/friends/UsersContainer'
import SuperProfileContainer from "./components/content/posts/SuperProfileContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import ProtectedRoute from "./components/common/main/ProtectedRoute";
import {isAuthing} from "./dataBase/authReducer";
import {connect} from "react-redux";


const App = ({isAuthing}) => {
   useEffect(() => {
       isAuthing()
   }, [])
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavBar/>
                    <div className='app-wrapper-content'>
                        <Routes>
                            <Route path="/profile/:userId" element={
                                // <ProtectedRoute>
                                <SuperProfileContainer/>
                                //</ProtectedRoute>
                            }/>
                            <Route path="/dialogs" element={
                                <ProtectedRoute>
                                    <SuperDialogsContainer/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/news" element={
                                <ProtectedRoute>
                                    <News/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/music" element={
                                <ProtectedRoute>
                                    <Musics/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/setting" element={
                                <ProtectedRoute>
                                    <Setting/>
                                </ProtectedRoute>
                            }/>
                            <Route path="/users" element={
                                /*<ProtectedRoute>*/
                                <UsersContainer/>
                                /*</ProtectedRoute>*/
                            }/>
                            <Route path="/login" element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )


}
export default connect(null, {isAuthing})(App);

