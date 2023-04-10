

import { Fragment, useState, useEffect, useContext } from 'react';

import { orderServiceRequests } from '../../services/orderService';
import { servCarOrderService } from '../../services/servCarOrderService';
import { AuthContext } from '../../contexts/AuthContext';

import { formatDate } from '../../utils/formatDate';
import { formatDateDMY } from '../../utils/formatDateDMY';
import { ImageViewer } from "react-image-viewer-dv";

import { MyOrdersItem } from './MyOrders_Item/MyOrders_Item';

import styles from '../OrdersTable/OrdersTable.module.css';

import { useSyncOrders } from '../../hooks/useSyncOrders';



export const MyOrders = () => {

    const { token, userId } = useContext(AuthContext);
    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);
    const [thisUserClientOrders, setThisUserClientOrders] = useState([]);

    const result = useSyncOrders(userId, clientOrdersTokenReq, servOrderTokenReq);

    useEffect(() => {
        
        setThisUserClientOrders(result);
    },[result]);

    


    return (

        <Fragment>

            <h1 className={styles.header}>My orders</h1>

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