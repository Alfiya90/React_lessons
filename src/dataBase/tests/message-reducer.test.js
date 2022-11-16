
import React from "react";
import messageReducer, {addMessageActionCreator, deleteMessageAC} from "../MessageReducer";

it('message length should be increment', () => {
    let action = addMessageActionCreator('YO');
    let state = {
        messageData: [
                { id:1, message:"Привет!Как дела?", dialogId:11},
                { id:3, message:"Мам, есть что нибудь вкусненькое?", dialogId:12},
                { id:4, message:"Ты где?" ,dialogId:13}
            ]
    }
    let newState = messageReducer(state, action);
    expect(newState.messageData.length).toBe(4)
})

it('message text should be correct', () => {
    let action = deleteMessageAC(4);
    let state = {
        messageData: [
            { id:1, message:"Привет!Как дела?", dialogId:11},
            { id:3, message:"Мам, есть что нибудь вкусненькое?", dialogId:12},
            { id:4, message:"Ты где?" ,dialogId:13}
        ]
    }
    let newState = messageReducer(state, action);
    expect(newState.messageData.length).toBe(2)
})

it('message text should not be decrement dy incorrect id', () => {
    let action = deleteMessageAC(8);
    let state = {
        messageData: [
            { id:1, message:"Привет!Как дела?", dialogId:11},
            { id:3, message:"Мам, есть что нибудь вкусненькое?", dialogId:12},
            { id:4, message:"Ты где?" ,dialogId:13}
        ]
    }
    let newState = messageReducer(state, action);
    expect(newState.messageData.length).toBe(3)
})
