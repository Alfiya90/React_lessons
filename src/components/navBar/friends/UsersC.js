import React from 'react';
import Users from "./Users";
import {Preloader} from "../../common/Preloader";



class UsersC extends React.Component{

        componentDidMount() {
            this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
        }
       onChangePage=(pageNumber)=>{
            this.props.setCurrentPageAC(pageNumber)
           this.props.getUsersThunk(pageNumber, this.props.pageSize)
        }

    render()  {

            return <>
                {this.props.isLoading ? <Preloader/> :
                    <Users totalUsersCount = {this.props.totalUsersCount}
                           pageSize = {this.props.pageSize}
                           onChangePage ={this.onChangePage}

                           users = {this.props.users}
                           isDisabling = {this.props.isDisabling}
                           setDisabling = {this.props.setDisabling}
                           userDeleteThusk = {this.props.userDeleteThusk}
                           onUserSuscribeThusk = {this.props.onUserSuscribeThusk}
                           setCurrentPageAC = {this.props.setCurrentPageAC}
                />}
                </>
    }
}
export  default UsersC;