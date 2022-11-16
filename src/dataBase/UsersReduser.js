import {api} from "../api";


const SUBSCRIBE='SUBSCRIBE'
const UNSUBSCRIBE='UNSUBSCRIBE'
const SET_USERS ='SET_USERS'
const SET_PAGE='SET_PAGE'
const SET_TOTAL_USERS_COUNT='SET_TOTAL_USERS_COUNT'
const SET_IS_LOADING ='SET_IS_LOADING'
const SET_IS_DISABLE = 'SET_IS_DISABLE'

let initialState ={
    users:[],
    totalUsersCount: 0,
    pageSize: 7,
    currentPage:1,
    isLoading: false,
    isDisabling: []
}

let userReducer =(state=initialState, action)=>{
    switch(action.type){
        case SUBSCRIBE:{
            return {...state,
                    users: state.users.map(user=>{
                        if(user.id===action.userId){
                         return{...user, subscription: true}
                    }return user
            })
        }
        }
        case UNSUBSCRIBE:{
            return{...state,
                    users: state.users.map(user=> {
                        if( user.id===action.userId){
                            return{...user, subscription:false}
                        }return user
                    })
            }
        }
        case SET_USERS:{
            return{...state,
                   users: [...action.users]}
        }
        default: return  state;

        case SET_PAGE: {
            return {...state, currentPage: action.currentPage
            }
        }
        case    SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }

        case    SET_IS_LOADING: {
            return {...state, isLoading: action.isLoading}
        }
        case SET_IS_DISABLE: {
            return {... state,
                isDisabling: action.isDisabling ? [...state.isDisabling, action.userId]:
                    state.isDisabling.filter(id => id !== action.userId)
            }
        }
        }
}



export const subscribeAC=(userId)=>{
    return {type:SUBSCRIBE, userId}
}

export const unSubscribeAC=(userId)=>{
    return {type:UNSUBSCRIBE, userId}
}

export const setUsersAC =(users)=>{
    return {type: SET_USERS,users}
}
export  const setCurrentPageAC=
    (currentPage)=>{
    return {type:SET_PAGE, currentPage }
}
export const setTotalUsersCountAC=(totalUsersCount)=>{
    return {type:SET_TOTAL_USERS_COUNT, totalUsersCount}
}
export const setLoadingAC = (isLoading) => {
    return {type:SET_IS_LOADING, isLoading}
}
export const setDisabling = (isDisabling, userId) => {
    return {type: SET_IS_DISABLE, isDisabling, userId}
}
export const getUsersThunk = (page, pageSize) => {
    return (dispatch) => {
        console.log(page)
        dispatch(setLoadingAC(true));
        dispatch(setCurrentPageAC(page))
        api.getUsers(page, pageSize ).then(data => {
            dispatch(setUsersAC(data.items));
            dispatch(setTotalUsersCountAC(data.totalCount));
            dispatch(setLoadingAC(false));
        })
    }}


export const userDeleteThunk =(userId) => {
    return (dispatch) => {
        dispatch(setDisabling(true, userId));
        api.userDelete(userId)
            .then((data) => {
                if(data.resultCode === 0){
                    dispatch(unSubscribeAC(userId))
                }
                dispatch(setDisabling(false, userId));
            })
}

}

export  const onUserSubscribeThunk = (userId) => {
    return (dispatch) => {
        dispatch(setDisabling(true, userId));
        api.onUserSubscribe(userId).then((data) => {
            if (data.resultCode === 0) {
                dispatch(subscribeAC(userId))
            }
            dispatch(setDisabling(false, userId));
        })
    }
}



export default userReducer;