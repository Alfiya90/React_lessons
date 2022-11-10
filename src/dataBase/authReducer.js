import {api} from "../api";

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
                isAuth: true
            }
        default:
            return state;
    }
    return state;
}

export const setAuthParam = ({userId, email, login}) => {
    return {
        type: SET_AUTH_PARAM,
        data: {userId, email, login}
    }
}

export const isAuthing = () => {
    debugger
    return (dispatch) => {
        api.isAuthMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthParam({id, login, email}));
            }
        })
    }
}
export default authReducer;