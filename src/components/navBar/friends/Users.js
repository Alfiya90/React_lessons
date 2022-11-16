import React from "react"
import PaginatorOfUsers from "./PaginatorOfUsears";
import OneUser from "./OneUser";





let Users = (props) => {
    return <div >
            <div>
                <PaginatorOfUsers totalCount = {props.totalUsersCount}
                                  pageSize ={props.pageSize}
                                  currentPage = {props.currentPage}
                                  onChangePage = {props.onChangePage}
                                  isLoading = {props.isLoading}/>
            </div>
            <div>
                <OneUser users = {props.users}
                         isDisabling = {props.isDisabling}
                         userDeleteThunk = {props.userDeleteThunk}
                         onUserSubscribeThunk = {props. onUserSubscribeThunk}
                />
            </div>
    </div>


}

export default Users;