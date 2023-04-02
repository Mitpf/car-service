

import styles from '../OrdersTable.module.css';

import { useState, Fragment, useEffect, useContext } from 'react';
import { OrderListRow } from '../OrderListRow/OrderListRow';
import { OrderListInfoPlus } from '../OrderListRowInfoPlus/OderListInfoPlus'

import { AuthContext } from '../../../contexts/AuthContext';

import { orderServiceRequests } from '../../../services/orderService';


export const OrderListTable = ({ loadXdata }) => {

    const { token } = useContext(AuthContext);
    const orderServiceReqtoken = orderServiceRequests(token);

   
    const [orders, setOrders] = useState({});
    const [openInfoMethod, setopenInfoMethod] = useState('one');
    const [showInfoPlus, setshowInfoPlus] = useState({});

    useEffect(() => {
        orderServiceReqtoken.getAll()
            .then(result => {
                setOrders(result);
                console.log("res", result);
            })

    }, [loadXdata])


    useEffect(() => {
        console.log(openInfoMethod);
        setshowInfoPlus({})

    }, []);




    const toggleShowInfoPlus = (e) => {

        const id = e.currentTarget.id;

        openInfoMethod === 'one'
            ? setshowInfoPlus(state => ({ [id]: !state[id] }))
            : setshowInfoPlus(state => ({ ...state, [id]: !state[id] }))

    }

    const changeOpenMethod = e => setopenInfoMethod(e.target.value);



    return (



        <div >

            <h1 className={styles.header}>Service Orders list</h1>

            <div className={styles.radioDiv}>
                <input
                    type="radio"
                    value="multi"
                    name="infoplus"
                    checked={openInfoMethod === 'multi'}
                    onChange={changeOpenMethod}
                />

                <label htmlFor="multi">Multi-Info Open</label>

                <input
                    type="radio"
                    value="one"
                    name="infoplus"
                    checked={openInfoMethod === 'one'}
                    onChange={changeOpenMethod}
                />

                <label htmlFor="one">only-oneInfo Open</label>

                <button onClick={loadXdata}>loadxData</button>

            </div>

            <table className={styles["rwd-table"]}>
                <tbody>

                    <tr >
                        <th >Service-Order No</th>
                        <th >Type service</th>
                        <th >Owner car</th>
                        <th >Car model</th>
                        <th >Calc Price</th>
                        <th >Status</th>
                    </tr>

                    {Object.values(orders).length === 0 &&
                        <>
                            <h1 className={styles.warning}>no orders in DB or </h1>
                            <h1 className={styles.warning} >not connected to the SERVER </h1>
                        </>

                    }
                    {
                        Object.values(orders).map(x => (


                            <Fragment key={x._id}>
                                <OrderListRow
                                    //id={x._id}
                                    {...x}
                                    toggleShowInfoPlus={toggleShowInfoPlus}
                                    showInfoPlus={showInfoPlus}
                                />
                                {showInfoPlus[x._id] && <OrderListInfoPlus id={x._id} {...x} />}
                            </Fragment>

                        ))
                    }

                </tbody>
            </table>

        </div>

    );
}


