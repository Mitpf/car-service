

import { useState, Fragment } from 'react';


import styles from './CreateOrder.module.css';

export const CreateOrder = () => {

    const [countInputs, setCountInputs] = useState([]);

    const addInputfields = (e) => {
        e.preventDefault();
        setCountInputs(state => [...state, state.length + 1])
    }
    const removeInputfields = (e) => {
        e.preventDefault();
        setCountInputs(state => state.slice(0, -1))
    }



    const onSubmit = (e) => {
        e.preventDefault();
        const dataF= new FormData(e.target);
        console.log(Object.fromEntries(dataF));
    }
    return (

        <div className={styles.container}>
            <div className={styles.title}>
                <h2 className={styles.header}>New Order car service</h2>
            </div>
            <div className={styles["d-flex"]}>


                <form className={styles.form} method="Post" onSubmit={onSubmit}>

                    <label className={styles.label}>
                        <span className={styles.labelspan}>
                            type Order
                            <span className={styles.required}>*</span>
                        </span>

                        <label>
                            problem
                            <input className={styles.inputCheckbox} type="checkbox" name="problem" />
                        </label>


                        <label className={styles.consumables}>
                            consumables
                            <input className={styles.inputCheckbox} type="checkbox" name="consumables" />
                        </label>


                    </label>

                    <label className={`${styles.titleInput} ${styles.label}`}>
                        <span className={styles.labelspan}>
                            description Title
                            <span className={styles.required}>*</span>
                        </span>

                        <input className={styles.inpTxtMailTel} name="title" />

                    </label>

                    <label className={styles.label}>
                        <span className={styles.description}>
                            Description text
                            <span className={styles.required}>*</span>
                        </span>
                        <textarea className={styles.descriptionText} name="description" />

                    </label>



                    <button className={styles.buttonLinks} onClick={addInputfields}> add image links</button>
                    <button className={styles.buttonLinks} onClick={removeInputfields}> remove image links</button>
                    {countInputs.map(x => (
                        <Fragment key={x} >

                            <span className={styles.labelspan}>
                                Photo {x}
                            </span>
                            <input className={styles.inpTxtMailTel} name={`photoLink ${x}`} />

                        </Fragment>
                    ))}

                    <h4>car Info:</h4>

                    <label className={`${styles.titleInput} ${styles.label}`}>
                        <span className={styles.labelspan}>
                            brandModel:
                            <span className={styles.required}>*</span>
                        </span>

                        <input className={styles.inpTxtMailTel} name="title" />

                    </label>


                    <label className={`${styles.titleInput} ${styles.label}`}>
                        <span className={styles.labelspan}>
                            product Date
                            <span className={styles.required}>*</span>
                        </span>

                        <input className={styles.inpTxtMailTel} name="title" />

                    </label>


                    <label className={`${styles.titleInput} ${styles.label}`}>
                        <span className={styles.labelspan}>
                            type engine
                            <span className={styles.required}>*</span>
                        </span>

                        <input className={styles.inpTxtMailTel} name="title" />

                    </label>


                    <label className={`${styles.titleInput} ${styles.label}`}>
                        <span className={styles.labelspan}>
                            km

                        </span>

                        <input className={styles.inpTxtMailTel} name="title" />

                    </label>


                    <label className={`${styles.titleInput} ${styles.label}`}>
                        <span className={styles.labelspan}>
                            image Link

                        </span>

                        <input className={styles.inpTxtMailTel} name="title" />

                    </label>






                    <input type="submit" />

                </form>

            </div>
        </div >

    );
}