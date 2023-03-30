import styles from './CreateOrder.module.css';

export const CreateOrder = () => {


    return (

        <div className={styles.container}>
            <div className={styles.title}>
                <h2>Product Order Form</h2>
            </div>
            <div className={styles["d-flex"]}>
                <form action method>
                    <label>
                        <span className={styles.fname}>First Name <span className={styles.required}>*</span></span>
                        <input type="text" name="fname" />
                    </label>
                    <label>
                        <span className={styles.lname}>Last Name <span className={styles.required}>*</span></span>
                        <input type="text" name="lname" />
                    </label>
                    <label>
                        <span>Company Name (Optional)</span>
                        <input type="text" name="cn" />
                    </label>
                   
                    <label>
                        <span>Street Address <span className={styles.required}>*</span></span>
                        <input type="text" name="houseadd" placeholder="House number and street name" required />
                    </label>
                    <label>
                        <span>&nbsp;</span>
                        <input type="text" name="apartment" placeholder="Apartment, suite, unit etc. (optional)" />
                    </label>
                    <label>
                        <span>Town / City <span className={styles.required}>*</span></span>
                        <input type="text" name="city" />
                    </label>
                    <label>
                        <span>State / County <span className={styles.required}>*</span></span>
                        <input type="text" name="city" />
                    </label>
                    <label>
                        <span>Postcode / ZIP <span className={styles.required}>*</span></span>
                        <input type="text" name="city" />
                    </label>
                    <label>
                        <span>Phone <span className={styles.required}>*</span></span>
                        <input type="tel" name="city" />
                    </label>
                    <label>
                        <span>Email Address <span className={styles.required}>*</span></span>
                        <input type="email" name="city" />
                    </label>
                </form>
               
            </div>
        </div>

    );
}