import React from "react";
import classes from './Content.module.css';
import Post from "./posts/Posts";
console.log(classes)


const Content =() => {
    return <div className= {classes.content}>
        <div>
            <img src='https://www.hdwallpaperspulse.com/wp-content/uploads/2018/01/19/blue-sea-natural-image.jpg'/>
        </div>
        <Post/>
    </div>

}

export default Content;