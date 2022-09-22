import {useNavigate} from "react-router";
import React from "react";
import classes from './navBar.module.css';

const NavBar = () =>{
    const navigate = useNavigate();
    return <nav className = {classes.nav}>
        <div className = {classes.style}>
            < a onClick={() => {
                navigate("/profile")
            }}>Profile</a>
        </div>
        <div className={classes.style}>
            <a onClick={() => {
                navigate("/dialogs")
            }}>Message</a>
        </div>
        <div className={classes.style}>
            <a onClick={() => {
                navigate("/news")
            }}>News</a>
        </div>
        <div className={classes.style}>
            <a onClick={() => {
                navigate("/music")
            }}>Music</a>
        </div>
        <p></p>
        <div className={classes.style}>
            <a onClick={() => {
                navigate("/setting")
            }}>Setting</a>
        </div>
    </nav>
}
export default NavBar;