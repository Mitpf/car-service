

import styles from '../OrdersTable.module.css';

import { useState, Fragment, useEffect, useContext } from 'react';
import { OrderListRow } from '../OrderListRow/OrderListRow';
import { OrderListInfoPlus } from '../OrderListRowInfoPlus/OderListInfoPlus'

import { AuthContext } from '../../../contexts/AuthContext';

import { orderServiceRequests } from '../../../services/orderService';
import { servCarOrderService } from '../../../services/servCarOrderService';



import { useCheckForUpdatesCond } from '../../../hooks/useCheckForUpdatesCond'




export const OrderListTable = ({ loadXdata }) => {


    const [hookONoff, sethookONoff] = useState('OFF');




    const { token } = useContext(AuthContext);

    const orderServiceReqtoken = orderServiceRequests(token);
    const servCarOrderServiceToken=servCarOrderService(token);

    const [orders, setOrders] = useState([]);
    const [ordersLength, setOrdersLength] = useState(0);

    const [openInfoMethod, setopenInfoMethod] = useState('one');
    const [showInfoPlus, setshowInfoPlus] = useState({});

    useEffect(() => {
        orderServiceReqtoken.getAll()
            .then(result => {
                setOrders(result);
                setOrdersLength(result.length);
            })


    }, [loadXdata]);

    const onChangeHook = () => {
        if (hookONoff == 'ON') {
            sethookONoff('OFF')
            return
        }

        if (hookONoff == 'OFF') {
            sethookONoff('ON')
            return
        }
    }

    /* conditional hook for check db updates v2*/
    /* usage usecheckforupdates(httpService,setStateLength, stateLength, setData,triger,[additional depedencys]) */

    useCheckForUpdatesCond(orderServiceReqtoken.getAll,
        setOrdersLength, ordersLength,
        setOrders, hookONoff, [ordersLength, onChangeHook]);


    /* hook for changing method of open plus info in table*/

    useEffect(() => {
        setshowInfoPlus({})
    }, [openInfoMethod]);


    const toggleShowInfoPlus = (e) => {

        const id = e.currentTarget.id;

        openInfoMethod === 'one'
            ? setshowInfoPlus(state => ({ [id]: !state[id] }))
            : setshowInfoPlus(state => ({ ...state, [id]: !state[id] }))

    }

    const changeOpenMethod = e => setopenInfoMethod(e.target.value);

    /* ONCLICK ACCEPT ORDER FUNCTION */

    const onClickAcceptOrder = async (e, _clientOrderID) => {

        e.preventDefault();
        console.log('accept order clicked');
        
        const orderServReqtoken=orderServiceRequests(token);
        const result = await orderServReqtoken.getOne(_clientOrderID);
        

        const { carInfo, user: ownerCarClientInfo, carAbmissionDate,
            description: problemDescript, typeOrder, _id: clientOrderID, _ownerId: clientOrderOwnerID } = result;

        const dataServOrder = {
            carInfo, ownerCarClientInfo, carAbmissionDate,
            problemDescript, typeOrder, clientOrderID, clientOrderOwnerID,
            statusOrder: "accepted", diagnostic: "n/a", replacedParts: "n/a",
            repairHistory: "n/a", totalPrice: "n/a"
        }

        const servOrderResult = await servCarOrderServiceToken.create(dataServOrder);


        const resultRelation = await servCarOrderServiceToken.getItemsByClientOrderID(clientOrderID);

        if (resultRelation.length > 0) {
            return true;
        }

        return false;

    }




    /* ------------------------- */

    return (



        <div >

            <h1 className={styles.header}>Service Orders list</h1>

            <div className={styles["search-container"]}>
                <form action="">
                    <input className={styles.inpSearch} type="text" placeholder="Search..." name="search" />

                </form>
            </div>

            {/* RADIO BUTTONS CHANGE OPEN BEAHAVIOR METHOD */}
            <div className={styles.radioDiv}>
                <input
                    type="radio"
                    value="multi"
                    name="infoplus"
                    checked={openInfoMethod === 'multi'}
                    onChange={changeOpenMethod}
                />

                <label htmlFor="multi">Multi-Info Open</label>

                <input
                    type="radio"
                    value="one"
                    name="infoplus"
                    checked={openInfoMethod === 'one'}
                    onChange={changeOpenMethod}
                />
                <span>   </span>
                <label htmlFor="one">only-oneInfo Open</label>

                {/* BUTTON LOAD prepulate DATA from diff users */}

                <button onClick={loadXdata}>loadxData</button>

                <button onClick={onChangeHook}>{hookONoff == 'ON' ? 'STOP useCheckHOOK' : "Start useCheckHOOK"}</button>
                <br />

            </div>



            <table className={styles["rwd-table"]}>
                <tbody>

                    <tr >
                        <th >Service-Order No</th>
                        <th >Type service</th>
                        <th >Owner car</th>
                        <th >Car model</th>
                        <th >Calc Price</th>
                        <th >Status</th>
                    </tr>

                    {Object.values(orders).length === 0 &&
                        <>
                            <h1 className={styles.warning}>no orders in DB or </h1>
                            <h1 className={styles.warning} >not connected to the SERVER </h1>
                        </>

                    }
                    {
                        Object.values(orders).map(x => (


                            <Fragment key={x._id}>
                                <OrderListRow
                                    //id={x._id}
                                    onClickAcceptOrder={onClickAcceptOrder}
                                    {...x}
                                    toggleShowInfoPlus={toggleShowInfoPlus}
                                    showInfoPlus={showInfoPlus}
                                />
                                {showInfoPlus[x._id] && <OrderListInfoPlus id={x._id} {...x} onClickAcceptOrder={onClickAcceptOrder}/>}
                            </Fragment>

                        ))

                    }

                    <td></td>



                </tbody>
            </table>

        </div>

    );
}


