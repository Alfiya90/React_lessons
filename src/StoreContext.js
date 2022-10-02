import React from "react";
import store from "./dataBase/storeRedux";
import App from "./App";

const StoreContext = React.createContext(null);

export const Provider =(props)=>{
    <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>

}

export default StoreContext;