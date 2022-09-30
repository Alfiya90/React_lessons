import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import messageReducer from "./MessageReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    MessagePage: messageReducer
});


let dateBase = createStore(reducers);


export default dateBase;