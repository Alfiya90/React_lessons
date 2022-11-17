import {useNavigate} from "react-router";
import React from "react";
import classes from './navBar.module.css';
import DialogItem from "./dialogs/dialogItem/DialogItem";
import {connect} from "react-redux";




const NavBar = (props) =>{
    let dialogElements = props.dialogData
        .map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id} />));
    const navigate = useNavigate();

    return <nav className = {classes.nav}>
        <div className = {classes.style}>
            < a onClick={() => {
                navigate("/profile/" + props.authorisedUserId)
            }}>Profile</a>
        </div>
        <div className={classes.style}>
            <a onClick={() => {
                navigate("/dialogs")
            }}>Message</a>
        </div>
        <div className={classes.style}>
            <a onClick={() => {
                navigate("/users")
            }}>Users</a>
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

        <div>
            {dialogElements[0]}
            {dialogElements[1]}
            {dialogElements[2]}
        </div>
    </nav>
}
let mapStateToProps = (state) => {
    return {
        dialogData: state.messagePage.dialogData,
        authorisedUserId : state.auth.userId

    }
}

export default connect (mapStateToProps, {})(NavBar);