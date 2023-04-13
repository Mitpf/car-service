

import { Fragment, useState, useEffect, useContext } from 'react';


import { orderServiceRequests } from '../../services/orderService';
import { servCarOrderService } from '../../services/servCarOrderService';
import { AuthContext } from '../../contexts/AuthContext';

import styles from '../OrdersTable/OrdersTable.module.css';

import { useSyncOrders } from '../../hooks/useSyncOrders';
import { MyOrdersItem } from './MyOrders_Item/MyOrders_Item';



export const MyOrders = () => {

    const { token, userId } = useContext(AuthContext);


    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);
    const [thisUserClientOrders, setThisUserClientOrders] = useState([]);
    const [thisUserAcceptedOrders, setThisUserAcceptedOrders] = useState([]);

    const { thisUserClientOrders: clientOrders,
        thisUserAcceptedOrders: servOrders } = useSyncOrders(userId, clientOrdersTokenReq, servOrderTokenReq);

    useEffect(() => {
        setThisUserClientOrders(clientOrders);
        setThisUserAcceptedOrders(servOrders);
    }, [clientOrders]);




    return (

        <Fragment>

            <h1 className={styles.header}>My orders</h1>

            {thisUserClientOrders.map(x => {

                
                return (
                    <MyOrdersItem
                        {...x}
                        key={x._id}
                        servOrder={thisUserAcceptedOrders.find(z => z.clientOrderID == x._id)}
                        isDetails={false}
                    />

                )
            }



            )}



        </Fragment>
    )
}