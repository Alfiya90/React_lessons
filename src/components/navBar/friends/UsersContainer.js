import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {setUsersAC, subscribeAC, unSubscribeAC} from "../../../dataBase/UsersReduser";

let mapStateToProps=(state)=>{
    return{users: state.usersPage.users
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        subscribe:(userId)=>{dispatch(subscribeAC(userId))},
        unsubscribe:(userId)=>{dispatch(unSubscribeAC(userId))},
        setUsers:(users)=>{dispatch(setUsersAC(users))}
    }

}
debugger;
let UsersContainer =connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;