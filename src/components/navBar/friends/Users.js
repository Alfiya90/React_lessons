import React from "react"
import classes from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import {useNavigate} from "react-router";
import axios from "axios";
import {api} from "../../../api";


let Users = (props) => {
    let pagesCount = Math.ceil( props.totalUsersCount/props.pageSize);
    let pages =[];
    for(let i = 1; i <= pagesCount; i++){
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
                    {user.subscription ? <button disabled = {props.isDisabling.some(id => id === user.id)} onClick={() => {
                        props.userDeleteThunk(user.id)
                       /* props.setDisabling(true, user.id);*/

                        /*api.userDelete(user.id)
                        .then((data) => {
                                if(data.resultCode == 0){
                                    props.unsubscribe(user.id)
                                }
                            props.setDisabling(false, user.id);
                        })*/

                        }}>Unsubscribe</button> :
                        <button disabled = {props.isDisabling.some(id => id === user.id)} onClick={() => {
                            props.onUserSubscribeThunk(user.id)
                        /*    props.setDisabling(true, user.id);
                            api.onUserSuscribe(user.id).then((data) => {
                                    if(data.resultCode == 0){
                                        props.subscribe(user.id)
                                    }
                                props.setDisabling(false, user.id);
                            })*/

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