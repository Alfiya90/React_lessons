import React from 'react'
import axios from "axios";
import Users from "./Users";
import {Preloader} from "../../common/Preloader";

class UsersC extends React.Component{

        componentDidMount() {
            this.props.setIsLoading(true)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
                {withCredentials: true}).then(response=> {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
            this.props.setIsLoading(false)
            })
        }
       onChangePage=(pageNumber)=>{
           this.props.setIsLoading(true)
            this.props.setCurrentPage(pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>
            {
                this.props.setUsers(response.data.items)
                this.props.setIsLoading(false)
            })
        }

    render()  {

            return <>
                {this.props.isLoading ? <Preloader/> :
                    <Users totalUsersCount = {this.props.totalUsersCount}
                           pageSize = {this.props.pageSize}
                           onChangePage ={this.onChangePage}
                           subscribe = {this.props.subscribe}
                           unsubscribe = {this.props.unsubscribe}
                           users = {this.props.users}
                />}
                </>
    }
}
export  default UsersC;