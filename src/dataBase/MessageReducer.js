const Counter ={
    messageId:4,
    dialogId:14
}



let messageReducer =(datebase,action)=>{
    switch (action.type){
        case 'ADD_MESSAGE':
            let newMessage={
            id:6,
            message:datebase.newMessageChar,
            dialogId:Counter.dialogId
            }
            Counter.dialogId+=1;
            datebase.messageData.push(newMessage);
            return datebase;
        case 'UPDATE_NEW_MESSAGE_CHAR':
            datebase.newMessageChar=action.newChar;
            return datebase;
        default: return datebase;
    } return datebase;
}

export   let addMessageActionCreator=()=>{
    return{
        type:'ADD_MESSAGE'
    }
}

export let updateNewMessageChar =(text)=> {
    return {
        type: 'UPDATE_NEW_MESSAGE_CHAR',
        newChar: text
    }
}
export default messageReducer;