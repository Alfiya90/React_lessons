import React from "react";
import classes from './NavBar.module.css';

const NavBar = () =>{
   return <nav className = {classes.nav}>
        <div className = {classes.style}>
            <a>Profile</a>
        </div>
        <div className = {classes.style} >
            <a>Message</a>
        </div>
        <div className = {classes.style} >
            <a>News</a>
        </div>
        <div className = {classes.style} >
            <a>Music</a>
        </div>
        <p></p>
        <div className = {classes.styleSetting}>
            <a>Settings</a>
        </div>
    </nav>
}

export default NavBar;
