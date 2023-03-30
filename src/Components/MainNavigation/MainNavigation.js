import { Link } from 'react-router-dom';
import { useContext } from 'react';

import styles from './MainNavigation.module.css';
import { AuthContext } from '../../contexts/AuthContext';



export const MainNavigation = () => {

  const { isAuthenticated, userEmail } = useContext(AuthContext)
  console.log('isauth', isAuthenticated);
  return (

    <>
      <header>
        <nav>
          <div className={styles["logo"]}><Link to="/"> Service Car Reminder</Link></div>
          <label htmlFor="menubrop" className={styles["bartoggle"]}>≡</label>
          <input type="checkbox" id="menubrop" className={styles.menubrop} />

          <ul className={styles["NavMenu"]}>
            <li><Link to="/orders/list">Service Orders</Link></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Resolved Problems</a></li>

            {!isAuthenticated && <li><Link to="/user/auth/login">Login/register</Link></li>}
            

            {isAuthenticated && <li><a href="#"><label htmlFor="droplist1" className={styles.user}>{userEmail}</label></a>
              <input type="checkbox" id="droplist1" />
              {/* =============FirstDropDown================== */}
              <ul>
                <li><a href="#">make Order</a></li>
                <li><a href="#">Car Reminder</a></li>
                <li><Link to="/user/auth/logout">Logout</Link></li>
              </ul>
            </li>}

          </ul>
        </nav>
      </header>
    </>

  )
}