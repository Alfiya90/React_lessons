import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import Profile from "../../content/Profile";

const Dialogs = (props) => {


    let dialogElements = props.dialogData
        .map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id} />));

    let messageElements = props.messageData
        .map((message)=>(<Message message={message.message}/>));
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs}>Контакты</div>
            <div className={classes.dialogs}>Сообщения</div>
            <div className ={classes.dialog}>
                {dialogElements}
                {/*<DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>*/}
            </div>

            <div className={classes.message}>
                {messageElements}
                {/*<Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>*/}
            </div>
        </div>
    )

}

 export default Dialogs;