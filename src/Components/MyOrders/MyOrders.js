

import { Fragment, useState, useEffect, useContext } from 'react';

import { orderServiceRequests } from '../../services/orderService';
import { servCarOrderService } from '../../services/servCarOrderService';
import { AuthContext } from '../../contexts/AuthContext';
import { StatesContext } from '../../contexts/StatesContext';

import { formatDate } from '../../utils/formatDate';
import { formatDateDMY } from '../../utils/formatDateDMY';
import { ImageViewer } from "react-image-viewer-dv";



import styles from '../OrdersTable/OrdersTable.module.css';

import { useSyncOrders } from '../../hooks/useSyncOrders';



export const MyOrders = () => {

    const { token, userId } = useContext(AuthContext);


    const clientOrdersTokenReq = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);
    const [thisUserClientOrders, setThisUserClientOrders] = useState([]);

    const clientOrders = useSyncOrders(userId, clientOrdersTokenReq, servOrderTokenReq);



    useEffect(() => {

        setThisUserClientOrders(clientOrders);
    }, [clientOrders]);




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
                               <span className={styles.spanBold}>car:</span> 
                                <br></br>
                                {x.carInfo.brandModel}
                                <br></br>

                                <ImageViewer  >
                                    <img className={styles.imgCarClientOrd} src={x.carInfo.imageUrl} alt="" />
                                </ImageViewer>

                            </span>

                            <p> <span className={styles.spanBold}>Type issue:</span> {categoriesOrder}</p>



                            <p className={styles.maxWidth}>
                                <span className={styles.spanBold}>description: </span>
                                {x.description.text}
                            </p>



                            <p >
                                <span className={styles.spanBold}>Date appoitment:</span> {formatDateDMY(x.carAbmissionDate.date)} - hour: {x.carAbmissionDate.hour}
                            </p>
                           <span className={styles.spanBold}>contacts:</span> 
                            <span className={styles.spanContacts}> {x.user.flNames}  |  {x.user.phoneNumber}  |   {x.user.email}</span>

                            <div>

                                {x.description.photos.length > 0 && <p><span className={styles.spanBold}>photos damages:</span></p>}
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
                            <p>  <span className={styles.spanBold}>SERVICE INFO</span> </p>
                            <p><span className={styles.spanBold}>diagnostic:</span></p>
                            <p><span className={styles.spanBold}>replacedParts:</span></p>
                            <p><span className={styles.spanBold}>repairHistory:</span></p>
                            <p><span className={styles.spanBold}>totalPrice:</span></p>
                        </div>


                    )
                })



            }

        </Fragment>
    )
}