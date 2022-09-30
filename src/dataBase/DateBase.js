import  React from 'react';
import messageReducer from "./MessageReducer";
import profileReducer from "./ProfileReducer";

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
    addPost(){
        let newPost={
            id:6,
            message: this._dateBase.profilePage.newPostChar,
            likes:0,
            messageId:this.Counter.messageId
        };
        this.Counter.messageId+=1;
        this._dateBase.profilePage.postData.push(newPost);
        this.rerenderEntireTree(this._dateBase);
    },

    addMessage(){
        let newMessage={
            id:6,
            message:this._dateBase.messagePage.newMessageChar,
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
        debugger
        this._dateBase.messagePage=messageReducer(this._dateBase.messagePage, action);
        this._dateBase.profilePage=profileReducer(this._dateBase.profilePage,action);
        debugger
        this.rerenderEntireTree(this._dateBase);


        /*if (action.type==='ADD_POST'){
            let newPost={
                id:6,
                message: this._dateBase.profilePage.newPostChar,
                likes:0,
                messageId:this.Counter.messageId
            };
            this.Counter.messageId+=1;
            this._dateBase.profilePage.postData.push(newPost);
            this.rerenderEntireTree(this._dateBase);
        }
        /!*else if (action.type==='ADD_MESSAGE'){let newMessage={
            id:6,
            message:this._dateBase.messagePage.newMessageChar,
            dialogId:this.Counter.dialogId
            }
            this.Counter.dialogId+=1;
            this._dateBase.messagePage.messageData.push(newMessage)
            this.rerenderEntireTree(this._dateBase);
        }*!/
        else if(action.type==='UPDATE_NEW_POST_CHAR'){
            this._dateBase.profilePage.newPostChar=action.newChar;

        }/!*else if(action.type==='UPDATE_NEW_MESSAGE_CHAR'){
            this._dateBase.messagePage.newMessageChar=action.newChar;
            }*!/*/
        }

}




export default store;

