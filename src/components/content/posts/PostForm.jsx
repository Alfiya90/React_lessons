import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/formsControl/formsControl";
import {maxLengthCreator, requiredField} from "../../validators/validatorsForm";

const maxLength200 = maxLengthCreator(200);
export const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'addPostBody'} placeholder={"Enter post"} component = {Textarea}
                    validate={[requiredField, maxLength200]}/>
            </div>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export const ReduxPostForm = reduxForm({
    form: 'addPostForm'
})(PostForm)

