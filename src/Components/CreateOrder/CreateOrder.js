


import styles from './CreateOrder.module.css';
import { OrderCarInfo } from './OrderCarInfo';
import { OrderFormContacts } from './OrderFormContacts';
import { OrderFormCarService } from './OrderFormCarService';

import { useCreateOrder } from '../../hooks/useCreateOrder';





export const CreateOrder = () => {



    const { values, changeHandler, onSubmit, countInputs,
        addInputfields, removeInputfields, flNames, email, phoneNumber } = useCreateOrder();

        

        
    return (

        <div className={styles.container}>

            <div className={styles.title}>
                <h2 className={styles.header}>
                    New Order car service
                </h2>
            </div>

            <div className={styles["d-flex"]}>

                <form className={styles.form} method="POST" onSubmit={onSubmit}>

                    {/* --------------CLIENT CONTACTS------------- */}

                    <OrderFormContacts
                        {...{
                            flNames,
                            email,
                            phoneNumber,
                            values,
                            changeHandler
                        }}
                    />


                    {/*------------------- SERV ORDER--------------  */}

                    <OrderFormCarService
                        {...{
                            values,
                            changeHandler,
                            addInputfields,
                            removeInputfields,
                            countInputs,
                        }}
                    />


                    {/* CAR INFO */}

                    <OrderCarInfo {...{ values, changeHandler }} />

                    {/* SUBMIT BUTTON */}
                    <input id="submitButton" type="submit" className={styles.submitButton} />

                </form>

            </div>
        </div >

    );
}