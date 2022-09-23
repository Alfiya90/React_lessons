import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage} from "./dataBase/DateBase";
import {addPost} from "./dataBase/DateBase";
import dateBase from "./dataBase/DateBase";
import {updateNewPostChar} from "./dataBase/DateBase";
import {updateNewMessageChar} from "./dataBase/DateBase";

export let rerenderEntireTree =(dateBase)=> {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App  dateBase={dateBase} addPost={addPost} addMessage ={addMessage} updateNewPostChar={updateNewPostChar}
                  updateNewMessageChar={updateNewMessageChar}/>
        </React.StrictMode>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();