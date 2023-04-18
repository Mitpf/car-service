
import styles from './EditServInfoModal.module.css'

import { useState } from 'react';


export const EditServInfoModal = ({ children, title, name, handleOK }) => {


    return (

        <>

            <a id="modalOpen" className={styles["modal-open"]} href="#modal-tabbed">{name}</a>

            <div className={styles["modal"]} id="modal-tabbed" >
                <div className={styles["modal-content"]}>
                    <a href="#" className={styles["modal-close"]} title="Close Modal">X</a>
                    <h3>{title}</h3>

                    <div>

                        {children}


                    </div>

                    <div >


                        <a href="#"
                            className={styles["modal-close-ok"]}
                            title="CONFIRM!"
                            onClick={handleOK}
                        >
                            SAVE
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