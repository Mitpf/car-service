
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImageViewer } from "react-image-viewer-dv";

import { AuthContext } from "../../../contexts/AuthContext";

import { servCarOrderService } from "../../../services/servCarOrderService";

import { formatDate } from '../../../utils/formatDate';
import { formatDateDMY } from '../../../utils/formatDateDMY';

import styles from '../../OrdersTable/OrdersTable.module.css';


export const MyOrdersItem = ({
    isDetails,
    user,
    typeOrder,
    categoriesOrder = Object.keys(typeOrder)
        .filter(key => typeOrder[key])
        .join(', '),
    statusOrder,
    description,
    carInfo,
    carAbmissionDate,
    _createdOn,
    _updatedOn,
    _id,
    servOrder

}) => {
    const initServOrderData = {
        diagnostic: 'n/a',
        replacedParts: 'n/a',
        repairHistory: 'n/a',
        totalPrice: 'n/a',
        statusOrder: 'not accepted'
    }

    const { token, userId } = useContext(AuthContext);
    const servOrderTokenReq = servCarOrderService(token);
    const [servOrderData, setServOrderData] = useState(initServOrderData);

    useEffect(() => {
        if (servOrder) {
            setServOrderData(servOrder)
        }
    }, [])




    return (


        <div className={styles.divClientOrders} key={_id}>

            <div className={styles.title}>
                <span className={styles.spanLeft}>
                    created on: {formatDate(_createdOn)}
                </span>


                <span className={styles.spanRight}>
                    Status: {statusOrder}
                </span>

                <span className={styles.spanCenter}>
                    {description.title}

                </span>

            </div>
            <span className={styles.spanRight}>
                <span className={styles.spanBold}>car:</span>
                <br></br>
                {carInfo.brandModel}
                <br></br>

                <ImageViewer  >
                    <img className={styles.imgCarClientOrd} src={carInfo.imageUrl} alt="" />
                </ImageViewer>

                {
                    !isDetails &&

                    <Link
                        className={description.photos.length == 0 ? styles.btnRightNoPhotos : styles.btnRightPhotos}
                        to={`${_id}/details`}
                    >
                        Details
                    </Link>
                }

                {
                    isDetails &&
                    <>
                        <Link
                            className={description.photos.length == 0 ? styles.btnRightNoPhotos : styles.btnRightPhotos}
                            to={``}
                        >
                            DELETE
                        </Link>
                        <span
                            className={`
                            ${description.photos.length == 0 ? styles.btnRightNoPhotos : styles.btnRightPhotos} 
                            ${styles.spaceButtons}
                   `}></span>
                        <Link
                            className={description.photos.length == 0 ? styles.btnRightNoPhotos : styles.btnRightPhotos}
                            to={``}
                        >
                            EDIT
                        </Link>

                    </>



                }

            </span>

            <p> <span className={styles.spanBold}>Type issue:</span> {categoriesOrder}</p>



            <p className={styles.maxWidth}>
                <span className={styles.spanBold}>title: </span>
                {description.title}
            </p>
            <p className={styles.maxWidth}>
                <span className={styles.spanBold}>description: </span>
                {description.text}
            </p>



            <p >
                <span className={styles.spanBold}>Date appoitment:</span> {formatDateDMY(carAbmissionDate.date)} - hour: {carAbmissionDate.hour}
            </p>
            <span className={styles.spanBold}>contacts:</span>
            <span className={styles.spanContacts}> {user.flNames}  |  {user.phoneNumber}  |   {user.email}</span>

            <div>

                {description.photos.length > 0 && <p><span className={styles.spanBold}>photos damages:</span></p>}
                {
                    description.photos.map(x => (

                        <div className={styles.orderPhotos} key={x.link}>
                            <ImageViewer  >
                                <img className={styles.imgDamages} src={x.link} />
                            </ImageViewer>

                        </div>

                    ))


                }


            </div>

            {description.photos.length > 0 && <hr className={styles.hrPhotos} />}
            {!description.photos.length && <hr className={styles.hrMain} />}

            {/*   <p>id {_id}</p> */}
            <p>  <span className={styles.spanBold}>SERVICE INFO</span> </p>


            <p><span className={styles.spanBold}>diagnostic: </span> {servOrderData.diagnostic}</p>
            <p><span className={styles.spanBold}>replacedParts: </span>{servOrderData.replacedParts}</p>
            <p><span className={styles.spanBold}>repairHistory: </span>{servOrderData.repairHistory}</p>
            <p><span className={styles.spanBold}>totalPrice: </span>{servOrderData.totalPrice}</p>
            <p><span className={styles.spanBold}>status: </span>{servOrderData.statusOrder}</p>

        </div>

    )
}