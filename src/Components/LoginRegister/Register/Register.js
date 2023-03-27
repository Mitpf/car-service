
import { Link } from 'react-router-dom'

import styles from '../LoginRegister.modules.css'
export const Register = () => {

    return (

        <div className="wrapper fadeInDown">
            <div id="formContent">
                {/*  <!-- Tabs Titles --> */}
                <h2 className="inactive underlineHover"> Sign In </h2>
                <h2 className="active">Sign Up </h2>

                {/* <!-- Icon --> */}
                <div className="fadeIn first">
                    <img src="/user_icon.png" id="icon" alt="User Icon" />
                </div>

                {/* <!-- Login Form --> */}
                <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="userName" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="repeat password" />
                    <input type="submit" className="fadeIn fourth" value="Register" />
                </form>

                {/*  <!-- Remind Passowrd --> */}
                <div id="formFooter">
                    <p className="redirectText">if you already have account, please</p>
                    <Link  className="underlineHover" to="/login">Login</Link>
                </div>

            </div>
        </div>



    );
}