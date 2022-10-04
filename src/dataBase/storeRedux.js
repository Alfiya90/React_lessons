import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";
import usersReducer from "./UsersReduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer
})
let store = legacy_createStore(reducers);
window.store = store;
export default store;