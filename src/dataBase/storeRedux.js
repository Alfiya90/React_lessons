import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";
import usersReducer from "./UsersReduser";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})
let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;