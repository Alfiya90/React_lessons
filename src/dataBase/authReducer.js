import {api} from "../api";
import {stopSubmit} from "redux-form";

const SET_AUTH_PARAM = 'SET_AUTH_PARAM';

let initialState = {
    userId: null,
    login: null,
    email: null,
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

export const setAuthParam = ( {userId, login, email, isAuth }) => {
    return {
        type: SET_AUTH_PARAM,
        data: {userId, login, email, isAuth}
    }
}

export const isAuthing = () =>
    async (dispatch) => {
        let data = await api.isAuthMe()
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthParam({userId: id, login, email, isAuth: true}));
            }
            }


export const login = (email, password, rememberMe) => {
    return async (dispatch) => {
        let response = await api.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(isAuthing());
        } else {
            let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : "Error"
            dispatch(stopSubmit('login', {_error: errorMessage}))
        }

    }
}

export const logout = () => {
    return async (dispatch) => {
        let data = await api.logout()
        if (data.resultCode === 0) {
            dispatch(setAuthParam({userId: null, login: null, email: null, isAuth: false}));
        }
    }
}
export default authReducer;