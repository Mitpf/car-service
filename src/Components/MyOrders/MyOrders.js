import styles from '../OrdersTable/OrdersTable.module.css';
import { ImageViewer } from "react-image-viewer-dv";

import { Fragment, useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { formatDate } from '../../utils/formatDate';
import { formatDateDMY } from '../../utils/formatDateDMY';


import { orderServiceRequests } from '../../services/orderService';
import { servCarOrderService } from '../../services/servCarOrderService';
import { MyOrdersItem } from './MyOrders_Item/MyOrders_Item';



export const MyOrders = () => {

    const { token, userId } = useContext(AuthContext);
    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);
    const clientOrderTokenReq = orderServiceRequests(token);

    const [thisUserAcceptedOrders, setThisUserAcceptedOrders] = useState([]);
    const [thisUserClientOrders, setThisUserClientOrders] = useState([]);




    /*-----FILTER-servacarOrders:----- by USERclient && Accepted=true-------------*/
    /*  this hook returns all accepted client orders recorded in servisecarDB only from one USERclient maded, 
    and returns original orders BY clientOrderID related to the accepted in servcarOrdersDB  */
    /* does'nt RETURN clientorders, which are not ACCEPTED(recorded) by/in SErviceCArDB */
    /* ---------- */
    /* usage request function --> 
    in this case author is 'clientorders' */
    /* ---- */
    /*  function (search, relation) , function ({propName:propValue}, {relationID: DBcollectionName})*/

    useEffect(() => {

        async function fetchData() {

            const result = await servOrderTokenReq.getItemsByQueryRelation(
                { clientOrderOwnerID: userId },
                { clientOrderID: 'clientorders' }
            );

            setThisUserAcceptedOrders(result);

            console.log(result[0]);

            result.forEach(async x => {

                await clientOrdersTokenReq.edit(x.clientOrderID, { ...x.author, statusOrder: x.statusOrder })
            });

            

        }

        fetchData();


    }, []);

    useEffect(() => {
        clientOrderTokenReq.getItemsByPropNameValue('_ownerId', userId)
            .then(result => {
                const orders = result;
                setThisUserClientOrders(orders);
            })
        
    }, [])



    console.log('this', thisUserClientOrders);

    /*all client orders filter only by current user */
    /*  useEffect(() => {
 
         clientOrderTokenReq.getItemsByPropNameValue('_ownerId', userId)
             .then(result => setThisUserClientOrders(result))
 
     }, []); */


    return (

        <Fragment>

            <h1>My orders</h1>

            {
                thisUserClientOrders.map(x => {

                    const categoriesOrder = Object.keys(x.typeOrder)
                        .filter(key => x.typeOrder[key])
                        .join(', ');


                    return (

                        <div className={styles.divClientOrders} key={x._id}>

                            <div className={styles.title}>
                                <span className={styles.spanLeft}>
                                    created on: {formatDate(x._createdOn)}
                                </span>


                                <span className={styles.spanRight}>
                                    Status: {x.statusOrder}
                                </span>

                                <span className={styles.spanCenter}>
                                    {x.description.title}

                                </span>

                            </div>
                            <span className={styles.spanRight}>
                                car:
                                <br></br>
                                {x.carInfo.brandModel}
                                <br></br>

                                <ImageViewer  >
                                    <img className={styles.imgCarClientOrd} src={x.carInfo.imageUrl} alt="" />
                                </ImageViewer>

                            </span>

                            <p>type issue: {categoriesOrder}</p>



                            <p className={styles.maxWidth}>
                                <span>description: </span>
                                {x.description.text}
                            </p>



                            <p >
                                Date appoitment: {formatDateDMY(x.carAbmissionDate.date)} - hour: {x.carAbmissionDate.hour}
                            </p>
                            contacts:

                            <span className={styles.spanContacts}> {x.user.flNames}  |  {x.user.phoneNumber}  |   {x.user.email}</span>

                            <div>

                                {x.description.photos.length > 0 && <p>photos damages:</p>}
                                {
                                    x.description.photos.map(x => (

                                        <div className={styles.orderPhotos} key={x.link}>
                                            <ImageViewer  >
                                                <img className={styles.imgDamages} src={x.link} />
                                            </ImageViewer>

                                        </div>

                                    ))


                                }

                            </div>
                            <hr></hr>
                            <p>SERVICE INFO:</p>
                            <p>diagnostic:</p>
                            <p>replacedParts:</p>
                            <p>repairHistory:</p>
                            <p>totalPrice:</p>
                        </div>


                    )
                })



            }

        </Fragment>
    )
}