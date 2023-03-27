import { Link } from 'react-router-dom';
import styles from '../LoginRegister.modules.css'
export const Login = () => {

    return (

        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/*  <!-- Tabs Titles --> */}
                <h2 className="active"> Sign In </h2>
                <h2 className="inactive underlineHover">Sign Up </h2>

                {/* <!-- Icon --> */}
                <div className="fadeIn first">
                    <img src="/user_icon.png" id="icon" alt="User Icon" />
                </div>

                {/* <!-- Login Form --> */}
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>

                {/*  <!-- Remind Passowrd --> */}
                <div id="formFooter">
                <p className={styles.redirectText}>if you do not have account, please</p>
                    <Link className="underlineHover" to="/register">Register</Link>
                </div>

            </div>
        </div>



    );
}