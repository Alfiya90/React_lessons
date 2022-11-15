import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './dialogItem/DialogItem';
import Message from './Message/Message';
import {Navigate} from "react-router";
import { ReduxDialogForm} from "./Message/DialogFormContainer";


const Dialogs = ({dialogData, messageData,addMessage, isAuth}) => {


    let dialogElements = dialogData
        .map((dialog) => (<DialogItem name={dialog.name} id={dialog.id} key ={dialog.id.toString()}/>));

    let messageElements = messageData
        .map((message) => (<Message message={message.message} key ={message.dialogId.toString()}/>));


    if(!isAuth){
        return <Navigate to = {'/login'}/>
    }
    let addNewMessage = (values) => {
        addMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs}>Контакты</div>
            <div className={classes.dialogs}>Сообщения</div>
            <div className ={classes.dialog}>
                {dialogElements}
            </div>

            <div className={classes.message}>
                {messageElements}
                <div>
                    <ReduxDialogForm onSubmit = {addNewMessage} />
                </div>
            </div>


        </div>
    )

}

 export default Dialogs;