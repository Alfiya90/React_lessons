import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import Profile from "../../content/Profile";
import {updateNewPostChar} from "../../../dataBase/DateBase";

const Dialogs = ({dialogData, messageData, addMessage, newMessageChar, updateNewMessageChar,dispatch}) => {
    let  answerMessage = React.createRef();
    let addAnswer =()=>{
        debugger;
       let text = answerMessage.current.value;
        dispatch({type:'ADD_MESSAGE', sendMessage:text});
        /*dispatch({type:'UPDATE_NEW_MESSAGE_CHAR', newChar:''});*/
    }

    let dialogElements = dialogData
        .map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id} key ={dialog.id.toString()}/>));

    let messageElements = messageData
        .map((message)=>(<Message message={message.message} key ={message.dialogId.toString()}/>));

    let onMessageChange =()=>{
        debugger;
        let text = answerMessage.current.value;
        dispatch({type:'UPDATE_NEW_MESSAGE_CHAR', newChar:text});
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