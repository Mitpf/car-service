
import styles from './CreateOrder.module.css';

export const OrderFormContacts = ({
    flNames,
    email,
    phoneNumber,
    values,
    changeHandler,
}) => {

    return (
        <>
            <h4 className={styles.orderInfo}>
                Fill your contacts and book a time appointment:
            </h4>


            <label className={`${styles.titleInput} ${styles.label}`}>

                <span className={styles.labelspan}>
                    Your Names
                    <span className={styles.required}>
                        *
                    </span>
                </span>
                {/* INPUT user NAMES */}
                <input
                    
                    className={styles.inpTxtMailTel}
                    name="flNames"
                    placeholder="firstName lastName"
                    value={values.flNames}
                    onChange={changeHandler}

                />
            </label>

            {/* EMAIL-input automatic from auth-context filled only */}

            <label className={`${styles.titleInput} ${styles.label}`}>
                <span className={styles.labelspan}>
                    Email
                    <span className={styles.required}>*</span>
                </span>

                <input
                    
                    className={styles.inpTxtMailTel}
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={changeHandler}
                />

            </label>

            {/* phoneNumber input input from authcontext or manually*/}

            <label className={`${styles.titleInput} ${styles.label}`}>
                <span className={styles.labelspan}>
                    phone
                    <span className={styles.required}>*</span>
                </span>

                {/* phone number */}
                <input
                    
                    type="number"
                    className={styles.inpTxtMailTel}
                    name="phoneNumber"
                    placeholder="phoneNumber"
                    value={values.phoneNumber}
                    onChange={changeHandler}
                />

            </label>

            {/* book a time appoitment */}
            <label className={`${styles.titleInput} ${styles.label}`}>
                <span className={styles.labelspan}>
                    book a time
                    <span className={styles.required}>*</span>
                </span>
            </label>
            {/* DATE */}
            <input
                id="bookDate"
                onFocus={(e) => e.target.type = "date"}
                onBlur={(e) => e.target.type = ""}
                className={styles.inpTxtMailTel}
                name="bookedDate"
                placeholder="Choose Date"
                value={values.bookedDate}
                onChange={changeHandler}
            />
            {/* HOUR */}
            <select
                id="bookHour"
                className={styles.inpTxtMailTel}
                name="bookedHour"
                value={values.bookedHour}
                onChange={changeHandler}
            >
                <option value="" disabled hidden>Choose hour</option>
                <option value="9:00">9:00</option>
                <option value="9:30">9:30</option>
                <option value="10:00">10:00</option>
                <option value="10:30">10:30</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="14:30">14:30</option>
                <option value="15:00">15:00</option>
                <option value="15:30">15:30</option>
                <option value="16:00">16:00</option>
                <option value="16:30">16:30</option>
                <option value="17:00">17:00</option>
                <option value="17:30">17:30</option>
                <option value="18:00">18:00</option>
                <option value="18:30">18:30</option>
                <option value="19:00">19:00</option>
            </select>

        </>




    );


}