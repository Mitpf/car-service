

import styles from '../OrdersTable.module.css'




export const OrderListInfoPlus = ({
    _id,
    userId,
    type,
    status,
    carInfo,
    calcPrice,
    problemDescript,
    serviceInfo

}) => {
    return (
        <tr >
            <td className={styles.tdinfo}>
                
                <img src="/arrow_r.svg" className={styles.arrow}/>

            </td>


            <td colSpan="2" className={styles.tdinfo}>
                <div>car info:</div>
                <div>{carInfo.carBrand} {carInfo.carModel}, {carInfo.productDate}</div>
                <div>engine: {carInfo.engine} </div>
                <div>km: {carInfo.km} </div>
            </td>

            <td colSpan="2" className={styles.tdinfo}>
                <div>Problem: {problemDescript.title} </div>
                <div>description: {problemDescript.text} </div>
                <div>diagnostic: {serviceInfo.diagnostic} </div>
                <div>repair: {serviceInfo.resolveBrief} </div>
                
            </td>

            <td className={styles.tdinfo}>
            <img src={carInfo.imageUrl} alt="" />
            </td>

        </tr>
    );
}



