import styles from '../OrdersTable/OrdersTable.module.css';
import { Link } from 'react-router-dom';


export const Home = () => {
    return (

        <>
            <h1 className={styles.header}>Wellcome to car-service reminder</h1>
            <h1 className={styles.header}>visit our repair-stories and try car reminder</h1>

            <li className={styles.homeLink}><Link >

            <img src="../../" alt="" />
            </Link></li>

            <li className={styles.homeLink}><Link >About Us</Link></li>
        </>


    );
}