import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../validators/validatorsForm";
import {Textarea} from "../../../common/formsControl/formsControl";


let maxLength50 = maxLengthCreator(50);
export const DialogForm = (props) => {

    return(
        <form onSubmit = {props.handleSubmit}>
            <Field name = {'newMessageBody'} placeholder={'Add message'} component={Textarea}
                    validate = {[requiredField, maxLength50]}/>
            <div>
                <button>Add</button>
            </div>
        </form>
    )
}

export const ReduxDialogForm = reduxForm({
    form: 'dialogAddMessageForm'
})(DialogForm)

