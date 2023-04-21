
import { ImageViewer } from "react-image-viewer-dv";
import { Fragment, useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { StatesContext } from "../../../contexts/StatesContext";

import styles from '../OrdersTable.module.css';
import { orderServiceRequests } from "../../../services/orderService";
import { servCarOrderService } from "../../../services/servCarOrderService";
import { EditServInfoModal as EditModal } from "../../Modals/EditServInfoModal";
import { FormCreateEditServ } from '../../ServiceCreateEdit/FormCreateEditServ'
import { allertError } from "../../../utils/allertMessage";



export const OrderListInfoPlus = ({
    _id: _clientOrderID,
    _createdOn,
    typeOrder,
    carInfo,
    description,
    user,
    onClickAcceptOrder,
    toggleOnAcceptState
}) => {
    const { token } = useContext(AuthContext);

    const orderServiceReqToken = orderServiceRequests(token);
    const servOrderTokenReq = servCarOrderService(token);
    //const checkIsAccepted = servOrderTokenReq.checkIsAcceptedByID;

    const [isAccepted, setIsAccepted] = useState(false);

    const initServOrder = {
        diagnostic: 'no/acc',
        replacedParts: 'no/acc',
        repairHistory: 'no/acc',
        totalPrice: 'no/acc',
        statusOrder: 'no/acc'
    };
    const [formValues, setFormValues] = useState(initServOrder);




    const [servOrder, setServOrder] = useState(initServOrder);

    const onClikAcceptHandler = async (e) => {

        await onClickAcceptOrder(e, _clientOrderID);

        document.getElementById("modalOpen").click();


    }

    /* get request for service order */

    useEffect(() => {
        try {

            servOrderTokenReq.getItemsByClientOrderID(_clientOrderID)
                .then(result => {
                    // console.log('reees', result)
                    if (result.length > 0) {
                        setServOrder(result[0]);
                        setIsAccepted(true);
                    }
                    else {
                        setIsAccepted(false);
                    }

                })

        }
        catch (err) {
            console.log('catched error is ', err );
            setIsAccepted(false);
            allertError(err);
        }

    }, [onClickAcceptOrder])

    /* 
    take state of values from child comp, 
    pass taked values to MODAL HANDLER
     */

    const loadFormValues = (handledNewValues) => {
        setFormValues(handledNewValues);
    }

    const modalHandler = async () => {
        const servOrderID = servOrder._id;

        const editresult = await servOrderTokenReq.edit(servOrderID, { ...servOrder, ...formValues });
        console.log('editresult', editresult);
        toggleOnAcceptState();

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

                <td colSpan="2" className={styles.tdinfo} >
                    <ImageViewer>
                        <img src={carInfo.imageUrl} alt="" className={styles.imgCar} align="left" />
                    </ImageViewer>

                </td>

                {/* -----------------SERVICE ORDER ----------------------*/}

            </tr>
            {/* TAKE ORDER BUTTON */}
            <tr>

                <td colspan="5" className={styles.tdService}>
                    <p className={styles.hcOrder}>SERVICE ORDER INFO:</p>

                    <p><span className={styles.spanBold}>diagnostic: </span> {servOrder.diagnostic}</p>
                    <p><span className={styles.spanBold}>replacedParts: </span>{servOrder.replacedParts}</p>
                    <p><span className={styles.spanBold}>repairHistory: </span>{servOrder.repairHistory}</p>
                    <p><span className={styles.spanBold}>totalPrice: </span>{servOrder.totalPrice}</p>
                    <p><span className={styles.spanBold}>status: </span>{servOrder.statusOrder}</p>
                    <br></br>

                    {/* imported MODAL to open for edit serv info */}

                    {isAccepted &&
                        <>

                            <div className="modal" style={{ pointerEvents: 'auto' }}>
                                < EditModal
                                    title="Edit Service Info"
                                    name="Edit"
                                    handleOK={modalHandler}
                                    onClick={() => console.log('modal element clicked')}
                                >


                                    <label className={`${styles.titleInput} ${styles.label}`}>

                                        <FormCreateEditServ
                                            clientOrderID={_clientOrderID}
                                            loadFormValues={loadFormValues}

                                        />

                                    </label>


                                </EditModal>
                            </div>



                        </>

                    }


                </td>

                {/* button accept + open-modal-ancLink for edit */}

                <td colSpan="1" className={styles.tdService}>

                    {!isAccepted &&


                        <button
                            value="Accept Order"
                            onClick={onClikAcceptHandler}
                            disabled={isAccepted}
                            id={isAccepted ? "disabledButton" : "btntake"}
                        >
                            <a id="modalOpen"
                                className={`${styles["modal-open"]} ${styles.modalOpen}`}
                                href="#modal-tabbed">ACCEPT</a>
                            ACC
                        </button>

                    }

                </td>





            </tr>

        </Fragment >
    );


}



/* 

new order request,
not accepted
order accepted
*/