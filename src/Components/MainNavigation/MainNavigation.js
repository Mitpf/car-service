
import styles from './MainNavigation.module.css'

import { Link } from 'react-router-dom'

export const MainNavigation = () => {


  return (

    <>
      <header>
        <nav>
          <div className={styles["logo"]}><Link to="/"> pf - pro</Link></div>
          <label htmlFor="menubrop" className={styles["bartoggle"]}>≡</label>
          <input type="checkbox" id="menubrop" className={styles.menubrop} />

          <ul className={styles["NavMenu"]}>
            <li><Link to="/orders/list">Service Orders</Link></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#"><label htmlFor="droplist1" className={styles["toggle"]}>User</label></a>
              <input type="checkbox" id="droplist1" />
              {/* =============FirstDropDown================== */}
              <ul>
                <li><a href="#">Service A</a></li>
                <li><a href="#">Service B</a></li>
                <li>
                  <a href="#"><label htmlFor="droplist2" className={styles["toggle"]}>Service C</label></a>
                  <input type="checkbox" id="droplist2" />
                  {/* =========Sub Drop Menu========== */}
                  <ul>
                    <li><a href="#">Sub Service 1</a></li>
                    <li><a href="#">Sub Service 2</a></li>
                    <li><a href="#">Sub Service 3</a></li>
                    <li><a href="#">Sub Service 4</a></li>
                  </ul>
                </li>
                <li><a href="#">Service D</a></li>
              </ul>
            </li>
            <li><a href="#">Resolved Problems</a></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
    </>

  )
}