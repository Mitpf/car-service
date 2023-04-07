import { Link, NavLink } from 'react-router-dom';
import { Fragment, useContext } from 'react';


import styles from './MainNavigation.module.css';


import { AuthContext } from '../../contexts/AuthContext';
import { MyOrders } from '../MyOrders/MyOrders';



export const MainNavigation = () => {

  const { isAuthenticated, userEmail, isAdmin, userId } = useContext(AuthContext)

  return (

    <Fragment>
      {/* ADMIN MODE NAVIGATION */}
      {
        isAuthenticated && isAdmin &&

        <>

          <header>
            <nav>
              <div className={styles["logo"]}>
                <Link to="/"> Service Car Reminder</Link>
              </div>


              <h4 className={styles.admin}>ADMIN MODE</h4>



              <label htmlFor="menubrop" className={styles["bartoggle"]}>≡</label>
              <input type="checkbox" id="menubrop" className={styles.menubrop} />

              {/* ---------- */}

              <ul className={styles["NavMenu"]}>

                <li><Link to="/orders/list">Service Orders</Link></li>

                <li><a href="#">all car-reminder LISt</a></li>
                <li><a href="#">Repair Stories</a></li>

                <li><a href="#">
                  <label htmlFor="droplist1" className={styles.admin}>
                    Admin
                  </label>
                </a>
                  <input type="checkbox" id="droplist1" />
                  {/* =============FirstDropDown================== */}
                  <ul>

                    <li><Link to="/user/auth/logout">Logout</Link></li>
                  </ul>
                </li>
              </ul>

              {/* ---------------- */}

            </nav>
          </header>



        </>
      }

      {/* LOGED USER MODE NAVIGATION */}
      {
        isAuthenticated && !isAdmin &&

        <>
          <header>
            <nav>
              <div className={styles["logo"]}><Link to="/"> Service Car Reminder</Link></div>

              <label htmlFor="menubrop" className={styles["bartoggle"]}>≡</label>
              <input type="checkbox" id="menubrop" className={styles.menubrop} />

              <ul className={styles["NavMenu"]}>

                <li><NavLink
                  to={`/user/${userId}/orders`}
                  className={({isActive}) => isActive ? styles['.activeLink'] : '' }
                >
                  My Orders
                </NavLink></li>


                <li><a href="#">Repair Stories</a></li>
                <li><a href="#">My Car Reminder</a></li>





                <li>
                  <a href="#">
                    <label htmlFor="droplist1" className={styles.user}>
                      {userEmail}
                    </label>
                  </a>
                  <input type="checkbox" id="droplist1" />

                  <ul>
                    <li><Link to="/user/createorder">make new Order</Link></li>

                    <li><Link to="/user/auth/logout">Logout</Link></li>
                  </ul>
                </li>


              </ul>


            </nav>
          </header>
        </>
      }

      {/* GUEST-MODE-VIEW NAVIGATION  */}
      {!isAuthenticated &&

        <header>
          <nav>
            <div className={styles["logo"]}><Link to="/"> Service Car Reminder</Link></div>

            <label htmlFor="menubrop" className={styles["bartoggle"]}>≡</label>
            <input type="checkbox" id="menubrop" className={styles.menubrop} />
            <ul className={styles["NavMenu"]}>

              <li><a href="#">Repair Stories</a></li>
              <li><a href="#">CAR-reminder demo</a></li>
              <li><a href="#">About Us</a></li>


              <li><Link to="/user/auth/login">Login/register</Link></li>




            </ul>

          </nav>
        </header>
      }




    </Fragment>

  )
}