import React from 'react';
import './Header.css'
import axios from 'axios';
import Header from "./Header";
import {setAuthParam} from "../../dataBase/authReducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response=>
        {  debugger
            console.log(response)
            if (response.data.resultCode === 0) {
                let {id,  login, email} = response.data.data
                this.props.setAuthParam({id, login, email});
            }
        }

        )
    }
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
}) ;
export default connect(mapStateToProps, {setAuthParam})(HeaderContainer) ;
