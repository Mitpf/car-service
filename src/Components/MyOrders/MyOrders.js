import { Fragment, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

import { orderServiceRequests } from '../../services/orderService';
import { servCarOrderService } from '../../services/servCarOrderService';


export const MyOrders = () => {

    const { token, userId } = useContext(AuthContext);
    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);

    const [thisUserAcceptedOrders, setThisUserAcceptedOrders] = useState([]);

    useEffect(() => {
        console.log(userId);
        servOrderTokenReq.getItemsByQueryRelation({ clientOrderOwnerID: userId }, { clientOrderID: 'clientorders' })     /*  params (search, relation) */
            .then(result => setThisUserAcceptedOrders(result))
    }, []);

    console.log('thisuser', thisUserAcceptedOrders)
    return (

        <Fragment>

            <h1>My orders</h1>




        </Fragment>
    )
}