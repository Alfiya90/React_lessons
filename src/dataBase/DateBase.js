import  React from 'react';

let store={
    _dateBase:{
        profilePage:{
            postData:[
                {id:1, message:"Немного обо мне", likes:4, messageId:1},
                {id:3, message:"Важней всего погода в доме?", likes:8, messageId:2},
                {id:4, message:"Вкусный завтрак", likes:5, messageId:3}
            ],
            newPostChar:"post"

        },

        messagePage:{
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
    },
    getDataBase(){
        return this._dateBase;
    },
    rerenderEntireTree(){
    },

    Counter:{
        messageId:4,
        dialogId:14
    },
    addPost(postMessage){
        let newPost={
            id:6,
            message: postMessage,
            likes:0,
            messageId:this.Counter.messageId
        };
        this.Counter.messageId+=1;
        this._dateBase.profilePage.postData.push(newPost);
        this.rerenderEntireTree(this._dateBase);
    },

    addMessage(sendMessage){
        let newMessage={
            id:6,
            message:sendMessage,
            dialogId:this.Counter.dialogId
        }
        this.Counter.dialogId+=1;
        this._dateBase.messagePage.messageData.push(newMessage)
        this.rerenderEntireTree(this._dateBase);
    },
    updateNewPostChar(newChar){
        this._dateBase.profilePage.newPostChar=newChar;
        this.rerenderEntireTree(this._dateBase)
    },
    updateNewMessageChar(newChar){
        this._dateBase.messagePage.newMessageChar=newChar;
        this.rerenderEntireTree(this._dateBase)
    },
    subscribe(observer){
        this.rerenderEntireTree=observer;
    },
    dispatch(action){
        debugger;
        if (action.type==='ADD_POST'){
            let newPost={
                id:6,
                message: action.postMessage,
                likes:0,
                messageId:this.Counter.messageId
            };
            this.Counter.messageId+=1;
            this._dateBase.profilePage.postData.push(newPost);
            this.rerenderEntireTree(this._dateBase);
        }
        else if (action.type==='ADD_MESSAGE'){let newMessage={
            id:6,
            message:action.sendMessage,
            dialogId:this.Counter.dialogId
            }
            this.Counter.dialogId+=1;
            this._dateBase.messagePage.messageData.push(newMessage)
            this.rerenderEntireTree(this._dateBase);
        }
        else if(action.type==='UPDATE_NEW_POST_CHAR'){
            this._dateBase.profilePage.newPostChar=action.newChar;
            this.rerenderEntireTree(this._dateBase)
        }else if(action.type==='UPDATE_NEW_MESSAGE_CHAR'){
            this._dateBase.messagePage.newMessageChar=action.newChar;
            this.rerenderEntireTree(this._dateBase)}
        }

}



export default store;

/*
 let rerenderEntireTree=()=>{

}

let dateBase ={
    profilePage:{
        postData:[
            {id:1, message:"Немного обо мне", likes:4, messageId:1},
            {id:3, message:"Важней всего погода в доме?", likes:8, messageId:2},
            {id:4, message:"Вкусный завтрак", likes:5, messageId:3}
        ]

    },

    messagePage:{
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
        ]
    }
}
const Counter ={
    messageId:4,
    dialogId:14
}
 export let addPost=(postMessage) => {
    let newPost={
        id:6,
        message: postMessage,
        likes:0,
        messageId:Counter.messageId
        };
    Counter.messageId+=1;
    dateBase.profilePage.postData.push(newPost);
     rerenderEntireTree(dateBase);
    }

export let addMessage=(sendMessage)=>{
    let newMessage={
        id:6,
        message:sendMessage,
        dialogId:Counter.dialogId
    }
    Counter.dialogId+=1;
    dateBase.messagePage.messageData.push(newMessage)
     rerenderEntireTree(dateBase);
}

export let updateNewPostChar=(newChar)=>{
    dateBase.profilePage.newPostChar=newChar;
    rerenderEntireTree(dateBase)
}

export let updateNewMessageChar=(newChar)=>{
    dateBase.messagePage.newMessageChar=newChar;
    rerenderEntireTree(dateBase)
}

export  const subscribe=(observer)=>{
    rerenderEntireTree=observer;
}

export default dateBase;*/
