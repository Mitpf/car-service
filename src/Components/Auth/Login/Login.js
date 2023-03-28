import { Link } from 'react-router-dom';
import styles from '../Auth.modules.css'
export const Login = () => {

    return (

        <>
            {/* <!-- Login Form --> */}
            <form>
                <input type="text" id="email" className="fadeIn second" name="email" placeholder="email" />
                <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>

            {/*  <!-- Remind Passowrd --> */}
            <div id="formFooter">
                <p className="redirectText">if you do not have account, please</p>
                <Link id="footerButton" className="underlineHover" to="/user/auth/register">Register</Link>
            </div>
        </>


    );
}