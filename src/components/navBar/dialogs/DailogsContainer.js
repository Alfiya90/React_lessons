import React from 'react';
import DialogItem from "./dialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageChar, addMessageActionCreator} from "../../../dataBase/MessageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


const DialogsContainer = ({dialogData, messageData,  newMessageChar, dispatch}) => {
    return (
        <StoreContext.Consumer>
            { (store)=>{
                let addAnswer =()=>{
                    store.dispatch(addMessageActionCreator());
                    store.dispatch(updateNewMessageChar(''));
                }

                let onMessageChange =(text)=>{
                    store.dispatch(updateNewMessageChar(text));
                }
                return(<Dialogs
                        updateNewMessageText={onMessageChange}
                        addMessage ={addAnswer}
                        newMessageChar={store.getState().messagePage.newMessageChar}
                        dialogData={store.getState().messagePage.dialogData}
                        messageData={store.getState().messagePage.messageData}
                    />)
            }}
        </StoreContext.Consumer>
    )
}

let mapStateProps=(state)=>{
    return{
        newMessageChar: state.messagePage.newMessageChar,
        dialogData: state.messagePage.dialogData,
        messageData: state.messagePage.messageData
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageText:(text)=>{
            dispatch(updateNewMessageChar(text));
        },
        addMessage:()=>{
            dispatch(addMessageActionCreator());
            dispatch(updateNewMessageChar(''));
        }
    }
}

export let SuperDialogsContainer =connect(mapStateProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;