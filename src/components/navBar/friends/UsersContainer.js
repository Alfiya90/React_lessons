import React from 'react'
import {connect} from "react-redux";
import {
    setCurrentPageAC,
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
           currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        subscribe:(userId)=>{dispatch(subscribeAC(userId))},
        unsubscribe:(userId)=>{dispatch(unSubscribeAC(userId))},
        setUsers:(users)=>{dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber)=>{dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount:(totalUsersCount)=>{dispatch(setTotalUsersCountAC(totalUsersCount))}
    }

}
debugger;
let UsersContainer =connect(mapStateToProps, mapDispatchToProps)(UsersC);

export default UsersContainer;