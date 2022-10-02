import React from "react";
import {updateNewPostCharActionCreator, addPostActionCreator} from "../../../dataBase/ProfileReducer";
import Posts from './Posts'
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";

/*const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let addingPostText = () => {
                    store.dispatch(addPostActionCreator());
                    store.dispatch(updateNewPostCharActionCreator(''))
                }
                let onPostTextChange = (text) => {
                    store.dispatch(updateNewPostCharActionCreator(text));
                }
                let state = store.getState().profilePage;
                return <Posts updateNewPost={onPostTextChange}
                              addPost={addingPostText}
                              postData={state.postData}
                              newPostChar={state.newPostChar}/>
            }
            }
        </StoreContext.Consumer>
    )
}*/


let mapStateToProps=(state)=>{
        return{
            postData: state.profilePage.postData,
            newPostChar: state.profilePage.newPostChar
        }
}

let mapDispatchToProps=(dispatch)=>{
        return{
            addPost: ()=> {
                dispatch(addPostActionCreator());
                dispatch(updateNewPostCharActionCreator(''))
                },
            updateNewPost:(text)=>{
                dispatch(updateNewPostCharActionCreator(text));
            }

        }
}

export let SuperPostsContainer= connect(mapStateToProps, mapDispatchToProps)(Posts);


