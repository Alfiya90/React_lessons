import React from 'react'
import {connect} from "react-redux";
import {
    getUsersThunk,
    onUserSubscribeThunk,
    setCurrentPageAC,
    setDisabling,
    subscribeAC,
    unSubscribeAC, userDeleteThunk
} from "../../../dataBase/UsersReduser";
import UsersC from "./UsersC";
import {
    getAllUsers,
    getCurrentPage, getDisabling,
    getLoading,
    getPageSize,
    getTotalUsersCount
} from "../../../dataBase/selclors/usersSelectors";

/*let mapStateToProps=(state)=>{
    return{users: state.usersPage.users,
           totalUsersCount: state.usersPage.totalUsersCount,
           pageSize: state.usersPage.pageSize,
           currentPage: state.usersPage.currentPage,
           isLoading: state.usersPage.isLoading,
           isDisabling: state.usersPage.isDisabling
    }
}*/
let mapStateToProps=(state)=>{
    return{
        users: getAllUsers(state),
        totalUsersCount: getTotalUsersCount(state) ,
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isLoading: getLoading(state),
        isDisabling: getDisabling(state)
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        subscribe:(userId)=>{dispatch(subscribeAC(userId))},
        unsubscribe:(userId)=>{dispatch(unSubscribeAC(userId))},
        setDisabling: (isDisabling, userId) => {dispatch( setDisabling(isDisabling, userId))},
        getUsersThunk: (currentPage, pageSize) => {dispatch(getUsersThunk(currentPage, pageSize))},
        userDeleteThunk: (userId) => {dispatch(userDeleteThunk(userId))},
        onUserSubscribeThunk: (userId) => {dispatch(onUserSubscribeThunk(userId))},
        setCurrentPageAC: (currentPage) => {dispatch(setCurrentPageAC(currentPage))}
    }
}

let UsersContainer =connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;