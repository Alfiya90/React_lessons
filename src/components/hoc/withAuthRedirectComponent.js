import React  from "react";
import {Navigate} from "react-router";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
})
export const withAuthRedirectComponent = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
            if(!this.props.isAuth){
                return <Navigate to = {'/login'}/>
            }
            return <Component {...this.props}/>
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
}