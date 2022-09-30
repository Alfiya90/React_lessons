import dateBase from "./DateBase";
const Counter={
    messageId:4,
    dialogId:14
}


let profileReducer=(dateBase, action)=>{
    debugger;
    switch (action.type){
        case'ADD_POST':
            let newPost={
                id:6,
                message: dateBase.newPostChar,
                likes:0,
                messageId:Counter.messageId
            };
            Counter.messageId+=1;
            dateBase.postData.push(newPost);
            debugger;
            return dateBase;

        case 'UPDATE_NEW_POST_CHAR':
            dateBase.newPostChar=action.newChar;
            return dateBase;
        default: return dateBase;
    }
    return dateBase;
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
export default profileReducer;