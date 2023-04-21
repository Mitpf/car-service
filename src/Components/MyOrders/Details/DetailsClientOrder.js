import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
import { allertError } from "../../../utils/allertMessage";

import { useUpdateStatusOrder } from "../../../hooks/useUpdateStatus";
import { orderServiceRequests } from "../../../services/orderService";
import { servCarOrderService } from "../../../services/servCarOrderService";

import { MyOrdersItem } from "../MyOrders_Item/MyOrders_Item";


export const DetailsOrder = () => {
    const { token, userId } = useContext(AuthContext);
    const { orderID } = useParams();

    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);


    const [thisUserClientOrders, thisUserAcceptedOrders] = useUpdateStatusOrder();

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

            try {
                const result = await clientOrdersTokenReq.getOne(orderID);
                // console.log('current client order', result);
                setClientOrderData(result);
            }
            catch (error) {
                console.log('catched error is ', error );
                allertError(error)
            }


        }

        if (thisUserClientOrders.length > 0) {

            try {
                fetchData()
            }
            catch (error) {
                console.log('catched error is ', error );
                allertError(error);
            }

        }

    }, [thisUserClientOrders])

    /* servise-info for Order from Servise DB if it is accepted at ALL */
    useEffect(() => {

        try {
            servOrderTokenReq.getItemsByPropNameValue('clientOrderID', orderID)
                .then(result => {
                    //console.log('result from service', result[0])
                    setServOrderData(result[0])
                }
                )

        }
        catch (error) {
            console.log('catched error is ', error );
            allertError(error);
        }



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