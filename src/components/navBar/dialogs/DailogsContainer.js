import React from 'react';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageChar, addMessageActionCreator} from "../../../dataBase/MessageReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = ({dialogData, messageData,  newMessageChar, dispatch}) => {
    debugger
    let  answerMessage = React.createRef();
    let addAnswer =()=>{
        dispatch(addMessageActionCreator());
        dispatch(updateNewMessageChar(''));
    }

    let onMessageChange =(text)=>{
        dispatch(updateNewMessageChar(text));
    }
    return(
        <Dialogs
            updateNewMessageText={onMessageChange}
            addMessage ={addAnswer}
            newMessageChar={newMessageChar}
            dialogData={dialogData}
            messageData={messageData}
        />
    )

}

export default DialogsContainer;