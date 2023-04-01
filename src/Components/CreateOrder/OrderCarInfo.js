
import styles from './CreateOrder.module.css';

export const OrderCarInfo = ({

values,
changeHandler
}) => {

    return (

        <>

            <h4 className={styles.carInfo}>
                Information about your car:
            </h4>

            {/* BRAND MODEL CAR */}
            <label className={`${styles.titleInput} ${styles.label}`}>

                <span className={styles.labelspan}>
                    brandModel:
                    <span className={styles.required}>*</span>
                </span>

                <input
                    className={styles.inpTxtMailTel}
                    name="brandModel"
                    value={values.brandModel}
                    onChange={changeHandler}
                />

            </label>

            {/* PRODUCT DATE CAR*/}
            <label className={`${styles.titleInput} ${styles.label}`}>

                <span className={styles.labelspan}>
                    product Date
                    <span className={styles.required}>*</span>
                </span>

                <input
                    type="date"
                    className={styles.inpTxtMailTel}
                    name="productDate"
                    value={values.productDate}
                    onChange={changeHandler}
                />
            </label>

            {/* SELECT FUEL TYPE ENGINE */}
            <label className={`${styles.titleInput} ${styles.label}`}>

                <span className={styles.labelspan}>
                    Fuel type engine
                    <span className={styles.required}>*</span>
                </span>

                <select
                    className={styles.inpTxtMailTel}
                    name="engine"
                    id="engine"
                    value={values.engine}
                    onChange={changeHandler}
                >
                    <option value="petrol">Petrol</option>
                    <option value="diesel">Diesel</option>
                    <option value="autogas">Autogas (LPG)</option>
                    <option value="gasLNGCNG">Natural gas LNG, CNG</option>
                    <option value="ethanolE85">Ethanol (e85)</option>
                    <option value="electric">Electric</option>
                    <option value="hybrid">Hybrid</option>

                </select>

            </label>

            {/* TRAVELLED KILO */}
            <label className={`${styles.titleInput} ${styles.label}`}>

                <span className={styles.labelspan}>
                    km
                </span>

                <input
                    type="number"
                    className={styles.inpTxtMailTel}
                    name="km"
                    placeholder="kilometers traveled"
                    value={values.km}
                    onChange={changeHandler}
                />

            </label>

            {/* photo of CAR link */}
            <label className={styles.label}>

                <span className={styles.labelspan}>
                    photo of car
                </span>

                <input
                    className={styles.inpTxtMailTel}
                    name="imageUrl"
                    placeholder="link"
                    value={values.imageUrl}
                    onChange={changeHandler}
                />

            </label>

        </>


    );
}