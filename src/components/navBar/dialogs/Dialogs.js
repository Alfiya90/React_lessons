import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import Profile from "../../content/Profile";

const Dialogs = (props) => {
    let  answerMessage = React.createRef();
    let addAnswer =(props)=>{
       let text = answerMessage.current.value;
       props.addMessage(text);
    }

    let dialogElements = props.dialogData.dialogData
        .map((dialog)=>(<DialogItem name={dialog.name} id={dialog.id} />));

    let messageElements = props.messageData.messageData
        .map((message)=>(<Message message={message.message}/>));
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
                    <textarea ref = {answerMessage}></textarea>
                    <div>
                        <button onClick= {addAnswer}> Отправить</button>
                    </div>
                </div>
            </div>

        </div>
    )

}

 export default Dialogs;