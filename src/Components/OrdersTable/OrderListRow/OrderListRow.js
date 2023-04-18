
import { formatDate } from '../../../utils/formatDate'
import styles from '../OrdersTable.module.css';
import moment from 'moment';

import { servCarOrderService } from '../../../services/servCarOrderService';

import { useEffect, useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

/* export component */
export const OrderListRow = ({
    _id,
    user,
    typeOrder,
    carInfo,
    description,
    toggleShowInfoPlus,
    showInfoPlus,
    _createdOn,
    onAcceptState

}) => {
    const { token } = useContext(AuthContext);
    const servCarOrderServiceToken = servCarOrderService(token);

    const initServorder = {
        statusOrder: "Not Accepted!",
        diagnostic: "n/a",
        replacedParts: "n/a",
        repairHistory: "n/a",
        totalPrice: "n/a."
    }
    const [servOrder, setServOrder] = useState(initServorder);



      useEffect(() => {
        try {
          servCarOrderServiceToken.getItemsByClientOrderID(_id)
            .then(result => {
              if (result.length > 0) {
                setServOrder(result[0])
              } else {
                setServOrder(initServorder);
              }
            })
        }
        catch (err) {
          console.log('err', err);
        }
      }, [onAcceptState]);


    const categoriesOrder = Object.keys(typeOrder)
        .filter(key => typeOrder[key])
        .join(', ');


    return (

        <tr id={_id} onClick={(e) => toggleShowInfoPlus(e)} className={styles["trbtn"]}>

            <td data-th="Service-Order No" >
                {formatDate(_createdOn)}  {/* encodeURIComponent(`$_createdOn="${_createdOn}"`); */}
            </td>
            <td data-th="Type service" >
                {description.title} / {categoriesOrder}

            </td>
            <td data-th="Owner car" >
                {user.flNames}
            </td>
            <td data-th="Car model" >
                {carInfo.brandModel}

            </td>
            <td data-th="Calc Price" >
                {servOrder.totalPrice}
            </td>
            <td data-th="Status" >
                {servOrder.statusOrder}
            </td>

        </tr>
    );
};


