import React from 'react';
import {updateNewMessageChar, addMessageActionCreator} from "../../../dataBase/MessageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


const DialogsContainer = () => {
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
                        isAuth = {store.getState().auth.isAuth}
                    />)
            }}
        </StoreContext.Consumer>
    )
}

let mapStateProps=(state)=>{
    return{
        newMessageChar: state.messagePage.newMessageChar,
        dialogData: state.messagePage.dialogData,
        messageData: state.messagePage.messageData,
        isAuth: state.auth.isAuth
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