


import { Link, NavLink, Routes, Route } from 'react-router-dom';
import { Login } from './Login/Login';
import { Register } from './Register/Register'
import styles from './Auth.modules.css'


export const AuthMainPage = () => {

    const navStyle = ({ isActive }) => isActive ? "active" : "inactive underlineHover"

    return (

        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/*  <!-- Tabs Titles --> */}



                <NavLink to="login" className={navStyle}>Sign In</NavLink>
                <NavLink to="register" className={navStyle}>Sign Up</NavLink>



                {/* <!-- Icon --> */}
                <div className="fadeIn first">
                    <img src="/user_icon.png" id="icon" alt="User Icon" />
                </div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>


            </div>
        </div>

    )
}


