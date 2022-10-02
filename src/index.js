import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./dataBase/storeRedux";
import StoreContext from "./StoreContext";

export let rerenderEntireTree =(state)=> {
    debugger
    ReactDOM.render(<React.StrictMode>
                        <StoreContext.Provider value={store}>
                             <App state={state}/>
                        </StoreContext.Provider>
                    </React.StrictMode>, document.getElementById('root'))
   /* /!*console.log('rerender is working')
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(*!/
        <React.StrictMode>
            <App  dateBase={dateBase} dispatch ={store.dispatch.bind(store)}/>
        </React.StrictMode>
   /!* );*!/*/
}

rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state =store.getState();
    rerenderEntireTree(state)
})

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
