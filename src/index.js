import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogData =[
    {id:1, name:"Vladislav" },
    {id:2, name:"Aslan" },
    {id:3, name:"Damir"},
    {id:4, name:"Mama" },
    {id:5, name:"Ryzilya"}
]

let postData=[
    {id:1, message:"Немного обо мне", likes:9 },
    {id:3, message:"Важней всего погода в доме?", likes:8 },
    {id:4, message:"Вкусный завтрак", likes:5},
]
let messageData=[
    {id:1, message:"Привет!Как дела?" },
    {id:3, message:"Мам, есть что нибудь вкусненькое?" },
    {id:4, message:"Ты где?" },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App  dialogData={dialogData} postData={postData} messageData ={messageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
