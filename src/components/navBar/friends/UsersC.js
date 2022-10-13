import React from 'react'
import userPhoto from "../../../assets/images/user.png";
import classes from "./Users.module.css";
import axios from "axios";
import {setCurrentPageAC} from "../../../dataBase/UsersReduser";

class UsersC extends React.Component{

        componentDidMount() {

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>
        {debugger
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

        }

    render()  {
            let pagesCount = Math.ceil( this.props.totalUsersCount/this.props.pageSize);
            let pages =[];
            for(let i = 1; i<=pagesCount; i++){
                pages.push(i);
            }
            let onChangePage=(pageNumber)=>{
                this.props.setCurrentPage(pageNumber);
                axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>
                {
                    this.props.setUsers(response.data.items)})
            }
            return <div>
        <div>
            {pages.map(page=>{return <span className ={this.props.currentPage===page && classes.selectedPage}
            onClick={()=>{onChangePage(page)}}>
                {page}
            </span>})}

        </div>
        {
            this.props.users.map(user => <div key={user.id}>
                <div >
                    <img src={user.photos.small!=null?user.photos.small:userPhoto } className={classes.avatar}/>
                </div>
                <div>
                    {user.name}
                </div>
                <div>
                    {user.subscription? <button onClick={()=> {this.props.unsubscribe(user.id)}}>Unsubscribe</button>:
                        <button onClick={()=>{this.props.subscribe(user.id)}}>Subscribe</button>}

                </div>
                <div>
                    {user.status}
                </div>
                <div>
                    {"user.location.country"}

                </div>
                <div>
                    {"user.location.city"}
                </div>
            </div>)}
    </div>
    }
}
export  default UsersC;