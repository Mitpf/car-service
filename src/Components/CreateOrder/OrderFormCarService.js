


import styles from './CreateOrder.module.css';

export const OrderFormCarService = ({

    values,
    changeHandler,
    addInputfields,
    removeInputfields,
    countInputs,
    orderID

}) => {

    

    return (

        <>


            <h4 id="headOrder" className={styles.orderInfo}>
                Describe you service Order:
            </h4>

            {/* CHECK boxes type order */}
            <label className={styles.label}>
                <span className={styles.labelspan}>
                    type Order
                    <span className={styles.required}>*</span>
                </span>
                {/* CHECK BOX 1 problem */}
                <label>
                    problem
                    <input
                        className={styles.inputCheckbox}
                        type="checkbox"
                        name="problem"
                        checked={values.problem}
                        onChange={changeHandler}

                    />
                </label>

                {/* CHECK BOX 2 Consumables */}
                <label className={styles.consumables}>
                    consumables
                    <input
                        className={styles.inputCheckbox}
                        type="checkbox"
                        name="consumables"
                        checked={values.consumables}
                        onChange={changeHandler}
                    />
                </label>

            </label>

            {/* DESCRIPTION */}
            <label className={`${styles.titleInput} ${styles.label}`}>
                <span className={styles.labelspan}>
                    Description
                    <span className={styles.required}>*</span>
                </span>
                {/* TITLE DESCRIPTION */}
                <input
                    className={styles.inpTxtMailTel}
                    name="title"
                    placeholder="description title"
                    value={values.title}
                    onChange={changeHandler}
                />

            </label>

            {/* text DESCRIPTION */}
            <label className={styles.label}>
                <span className={styles.description}> </span>
                <textarea
                    className={styles.descriptionText}
                    name="text"
                    placeholder="Describe Malfunction, damage or consumables/parts for replacement"
                    value={values.text}
                    onChange={changeHandler}
                />

            </label>


            {/* additional PHOTO LINKS */}
            <p id="headPhotoLinks">
                Add photos of your damages
            </p>

            <button
                className={styles.buttonLinks}
                onClick={addInputfields}>
                add photo links
            </button>

            <button
                className={styles.buttonLinks}
                onClick={removeInputfields}>
                remove photo links
            </button>

            {
                countInputs.map((x,index) => (
                    <div id="photoLinks" key={`photo-${index}-${x}-${orderID}`}>

                        <span className={`${styles.labelspan} ${styles.spanmargin}`}>
                            Photo {x}
                        </span>

                        <input
                            className={styles.inpTxtMailTel}
                            name="photos"
                            placeholder={`link ${x}`}
                            value={values.photos.length >= x ? values.photos[x - 1].link : ''}
                            onChange={(e) => changeHandler(e, x)}
                        />

                    </div>
                )
                )
            }



        </>

    );
}