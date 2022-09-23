import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import Profile from "../../content/Profile";
import {updateNewPostChar} from "../../../dataBase/DateBase";

const Dialogs = ({dialogData, messageData, addMessage, newMessageChar, updateNewMessageChar}) => {
    let  answerMessage = React.createRef();
    let addAnswer =()=>{
       let text = answerMessage.current.value;
        addMessage(text);
        updateNewMessageChar('');
    }
    console.log("000000000", dialogData)

    let dialogElements = dialogData
        .map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id} key ={dialog.id.toString()}/>));

    let messageElements = messageData
        .map((message)=>(<Message message={message.message} key ={message.dialogId.toString()}/>));

    let onMessageChange =()=>{
        let text = answerMessage.current.value;
        updateNewMessageChar(text)
    }
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogs}>Контакты</div>
            <div className={classes.dialogs}>Сообщения</div>
            <div className ={classes.dialog}>
                {dialogElements}
            </div>

            <div className={classes.message}>
                {messageElements}
                <div>
                    <textarea onChange={onMessageChange} ref = {answerMessage} value={newMessageChar}></textarea>
                    <div>
                        <button onClick= {addAnswer}> Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

 export default Dialogs;