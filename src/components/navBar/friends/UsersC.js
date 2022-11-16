import React from 'react';
import Users from "./Users";
import {Preloader} from "../../common/Preloader";



class UsersC extends React.Component{

        componentDidMount() {
            this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
        }
       onChangePage=(pageNumber) => {
           this.props.getUsersThunk(pageNumber, this.props.pageSize)
        }

    render()  {

            return <>
                {
                    <Users totalUsersCount = {this.props.totalUsersCount}
                           pageSize = {this.props.pageSize}
                           onChangePage ={this.onChangePage}
                           currentPage = {this.props.currentPage}
                           users = {this.props.users}
                           isDisabling = {this.props.isDisabling}
                           setDisabling = {this.props.setDisabling}
                           userDeleteThunk = {this.props.userDeleteThunk}
                           onUserSubscribeThunk = {this.props.onUserSubscribeThunk}
                           setCurrentPageAC = {this.props.setCurrentPageAC}
                           isLoading = {this.props.isLoading}
                />}
                </>
    }
}
export  default UsersC;