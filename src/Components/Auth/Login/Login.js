import styles from '../Auth.modules.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';
import { useForm } from '../../../hooks/useForm';



const LogFormKeys = {
    Email: 'email',
    Password: 'password'
};

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext);

    const { values, changeHandler, onSubmit } = useForm({
        [LogFormKeys.Email]: '',
        [LogFormKeys.Password]: '',
    }, onLoginSubmit);

    return (

        <>
            {/* <!-- Login Form --> */}
            <form method="POST" onSubmit={onSubmit}>

                <input
                    type="email" id="email" className={styles["fadeIn second"]} placeholder="emailxxx@xxx.com"
                    name={LogFormKeys.Email}
                    value={values[LogFormKeys.Email]}
                    onChange={changeHandler}
                />

                <input
                    type="password" id="password" className="fadeIn third" placeholder="password"
                    name={LogFormKeys.Password}
                    value={values[LogFormKeys.Password]}
                    onChange={changeHandler}
                />

                <input type="submit" className="fadeIn fourth" value="Login" />

            </form>


            <div id="formFooter">

                <p className="redirectText">if you do not have account, please</p>
                <Link id="footerButton" className="underlineHover" to="/user/auth/register">Register</Link>

            </div>
        </>


    );
}