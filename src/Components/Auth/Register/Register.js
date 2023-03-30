import { useContext } from "react";
import { Link } from 'react-router-dom';

import { useForm } from "../../../hooks/useForm";
import { AuthContext } from "../../../contexts/AuthContext";

import styles from '../Auth.modules.css'
export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext);

    const initValues = {
        email: '',
        password: '',
        repassword: '',
        phoneNumber: '',
        firstLastNames: ''
    };

    const { values, changeHandler, onSubmit } = useForm(initValues, onRegisterSubmit);

    const LogFormKeys = {
        Email: 'email',
        Password: 'password',
        Repassword: 'repassword',
        FLnames: 'firstLastNames',
        PhoneNumber: 'phoneNumber'

    };

    return (

        <>

            <form method="POST" onSubmit={onSubmit}>
                <input
                    type="text" id="email" className="fadeIn second" placeholder="email*"
                    name={LogFormKeys.Email}
                    value={values[LogFormKeys.Email]}
                    onChange={changeHandler}

                />

                <input
                    type="password" id="password" className="fadeIn third" placeholder="password*"
                    name={LogFormKeys.Password}
                    value={values[LogFormKeys.Password]}
                    onChange={changeHandler}

                />
                <input
                    type="password" id="repassword" className="fadeIn third" placeholder="repeat password*"

                    name={LogFormKeys.Repassword}
                    value={values[LogFormKeys.Repassword]}
                    onChange={changeHandler}
                />

                <input
                    type="text" id="FLnames" className={`${styles.fadeIn} ${styles.second}`} placeholder="first Name last Name"
                    name={LogFormKeys.FLnames}
                    value={values[LogFormKeys.FLnames]}
                    onChange={changeHandler}
                />
                
                <input
                    type="text" id="phoneNumber" className="fadeIn third" placeholder="phone number"
                    name={LogFormKeys.PhoneNumber}
                    value={values[LogFormKeys.PhoneNumber]}
                    onChange={changeHandler}
                />


                <input type="submit" className={`${styles.fadeIn} ${styles.fourth}`} value="Register" />
            </form>


            <div id="formFooter">
                <p className="redirectText">if you already have account, please</p>
                <Link id="footerButton" className="underlineHover" to="/user/auth/login">Login</Link>
            </div>



        </>


    );
}