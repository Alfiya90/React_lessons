import React from "react";
import classes from "./Users.module.css"
import axios from "axios";
import userPhoto from "../../../assets/images/user.png"

let Users =({users, subscribe, unsubscribe, setUsers})=>{
    let getUsers=()=>{
        if (users.length===0){
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>
            {debugger
                setUsers(response.data.items)})
        }
    }


    return <div>
                <button onClick={getUsers}>Get Users</button>
            {
                users.map(user => <div key={user.id}>
                                    <div >
                                        <img src={user.photos.small!=null?user.photos.small:userPhoto } className={classes.avatar}/>
                                    </div>
                                    <div>
                                        {user.name}
                                    </div>
                                    <div>
                                        {user.subscription? <button onClick={()=> {unsubscribe(user.id)}}>Unsubscribe</button>:
                                            <button onClick={()=>{subscribe(user.id)}}>Subscribe</button>}

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