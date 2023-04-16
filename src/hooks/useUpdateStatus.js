

import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { orderServiceRequests } from "../services/orderService";
import { servCarOrderService } from "../services/servCarOrderService";

export const useUpdateStatusOrder = () => {


    const { token, userId } = useContext(AuthContext);


    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);
    const [thisUserClientOrders, setThisUserClientOrders] = useState([]);
    const [thisUserAcceptedOrders, setThisUserAcceptedOrders] = useState([]);


    /* this hook take statusOrder from service-orderCollection and record it in client-orderCollection */

    useEffect(() => {

        async function fetchData() {

            const thisClientOrders = await clientOrdersTokenReq.getItemsByPropNameValue('_ownerId', userId);

            const promises = thisClientOrders.map(async x => {

                try {
                    const acceptedOrder = await servOrderTokenReq.getItemsByPropNameValue('clientOrderID', x._id)

                    if (acceptedOrder[0]) {

                        const curAcceptedOrder = acceptedOrder[0];
                        const curAcceptedOrderId = curAcceptedOrder.clientOrderID;

                        let foundOrder = thisClientOrders.find(z => z._id == curAcceptedOrderId);

                        const editRes = await clientOrdersTokenReq.edit(curAcceptedOrderId, { ...foundOrder, statusOrder: curAcceptedOrder.statusOrder });

                    } else {
                        throw new Error(`this ID ${x._id} is not accepted`)
                    }
                } catch (error) {
                    console.log('ERROR', error, error.message);
                }
            });

            await Promise.all(promises);

            try {
                const finalResult = await clientOrdersTokenReq.getItemsByPropNameValue('_ownerId', userId);
                //console.log('FFFFFRESSSS', fRES);
                setThisUserClientOrders(finalResult)
            }
            catch (err) {
                console.log('ERROR', err.message);
            }


        }

        try {
            fetchData();
        } catch (error) {
            console.log("fetchData-ERROR", error);
        }
    }, [userId]);



    useEffect(() => {

        servOrderTokenReq.getItemsByPropNameValue('clientOrderOwnerID', userId)
            .then(result => {
                
               // console.log('resacc', result)
            setThisUserAcceptedOrders(result);
            })

    }, []);

    

    if (thisUserClientOrders.length > 0) {
        return [thisUserClientOrders,thisUserAcceptedOrders];
    }
    else {
        return [[],[]];
    }


}