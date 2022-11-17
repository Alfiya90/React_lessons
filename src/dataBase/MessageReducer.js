import message from "../components/navBar/dialogs/Message/Message";

const Counter = {
    messageId:4,
    dialogId:14,
    id: 6
}

let initialState = {
    dialogData: [
        { id:1, name:"Vladislav"},
        { id:2, name:"Aslan"},
        { id:3, name:"Damir"},
        { id:4, name:"Mama"},
        { id:5, name:"Ryzilya"}
    ],
    messageData: [
        { id:1, message:"Привет!Как дела?", dialogId:11},
        { id:3, message:"Мам, есть что нибудь вкусненькое?", dialogId:12},
        { id:4, message:"Ты где?" ,dialogId:13},
    ],
    newMessageChar:"message"
}
let messageReducer =(state=initialState,action) => {
    switch (action.type) {
        case 'ADD_MESSAGE': {
            let newMessage = {
            id: Counter.id,
            message: action.newMessageBody,
            dialogId: Counter.dialogId
            }
            Counter.dialogId += 1;
            Counter.id ++
            let copyState = {...state}
            copyState.messageData = [...state.messageData]
            copyState.messageData.push(newMessage);
            return copyState;
        }
        case 'UPDATE_NEW_MESSAGE_CHAR':
            let copyState = {...state}
            copyState.newMessageChar = action.newChar;
            return copyState;
        case 'DELETE_MESSAGE': {
            return{
                ...state, messageData: state.messageData.filter(mes => mes.id!== action.messageId)
            }

        }
        default: return state;
    } return state;
}

export   let addMessageActionCreator = (newMessageBody) => {
    return{
        type:'ADD_MESSAGE',
        newMessageBody
    }
}

export let updateNewMessageChar = (text) => {
    return {
        type: 'UPDATE_NEW_MESSAGE_CHAR',
        newChar: text
    }
}
export let deleteMessageAC = (messageId) => {
    return {
        type: 'DELETE_MESSAGE',
        messageId
    }
}
export default messageReducer;