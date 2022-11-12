import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/formsControl/formsControl";
import {maxLengthCreator, minLengthCreator, requiredField} from "../validators/validatorsForm";
import {login} from "../../dataBase/authReducer";
import {connect} from "react-redux";
import {Navigate} from "react-router";
import classes from '../common/formsControl/formControl.module.css'
import {api} from "../../api";


const maxLength30 = maxLengthCreator(30)
const minLength6 = minLengthCreator(6)
const minLength3 = minLengthCreator(3)

const LoginForm = (props) => {
        return (
            <div>
                <form  onSubmit={props.handleSubmit}>
                    <div>
                        <Field placeholder = {'email'} name = {'email'} component = {Input}
                               validate = {[requiredField, maxLength30, minLength3]}/>
                    </div>
                    <div>
                        <Field placeholder = {'password'} name = {'password'} component = {Input}
                               type = {'password'} validate = {[requiredField, minLength6, maxLength30]}/>
                    </div>
                    <div>
                        <Field type = {'checkbox'} name = {'rememberMe'} component = {'input'} />Remember me
                    </div>
                    <div>
                        <button >Login</button>
                    </div>
                    {props.error && <div className={classes.error}>
                        {props.error}
                    </div>}

                </form>
            </div>
            )

}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        props.login (formData.email, formData.password,formData.rememberMe)
    }
    return (
        <div>
            {props.isAuth && <Navigate to = {`/profile/${props.authorizedId}`}></Navigate> }
        <div>
                <h1>LOGIN</h1>
                <LoginReduxForm onSubmit = {onSubmit} />
        </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        authorizedId: state.auth.userId
    }

}

export default connect (mapStateToProps, {login})(Login)