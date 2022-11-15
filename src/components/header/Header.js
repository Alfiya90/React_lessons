import React from "react";
import './Header.css'
import { useNavigate} from "react-router";


const Header = (props) => {
    let navigate = useNavigate();

    return (
        <header className='header'>
            <img src='https://getsharex.com/img/ShareX_Logo_1024.png'/>
            <div className='loginBlock'>
                {props.isAuth ? props.login :
                    <a onClick={() => {
                        navigate('/login')
                    }}>Login</a>
                }
            <button onClick = {props.logout}>Logout</button>
            </div>


        </header>)
}


export default Header;
