const Counter ={
    messageId:4,
    dialogId:14
}

let initialState ={
    dialogData:[
        {id:1, name:"Vladislav" },
        {id:2, name:"Aslan" },
        {id:3, name:"Damir"},
        {id:4, name:"Mama" },
        {id:5, name:"Ryzilya"}
    ],
    messageData:[
        {id:1, message:"Привет!Как дела?", dialogId:11 },
        {id:3, message:"Мам, есть что нибудь вкусненькое?", dialogId:12 },
        {id:4, message:"Ты где?" ,dialogId:13},
    ],
    newMessageChar:"message"
}
let messageReducer =(datebase=initialState,action)=>{
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