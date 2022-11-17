import React from 'react';
import classes from './../Dialogs.module.css'





const Message =({message, messageId, deleteMessage})=>{
    return(
        <div>
            {message}
            <button onClick={() => {deleteMessage(messageId)}}>Delete</button>
        </div>
    )
}


export default Message;