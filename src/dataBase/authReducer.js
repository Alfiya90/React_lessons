import {api} from "../api";
import {stopSubmit} from "redux-form";

const SET_AUTH_PARAM = 'SET_AUTH_PARAM';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_PARAM:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
    return state;
}

export const setAuthParam = ({userId, login, email, isAuth = false}) => {
    debugger
    return {
        type: SET_AUTH_PARAM,
        data: {userId, login, email, isAuth}
    }
}

export const isAuthing = () => {
    debugger;
    return (dispatch) => {
        api.isAuthMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthParam({id, login, email, isAuth: true}));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
debugger
    return (dispatch) => {
        api.login(email, password, rememberMe)
            .then(response => {
                console.log(response)
                if  (response.data.resultCode === 0){
                    dispatch(isAuthing);
                } else{
                    console.log(response)
                    let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Error"
                    dispatch(stopSubmit('login', {_error: errorMessage }))
                }

            } )
    }}

export const logout = () => {
    debugger;
    return (dispatch) => {
        api.logout().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthParam( null, null, null, false));
            }
        })
    }
}
export default authReducer;