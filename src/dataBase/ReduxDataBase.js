import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    MessagePage: messageReducer
});


let store = legacy_createStore(reducers);


export default store;
