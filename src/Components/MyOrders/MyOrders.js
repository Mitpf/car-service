

import { Fragment, useState, useEffect, useContext } from 'react';


import { orderServiceRequests } from '../../services/orderService';
import { servCarOrderService } from '../../services/servCarOrderService';
import { AuthContext } from '../../contexts/AuthContext';

import styles from '../OrdersTable/OrdersTable.module.css';

import { useUpdateStatusOrder } from '../../hooks/useUpdateStatus';
import { MyOrdersItem } from './MyOrders_Item/MyOrders_Item';



export const MyOrders = () => {



    const { token, userId } = useContext(AuthContext);


    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);
    const [thisUserClientOrders, setThisUserClientOrders] = useState([]);
    const [thisUserAcceptedOrders, setThisUserAcceptedOrders] = useState([]);


    /* this hook take statusOrder value from service-orderCollection and record/assign this value in statusOrder in client-orderCollection */

    const [clientOrders, acceptedOrder] = useUpdateStatusOrder();

    useEffect(() => {
        if (clientOrders.length > 0) {
            setThisUserClientOrders(clientOrders);

        }

        if (acceptedOrder.length > 0) {
            setThisUserAcceptedOrders(acceptedOrder);
        }

    }, [clientOrders,acceptedOrder]);
  
    /* END OF HOOKs */


    if (thisUserClientOrders.length > 0) {
        console.log('thisUserClientOrders', thisUserClientOrders);

        console.log('aceptedOrders', thisUserAcceptedOrders);

        return (

            <Fragment>

                <h1 className={styles.header}>My orders</h1>

                {
                    thisUserClientOrders.map(x => {



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



}