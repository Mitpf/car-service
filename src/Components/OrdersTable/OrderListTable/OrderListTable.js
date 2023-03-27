



import { useState, Fragment, useEffect } from 'react';
import { OrderListRow } from '../OrderListRow/OrderListRow';
import { OrderListInfoPlus } from '../OrderListRowInfoPlus/OderListInfoPlus'
import styles from '../OrdersTable.module.css'


export const OrderListTable = () => {

    const [orders, setOrders] = useState({});
    const [openInfoMethod, setopenInfoMethod] = useState('one');

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/orders`)
            .then(response => response.json())
            .then(result => setOrders(result))
    }, [])



    const [showInfoPlus, setshowInfoPlus] = useState({});

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


                    {Object.values(orders).map(x => (


                        <Fragment key={x._id}>
                            <OrderListRow
                                //id={x._id}
                                {...x}
                                toggleShowInfoPlus={toggleShowInfoPlus}
                                showInfoPlus={showInfoPlus}
                            />
                            {showInfoPlus[x._id] && <OrderListInfoPlus id={x._id} {...x} />}
                        </Fragment>

                    ))}

                </tbody>
            </table>

        </div>

    );
}


