
import { Link } from 'react-router-dom'

import styles from '../Auth.modules.css'
export const Register = () => {

    return (

        <>


            
                {/* <!-- Register Form --> */}
                <form>
                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="email*" />
                    <input type="text" id="password" className="fadeIn third" name="password" placeholder="password*" />
                    <input type="text" id="repassword" className="fadeIn third" name="repassword" placeholder="repeat password*" />

                    <input type="text" id="email" className="fadeIn second" name="email" placeholder="first Name last Name" />
                    <input type="text" id="repassword" className="fadeIn third" name="repassword" placeholder="phone number" />


                    <input type="submit" className="fadeIn fourth" value="Register" />
                </form>

                {/*  <!-- Remind Passowrd --> */}
                <div id="formFooter">
                    <p className="redirectText">if you already have account, please</p>
                    <Link id="footerButton"  className="underlineHover" to="/user/auth/login">Login</Link>
                </div>

           
       
        </>


    );
}