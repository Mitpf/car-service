import { useState, useEffect } from 'react';

export const useForm = (initialValues, onSubmitHandler) => {
    const [values, setValues] = useState(initialValues);

    /* change handler update data with new values and preserv old unchangedvalues */
    const changeHandler = (e, currentCount) => {
        if (e.target.type == 'checkbox') {

            return setValues(state => ({ ...state, [e.target.name]: e.target.checked }));

        }

        if (e.target.name == 'photos') {
            let pics = [...values.photos];

            pics[currentCount - 1] = { link: e.target.value }

            return setValues({ ...values, photos: pics })
        }



        setValues(state => ({ ...state, [e.target.name]: e.target.value }));

    };

    const onSubmit = (e) => {
        e.preventDefault();

        onSubmitHandler(values);

        setValues(initialValues);
    };
    /*  const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log(isChecked);
      }; */
    const changeValues = (newValues) => {
        // TODO: Validate newValues shape (like initialValues)

        setValues(newValues);
    };

    return {
        values,
        changeHandler,
        onSubmit,
        changeValues,
    };
};