import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./dataBase/ReduxDataBase"

export let rerenderEntireTree =(dateBase)=> {
    ReactDOM.render(<React.StrictMode>
        <App  dateBase={dateBase} dispatch ={store.dispatch.bind(store)}/>
    </React.StrictMode>,document.getElementById('root') )
   /* /!*console.log('rerender is working')
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(*!/
        <React.StrictMode>
            <App  dateBase={dateBase} dispatch ={store.dispatch.bind(store)}/>
        </React.StrictMode>
   /!* );*!/*/
}

rerenderEntireTree(store.getDataBase());
store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
