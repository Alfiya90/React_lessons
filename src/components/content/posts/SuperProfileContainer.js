import React, {useEffect} from 'react';
import axios from "axios";
import Profile from "../Profile";
import {setUserProfile} from "../../../dataBase/ProfileReducer";
import {connect} from "react-redux";
import {useParams} from "react-router";


const SuperProfileContainer = (props) => {
    let params = useParams()
    let userId = params.userId
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            props.setUserProfile(response.data);
        })
    }
    return (
        <div>
            <Profile {...props} profile={props.profile}/>
        </div>)

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})


/*function withRouter(ProfileContainer) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
                let params = useParams();
        return (
            <ProfileContainer
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}*/

export default connect(mapStateToProps, {setUserProfile})(SuperProfileContainer);