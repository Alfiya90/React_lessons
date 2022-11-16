import React from "react"
import classes from "./Users.module.css";
import userPhoto from "../../../assets/images/user.png";
import {useNavigate} from "react-router";


let OneUser = ({users, isDisabling, userDeleteThunk, onUserSubscribeThunk,   }) => {
    const navigate = useNavigate();

    return <div>
            { users.map(user => <div key={user.id}>
                <div>
                    <a onClick ={() => { navigate ('/profile/' + user.id)}} >
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.avatar}/>
                    </a>
                </div>

                <div>
                    {user.subscription ? <button disabled = {isDisabling.some(id => id === user.id)} onClick={() => {
                            userDeleteThunk(user.id)
                        }}>Unsubscribe</button> :
                        <button disabled = {isDisabling.some(id => id === user.id)} onClick={() => {
                            onUserSubscribeThunk(user.id)
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
            </div>)
            }
    </div>

}

export default OneUser;