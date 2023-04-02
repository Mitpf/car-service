
import { ImageViewer } from "react-image-viewer-dv";

import styles from '../OrdersTable.module.css';




export const OrderListInfoPlus = ({
    _id,
    _createdOn,
    typeOrder,
    carInfo,
    description,
    user


}) => {
    return (
        <tr >
            <td  className={styles.tdinfo}>
                <p>{_createdOn} details</p>
                <img src="/arrow_r.svg" className={styles.arrow} />

                <p>User Contact details:</p>
                <p>  NAMES: {user.flNames}</p>
                <p>  EMAIL: {user.email}</p>
                <p>  PHONE: {user.phoneNumber}</p>

            </td>

            <td colSpan="2" className={styles.tdinfo}>
                <div>Problem: {description.title} </div>
                <div>description: {description.text} </div>
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
                <div>car info:</div>
                <div>{carInfo.brandModel} , {carInfo.productDate}</div>
                <div>engine: {carInfo.engine} </div>
                <div>km: {carInfo.km} </div>
            </td>

            <td colspan="2" className={styles.tdinfo} >
                <ImageViewer>
                    <img src={carInfo.imageUrl} alt="" className={styles.imgCar} align="left"/>
                </ImageViewer>

            </td>

        </tr>
    );
}



