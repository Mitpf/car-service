

import styles from '../OrdersTable.module.css'




export const OrderListInfoPlus = ({
    _id,
    userId,
    typeOrder,
    carInfo,
    description


}) => {
    return (
        <tr >
            <td className={styles.tdinfo}>
                <p>{_id} details</p>
                <img src="/arrow_r.svg" className={styles.arrow} />

            </td>

            <td colSpan="3" className={styles.tdinfo}>
                <div>Problem: {description.title} </div>
                <div>description: {description.text} </div>
                <div className={styles.photoContainer}>
                    {description.photos.map(x => (<img src={x} className={styles.orderPhotos}/>))}
                </div>


            </td>

            <td colSpan="1" className={styles.tdinfo}>
                <div>car info:</div>
                <div>{carInfo.brandModel} , {carInfo.productDate}</div>
                <div>engine: {carInfo.engine} </div>
                <div>km: {carInfo.km} </div>
            </td>

            <td className={styles.tdinfo}>
                <img src={carInfo.imageUrl} alt="" />
            </td>

        </tr>
    );
}



