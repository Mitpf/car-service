

import styles from '../OrdersTable.module.css';

import { servCarOrderService } from '../../../services/servCarOrderService';

import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

/* export component */
export const OrderListRow = ({
    _id,
    user,
    typeOrder,
    carInfo,
    toggleShowInfoPlus,
    showInfoPlus,
    _createdOn,
    onAcceptState

}) => {
    const { token } = useContext(AuthContext);
    const servCarOrderServiceToken = servCarOrderService(token);
    const [statusOrder, setStatusOrder] = useState('not Accepted')


    useEffect(() => {

        servCarOrderServiceToken.getItemsByClientOrderID(_id)
            .then(result => {

                const status = Object.values(result)[0].statusOrder
                setStatusOrder(status);
            })



    }, [onAcceptState]);



    const categoriesOrder = Object.keys(typeOrder).filter(key => typeOrder[key]);

    return (

        <tr id={_id} onClick={(e) => toggleShowInfoPlus(e)} className={styles["trbtn"]}>

            <td data-th="Service-Order No" >
                {_createdOn}
            </td>
            <td data-th="Type service" >
                {categoriesOrder.join(', ')}

            </td>
            <td data-th="Owner car" >
                {user.flNames}
            </td>
            <td data-th="Car model" >
                {carInfo.brandModel}

            </td>
            <td data-th="Calc Price" >
                na
            </td>
            <td data-th="Status" >
                {statusOrder}
            </td>

        </tr>
    );
};


