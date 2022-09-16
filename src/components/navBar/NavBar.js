import React from "react";
import classes from './navBar.module.css';

const NavBar = () =>{
    return <nav className = {classes.nav}>
        <div className = {classes.style}>
            <a href = "/profile">Profile</a>
        </div>
        <div className = {classes.style} >
            <a href = "/ dialogs">Message</a>
        </div>
        <div className = {classes.style} >
            <a href = "/news">News</a>
        </div>
        <div className = {classes.style} >
            <a href = "/music">Music</a>
        </div>
        <p></p>
        <div className = {classes.styleSetting}>
            <a href ="/setting">Setting</a>
        </div>
    </nav>
}

export default NavBar;