import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from "./dataBase/storeRedux";
import App from './App'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App state={store.getState()}/>
    </Provider>
)
