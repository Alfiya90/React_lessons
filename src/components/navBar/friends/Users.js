import React from "react"
import classes from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import {useNavigate} from "react-router";
import axios from "axios";


let Users = (props) => {
    let pagesCount = Math.ceil( props.totalUsersCount/props.pageSize);
    let pages =[];
    for(let i = 1; i<=pagesCount; i++){
        pages.push(i);
    }
    const navigate = useNavigate();

    return <div>
        <div>
            {pages.map(page => {
                return <span className={props.currentPage === page && classes.selectedPage}
                             onClick={() => {
                                 props.onChangePage(page)
                             }}>
                {page}
            </span>
            })}

        </div>
        {
            props.users.map(user => <div key={user.id}>
                <div>
                    <a onClick ={() => { navigate ('/profile/' + user.id)}} >
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.avatar}/>
                    </a>
                </div>

                <div>
                    {user.subscription ? <button onClick={() => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                {withCredentials: true,
                                    headers:{
                                        'API-KEY': '0418e6f8-3a33-4887-983b-7935ce803114'
                                    }})
                        .then((response) => {
                                if(response.data.resultCode == 0){
                                    props.unsubscribe(user.id)
                                }
                        })

                        }}>Unsubscribe</button> :
                        <button onClick={() => {
                            axios.post( `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                {withCredentials: true,
                                    headers:{
                                        'API-KEY': '0418e6f8-3a33-4887-983b-7935ce803114'
                                    }}).then((response) => {
                                    if(response.data.resultCode == 0){
                                        props.subscribe(user.id)
                                    }
                            })

                        }}>Subscribe</button>}

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

export default Users;