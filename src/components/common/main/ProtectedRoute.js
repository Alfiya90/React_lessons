import {
    useNavigate,
} from 'react-router-dom';
import React, {useEffect} from "react";
import {connect} from "react-redux";

const ProtectedRoute = ({ children, isAuth }) => {
    const navigation = useNavigate();
    useEffect(() => {
        if (!isAuth) {
            navigation('/login', {replace: true})
        }
    })
    return children;
};
let masStateToProps = (state) =>  {
    return{
        isAuth: state.auth.isAuth
    }

}

export default connect(masStateToProps,null)(ProtectedRoute)