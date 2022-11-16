import {api} from "../api";

const Counter = {
    messageId: 4,
    dialogId: 14
}

let initialState = {
    postData: [
        {id: 1, message: "Немного обо мне", likes: 4, messageId: 1},
        {id: 3, message: "Важней всего погода в доме", likes: 8, messageId: 2},
        {id: 4, message: "Вкусный завтрак", likes: 5, messageId: 3}
    ],
    profile: null,
    status: ''
}

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case'ADD_POST': {
            let newPost = {
                id: 6,
                message: action.addPostBody,
                likes: 0,
                messageId: Counter.messageId
            };
            let copyState = {...state}
            copyState.postData = [...state.postData]
            Counter.messageId += 1;
            copyState.postData.push(newPost);
            return copyState;
        }
        case 'UPDATE_NEW_POST_CHAR': {
            state.newPostChar = action.newChar;
            let copyState = {...state}
            return copyState;
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state, profile: action.profile
            }
        }
        case 'SET_STATUS': {
            return {
                ...state, status: action.status
            }
        }
        case 'DELETE_POST': {
            return {
                ...state, postData: state.postData.filter(post => post.id !== action.idPost )
            }
        }
        default:
            return state;
    }
    return state;
}
export let addPostActionCreator = (addPostBody) => {
    return {
        type: 'ADD_POST',
        addPostBody
    }
}
export let deletePostActionCreator = (idPost) => {
    return {
        type: 'DELETE_POST',
        idPost
    }
}
export let updateNewPostCharActionCreator = (text) => {
    return {
        type: 'UPDATE_NEW_POST_CHAR',
        newChar: text
    }
}
export let setStatusAC = (status) => {
    return {
        type: 'SET_STATUS',
        status
    }
}

export let setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile

    }
}

export const getUser = (userId) => {
    return async (dispatch) => {
        let data = await api.getUserOne(userId)
        dispatch(setUserProfile(data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let data = await api.getUserStatus(userId)
        dispatch(setStatusAC(data));
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await api.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setStatusAC(status))
        }
    }

}

export default profileReducer;