
import styles from './ConfirmModal.module.css'

import { useState } from 'react';


export const ConfirmModal = ({ children, title, name, handleOK }) => {


    return (

        <>

            <a className={styles["modal-open"]} href="#modal-tabbed">{name}</a>

            <div className={styles["modal"]} id="modal-tabbed" >
                <div className={styles["modal-content"]}>
                    <a href="#" className={styles["modal-close"]} title="Close Modal">X</a>
                    <h3>{title}</h3>
                    <div className={styles["modal-area"]}>

                        <p>{children}</p>


                        <a href="#"
                            className={styles["modal-close-ok"]}
                            title="CONFIRM!"
                            onClick={handleOK}
                        >
                            OK
                        </a>



                        <a href="#"
                            className={styles["modal-close-cancel"]}
                            title="Cancel Modal!"
                        >
                            CANCEL
                        </a>





                    </div>

                </div>

            </div >

        </>


    );
}