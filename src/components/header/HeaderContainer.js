import React from 'react';
import './Header.css'
import Header from "./Header";
import {isAuthing, logout, setAuthParam} from "../../dataBase/authReducer";
import {connect} from "react-redux";


class HeaderContainer extends React.Component {
 /*   componentDidMount() {
        this.props.isAuthing()
       /!* api.isAuthMe().then(data=>
        {

            if (data.resultCode === 0) {
                let {id,  login, email} = data.data
                this.props.setAuthParam({id, login, email});
            }
        })*!/
    }*/
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
}} ;
export default connect(mapStateToProps, {setAuthParam, isAuthing, logout})(HeaderContainer) ;
