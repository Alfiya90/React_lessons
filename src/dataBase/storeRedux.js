import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";

let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer
})
let store = legacy_createStore(redusers);

export default store;