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
let messageReducer =(state=initialState,action)=>{
    switch (action.type){
        case 'ADD_MESSAGE':
            let newMessage={
            id:6,
            message:state.newMessageChar,
            dialogId:Counter.dialogId
            }
            Counter.dialogId+=1;
            state.messageData.push(newMessage);
            return state;
        case 'UPDATE_NEW_MESSAGE_CHAR':
            state.newMessageChar=action.newChar;
            return state;
        default: return state;
    } return state;
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