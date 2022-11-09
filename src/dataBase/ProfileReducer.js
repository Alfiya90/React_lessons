
const Counter={
    messageId:4,
    dialogId:14
}

let initialState = {
        postData:[
            {id:1, message:"Немного обо мне", likes:4, messageId:1},
            {id:3, message:"Важней всего погода в доме?", likes:8, messageId:2},
            {id:4, message:"Вкусный завтрак", likes:5, messageId:3}
        ],
        newPostChar:"post",
        profile: null
    }

let profileReducer=(state=initialState, action)=>{
    switch (action.type){
        case'ADD_POST': {

            let newPost = {
                id: 6,
                message: state.newPostChar,
                likes: 0,
                messageId: Counter.messageId
            };
            let copyState ={...state}
            copyState.postData=[...state.postData]
            Counter.messageId += 1;
            copyState.postData.push(newPost);
            debugger;
            return copyState;
        }
        case 'UPDATE_NEW_POST_CHAR':{
            state.newPostChar=action.newChar;
            let copyState={...state}
            return copyState;
        }
        case 'SET_USER_PROFILE':{
            return {
            ...state, profile: action.profile
            }
        }

            default: return state;
    }
    return state;
}
export let addPostActionCreator=()=>{
    return {
        type:'ADD_POST'
    }
}
export let updateNewPostCharActionCreator=(text)=>{
    return{
        type:'UPDATE_NEW_POST_CHAR',
        newChar:text
    }
}
export let setUserProfile = (profile) => {
    return {
        type: 'SET_USER_PROFILE',
        profile

    }
}
export default profileReducer;