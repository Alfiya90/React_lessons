import React from 'react'
import {connect} from "react-redux";
import {
    setCurrentPageAC, setLoadingAC,
    setTotalUsersCountAC,
    setUsersAC,
    subscribeAC,
    unSubscribeAC
} from "../../../dataBase/UsersReduser";
import UsersC from "./UsersC";

let mapStateToProps=(state)=>{
    return{users: state.usersPage.users,
           totalUsersCount: state.usersPage.totalUsersCount,
           pageSize: state.usersPage.pageSize,
           currentPage: state.usersPage.currentPage,
           isLoading: state.usersPage.isLoading
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        subscribe:(userId)=>{dispatch(subscribeAC(userId))},
        unsubscribe:(userId)=>{dispatch(unSubscribeAC(userId))},
        setUsers:(users)=>{dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber)=>{dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount:(totalUsersCount)=>{dispatch(setTotalUsersCountAC(totalUsersCount))},
        setIsLoading: (isLoading) =>{dispatch(setLoadingAC(isLoading))}
    }

}
let UsersContainer =connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;