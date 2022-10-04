import React from "react";
import classes from "./Users.module.css"
import axios from "axios";

let Users =({users, subscribe, unsubscribe, setUsers})=>{
    debugger;
    if (users.length===0){
        setUsers(
            [   {id:1,
                name:'Ylia.I.',
                image:'https://pixelbox.ru/wp-content/uploads/2021/09/avatar-boys-vk-84.jpg' ,
                subscription:true,
                status:'I love my family',
                location:{country:'Russia' ,
                    city:'Ufa'} },
                {id:2,
                    name:'Emil',
                    image:'https://weblinks.ru/wp-content/uploads/2021/05/1376-fractal-tiger-art-wallpaper-wallchan-1024x768-2.jpg',
                    subscription:false,
                    status:'I am student',
                    location:{country:'Russia' , city:'Sankt-Peterburg'}},
                {id:3,
                    name:'Ilnara',
                    image:'https://wonder-day.com/wp-content/uploads/2020/03/Wonder-Day-Ava-91.jpg',
                    subscription:false,
                    status:'Life is wonderful ',
                    location:{country:'Russia' , city:'Sankt-Peterburg'}},
                {id:4,
                    name:'Anna',
                    image:'https://papik.pro/uploads/posts/2021-09/1631762381_7-papik-pro-p-prikolnie-avatarki-risunki-7.jpg',
                    subscription:true,
                    status:'Hello, my friends! ',
                    location:{country:'France' , city:'Paris'}}]
        )
        /*axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{setUsers()});*/
    }
    debugger;
    return <div>
            {
                users.map(user => <div key={user.id}>
                                    <div >
                                        <img src={user.image} className={classes.avatar}/>
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
                                        {user.location.country}

                                    </div>
                                    <div>
                                        {user.location.city}
                                    </div>
                               </div>)}
        </div>

}

export default Users;