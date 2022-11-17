import React from 'react';
import {updateNewMessageChar, addMessageActionCreator, deleteMessageAC} from "../../../dataBase/MessageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";


const DialogsContainer = () => {

    /*return (
        <StoreContext.Consumer>
            { (store)=>{
                let addAnswer =()=>{
                    store.dispatch(addMessageActionCreator(store.getState().newMessageBody));
                    store.dispatch(updateNewMessageChar(''));
                }

                let onMessageChange =(text) => {
                    store.dispatch(updateNewMessageChar(text));
                }
                let deleteMessage = (dialogId) => {
                    debugger
                    store.dispatch (deleteMessageAC(dialogId))
                }

                return(<Dialogs
                        updateNewMessageText={onMessageChange}
                        addMessage ={addAnswer}
                        dialogData={store.getState().messagePage.dialogData}
                        messageData={store.getState().messagePage.messageData}
                        isAuth = {store.getState().auth.isAuth}
                        dialogId = {store.getState().messageData.id}
                        deleteMessage = {deleteMessage}
                    />)
            }}
        </StoreContext.Consumer>
    )*/
}

let mapStateProps=(state)=>{
    return{
        newMessageChar: state.messagePage.newMessageChar,
        dialogData: state.messagePage.dialogData,
        messageData: state.messagePage.messageData,
        isAuth: state.auth.isAuth,
        newMessageBody: state.form.newMessageBody,
    }
}
let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageText:(text)=>{
            dispatch(updateNewMessageChar(text));
        },
        addMessage:(newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
            dispatch(updateNewMessageChar(''));
        },
        deleteMessage: (messageId) => {
            dispatch (deleteMessageAC(messageId))
        }
    }
}
let withAuthContainer = withAuthRedirectComponent(Dialogs)
export let SuperDialogsContainer =connect(mapStateProps,mapDispatchToProps)(withAuthContainer)

export default DialogsContainer;