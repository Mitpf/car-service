
import { useEffect, useContext,useCallback } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import { servCarOrderService } from "../../services/servCarOrderService";

import { useForm } from "../../hooks/useForm";


export const FormCreateEditServ = ({
    clientOrderID,
    loadFormValues
}) => {

    const { token } = useAuthContext();
    const servOrderTokenReq = servCarOrderService(token);

    const initValues = {

        statusOrder: "accepted",
        diagnostic: "no record",
        replacedParts: "no record",
        repairHistory: "no record",
        totalPrice: "no record",

    };



    const onSubmitHandler = () => {
        console.log('submit serv id order', clientOrderID);
        console.log('values', values);

    }

    
    const { values, changeHandler, onSubmit, changeValues } = useForm(initValues, onSubmitHandler);

    /* take values from db and set to form fields */
    useEffect(() => {
        try {
            servOrderTokenReq.getItemsByClientOrderID(clientOrderID)
                .then(result => {
                    console.log('current servOrder in DB', result[0]);
                    changeValues(result[0])
                })
        }
        catch (err) {
            console.log('ERROR', err);
        }


    }, [clientOrderID]);


    const memoizedLoadFormValues = useCallback(() => {
        loadFormValues(values);
      }, [values, loadFormValues]);

    /* SEND the new values to the state in parrent component */

    useEffect(() => {
        console.log('usef print values', values);
        loadFormValues(values);

    }, [values]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('form values', values);
    }

    return (
        <>

            <form
                method="POST"
                onSubmit={onSubmit}
            >

                <div >

                    {/* statusOrder */}
                    <label >
                        <p>statusOrder:</p>

                        <select
                            id="statusOrder"
                            name="statusOrder"
                            value={values.statusOrder}
                            onChange={changeHandler}

                        >
                            <option value="accepted">accepted</option>
                            <option value="diagnostic">diagnostic</option>
                            <option value="notReparable">not reparable</option>
                            <option value="denied">denied</option>
                            <option value="diagnostic succes">pdiagnostic succes</option>
                            <option value="diagnostic no succes">diagnostic no succes</option>
                            <option value="work">work</option>
                            <option value="waiting for parts">waiting for parts</option>
                            <option value="completed">completed</option>


                        </select>

                    </label>

                    {/* diagnostic */}

                    <label >
                        <p>Diagnostic:</p>

                        <textarea

                            name="diagnostic"
                            placeholder="diagnotic conclusions"
                            value={values.diagnostic}
                            onChange={changeHandler}

                        />

                    </label>

                    {/* repairHistory */}
                    <label >
                        <p>repairHistory:</p>

                        <textarea

                            name="repairHistory"
                            placeholder="repairHistory"
                            value={values.repairHistory}
                            onChange={changeHandler}

                        />

                    </label>


                    {/* replacedParts */}
                    <label >
                        <p>replacedParts:</p>

                        <textarea

                            name="replacedParts"
                            placeholder="replacedParts"
                            value={values.replacedParts}
                            onChange={changeHandler}

                        />

                    </label>

                    {/* replacedParts */}
                    <label >
                        <p>total Price:</p>

                        <input

                            name="totalPrice"
                            placeholder="totalPrice"
                            value={values.totalPrice}
                            onChange={changeHandler}

                        />

                    </label>

                </div>


            </form>
           

        </>
    )
}

