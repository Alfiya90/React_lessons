import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";
import usersReducer from "./UsersReduser";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer
})
let store = legacy_createStore(reducers);
window.store = store;
export default store;