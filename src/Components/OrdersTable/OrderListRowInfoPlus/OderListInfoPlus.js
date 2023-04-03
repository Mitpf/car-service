
import { ImageViewer } from "react-image-viewer-dv";
import { Fragment, useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

import styles from '../OrdersTable.module.css';
import { orderServiceRequests } from "../../../services/orderService";
import { servCarOrderService } from "../../../services/servCarOrderService";




export const OrderListInfoPlus = ({
    _id: _clientOrderID,
    _createdOn,
    typeOrder,
    carInfo,
    description,
    user


}) => {

    const { token } = useContext(AuthContext);
    const orderServiceReqToken = orderServiceRequests(token);
    const servCarOrderServiceToken = servCarOrderService(token);


    const [isAccepted, setIsAccepted] = useState(false);

    const onClickAcceptOrder = async (e) => {

        e.preventDefault();

        const result = await orderServiceReqToken.getOne(_clientOrderID);
        console.log(result);

        const { carInfo, user: ownerCarClientInfo, carAbmissionDate,
            description: problemDescript, typeOrder, _id: clientOrderID, _ownerId: clientOrderOwnerID } = result;

        const dataServOrder = {
            carInfo, ownerCarClientInfo, carAbmissionDate,
            problemDescript, typeOrder, clientOrderID, clientOrderOwnerID,
            statusOrder:"accepted", diagnostic:"n/a",replacedParts:"n/a",
            repairHistory:"n/a", totalPrice:"n/a"
        }

        const servOrderResult = await servCarOrderServiceToken.create(dataServOrder);
        console.log(servOrderResult);


    }

    return (
        <Fragment>


            {/* --------------- CLIENT ORDER --------------- */}

            <tr >
                <td className={styles.tdinfo}>
                    <p> <span className={styles.infoHead}>Order Details:</span></p>
                    <img src="/arrow_r.svg" className={styles.arrow} />
                    <p> <span className={styles.infoHead}>User Contact details:</span> </p>
                    <p> <span className={styles.infoHead}>NAMES:</span> {user.flNames}</p>
                    <p> <span className={styles.infoHead}>EMAIL:</span>  {user.email}</p>
                    <p> <span className={styles.infoHead}>PHONE:</span>  {user.phoneNumber}</p>

                </td>

                <td colSpan="2" className={styles.tdinfo}>
                    <span className={styles.hcOrder}>CLIENT ORDER - request</span>
                    {!isAccepted && <span id="notAcceptedStatus"> NOT ACCEPTED ORDER</span>}
                    {isAccepted && <span id="AcceptedStatus"> ACCEPTED ORDER</span>}
                    <div> <span className={styles.infoHead}>PROBLEM:</span> {description.title} </div>
                    <div> <span className={styles.infoHead}>DESCRIPTION:</span> : {description.text} </div>
                    <div className={styles.photoContainer}>

                        {
                            description.photos.map(x => (

                                <div className={styles.orderPhotos} key={x.link}>
                                    <ImageViewer  >
                                        <img src={x.link} className={styles.orderPhotos} />
                                    </ImageViewer>

                                </div>

                            ))
                        }

                    </div>


                </td>

                <td colSpan="1" className={styles.tdinfo}>
                    <div><span className={styles.infoHead}>CAR INFO:</span></div>
                    <div>{carInfo.brandModel} , {carInfo.productDate}</div>
                    <div><span className={styles.infoHead}>engine:</span> {carInfo.engine} </div>
                    <div><span className={styles.infoHead}>km:</span> {carInfo.km} </div>
                </td>

                <td colspan="2" className={styles.tdinfo} >
                    <ImageViewer>
                        <img src={carInfo.imageUrl} alt="" className={styles.imgCar} align="left" />
                    </ImageViewer>

                </td>

                {/* -----------------SERVICE ORDER ----------------------*/}

            </tr>
            {/* TAKE ORDER BUTTON */}
            <tr>
                <td colspan="1" className={styles.tdService}>
                    <input id="btntake" type="button" value="Accept Order" onClick={onClickAcceptOrder} />

                </td>

                <td colspan="5" className={styles.tdService}>
                    <p className={styles.hcOrder}>SERVICE ORDER</p>

                </td>

            </tr>

        </Fragment>
    );


}



/* 

new order request,
not accepted
order accepted
*/