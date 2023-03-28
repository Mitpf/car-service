
import styles from './MainNavigation.module.css'

import { Link } from 'react-router-dom'

export const MainNavigation = () => {


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
           
            <li><Link to="/user/auth/login">Login/register</Link></li>

            <li><a href="#"><label htmlFor="droplist1" className={styles["toggle"]}>User</label></a>
              <input type="checkbox" id="droplist1" />
              {/* =============FirstDropDown================== */}
              <ul>
                <li><a href="#">Service A</a></li>
                <li><a href="#">Service B</a></li>
                <li><a href="#">Service D</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
    </>

  )
}