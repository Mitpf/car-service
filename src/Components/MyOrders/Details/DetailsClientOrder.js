import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { useSyncOrders } from "../../../hooks/useSyncOrders";
import { orderServiceRequests } from "../../../services/orderService";
import { servCarOrderService } from "../../../services/servCarOrderService";

import { MyOrdersItem } from "../MyOrders_Item/MyOrders_Item";

export const DetailsOrder = () => {
    const { token, userId } = useContext(AuthContext);
    const { orderID } = useParams();

    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);

    const { thisUserClientOrders } = useSyncOrders(userId, clientOrdersTokenReq, servOrderTokenReq);

    const initServOrderData = {
        diagnostic: 'n/a',
        replacedParts: 'n/a',
        repairHistory: 'n/a',
        totalPrice: 'n/a',
        statusOrder: 'not accepted'
    }

    const [clientOrderData, setClientOrderData] = useState(null);
    const [servOrderData, setServOrderData] = useState(initServOrderData);


    /*  client order data from client DB  after synchronisation with serv DB-orders */
    useEffect(() => {

        async function fetchData() {
            const result = await clientOrdersTokenReq.getOne(orderID);
            // console.log('current client order', result);
            setClientOrderData(result);

        }
        if (thisUserClientOrders.length > 0) {
            fetchData();
        }
    }, [thisUserClientOrders])

    /* servise-info for Order from Servise DB if it is accepted at ALL */
    useEffect(() => {
        servOrderTokenReq.getItemsByPropNameValue('clientOrderID', orderID)
            .then(result => {
                //console.log('result from service', result[0])
                setServOrderData(result[0])
            }
            )

    }, [])


    console.log('servOrderData', servOrderData);
    return (
        <>


            {
                clientOrderData &&
                <MyOrdersItem
                    {...clientOrderData}
                    servOrder={servOrderData}
                    isDetails={true}
                />}

        </>




    )
}