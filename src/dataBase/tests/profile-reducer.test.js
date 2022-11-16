import React from "react";
import profileReducer, {addPostActionCreator, deletePostActionCreator, setStatusAC} from "../ProfileReducer";


it('post length should be incremented', () => {
    let action = addPostActionCreator('You will do it!');
    let state = {
        postData: [
            {id: 1, message: "Немного обо мне", likes: 4, messageId: 1},
            {id: 3, message: "Важней всего погода в доме", likes: 8, messageId: 2},
            {id: 4, message: "Вкусный завтрак", likes: 5, messageId: 3}
        ]
    }
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(4)
    expect(newState.postData[3].message).toBe('You will do it!')
})

it('post message should be correct', () => {
    let action = addPostActionCreator('You will do it!');
    let state = {
        postData: [
            {id: 1, message: "Немного обо мне", likes: 4, messageId: 1},
            {id: 3, message: "Важней всего погода в доме", likes: 8, messageId: 2},
            {id: 4, message: "Вкусный завтрак", likes: 5, messageId: 3}
        ]
    }
    let newState = profileReducer(state, action);
    expect(newState.postData[3].message).toBe('You will do it!')
})

it('post length should be increment by correct id after delete', () => {
    let action = deletePostActionCreator(3);
    let state = {
        postData: [
            {id: 1, message: "Немного обо мне", likes: 4, messageId: 1},
            {id: 3, message: "Важней всего погода в доме", likes: 8, messageId: 2},
            {id: 4, message: "Вкусный завтрак", likes: 5, messageId: 3}
        ]
    }
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(2)
})
it('post length should not  be increment by incorrect id after delete', () => {
    let action = deletePostActionCreator(1000);
    let state = {
        postData: [
            {id: 1, message: "Немного обо мне", likes: 4, messageId: 1},
            {id: 3, message: "Важней всего погода в доме", likes: 8, messageId: 2},
            {id: 4, message: "Вкусный завтрак", likes: 5, messageId: 3}
        ]
    }
    let newState = profileReducer(state, action);
    expect(newState.postData.length).toBe(3)
})

it('status should be correct', () => {
    let action = setStatusAC('YO');
    let state = {
        status: ''
    }
    let newState = profileReducer(state, action);
    expect(newState.status).toBe('YO')
})





