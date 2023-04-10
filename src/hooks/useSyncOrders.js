    /*-----FILTER-servacarOrders:----- by USERclient && Accepted=true-------------*/
    /*  this hook returns all accepted (all copied from client means auotamtic  accepted) client orders recorded in servisecarDB only from one USERclient maded, 
    and returns original orders BY clientOrderID related to the accepted in servcarOrdersDB  */
    /* does'nt RETURN clientorders, which are not ACCEPTED(recorded) by/in SErviceCArDB */
    /* ---------- */
    /* usage request function --> 
    in this case author is 'clientorders' */
    /* ---- */
    /*  function (search, relation) , function ({propName:propValue}, {relationID: DBcollectionName})*/

import { useState, useEffect } from 'react';



export const useSyncOrders = (userId, clientOrdersTokenReq, servOrderTokenReq) => {


    const [thisUserAcceptedOrders, setThisUserAcceptedOrders] = useState([]);
    const [thisUserClientOrders, setThisUserClientOrders] = useState([]);
    const [ready, setReady] = useState(false);



   



    useEffect(() => {
        async function fetchData() {
            try {
                const result = await servOrderTokenReq.getItemsByQueryRelation(
                    { clientOrderOwnerID: userId },
                    { clientOrderID: 'clientorders' }
                );
                setThisUserAcceptedOrders(result);

               

                for (let x of result) {
                    await clientOrdersTokenReq.edit(x.clientOrderID, { ...x.author, statusOrder: x.statusOrder });
                    
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
                setThisUserAcceptedOrders([0]);
            }
        }

        fetchData();
    }, []);



    useEffect(() => {

        async function fetchData() {
            try {
                if (thisUserAcceptedOrders.length > 0) {
                    

                    for (let x of thisUserAcceptedOrders) {
                        await clientOrdersTokenReq.edit(x.clientOrderID, { ...x.author, statusOrder: x.statusOrder })
                    }

                    setReady(true);
                }
            } catch (error) {
                console.error('An error occurred while fetching data:', error);
                setReady(true);
            }
        }

        fetchData();

    }, [thisUserAcceptedOrders]);


    useEffect(() => {
        if (ready) {
            clientOrdersTokenReq.getItemsByPropNameValue('_ownerId', userId)
                .then(result => {
                    console.log('fin res', result);
                    const orders = result;
                    console.log('orders', orders);
                    setThisUserClientOrders(orders);

                })
        }

    }, [ready])




    return thisUserClientOrders
}