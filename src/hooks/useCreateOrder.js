
import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useForm } from './useForm';
import { httpRequests } from '../services/httpRequests';




export const useCreateOrder = () => {

    const { userContacts } = useContext(AuthContext);
    const { email, phoneNumber, flNames } = userContacts;

    const initValues = {
        flNames: flNames || '',
        email: email || '',
        phoneNumber: phoneNumber || '',
        bookedDate: '',
        bookedHour: '',
        problem: false,
        consumables: false,
        title: '',
        text: '',
        photos: [],
        brandModel: '',
        productDate: '',
        engine: 'petrol',
        km: '',
        imageUrl: ''
    };

    const onSubmitHandler = () => {
        console.log('click');
        console.log(values);
    }

    const { values, changeHandler, onSubmit } = useForm(initValues, onSubmitHandler);


    const [countInputs, setCountInputs] = useState([]);

    const addInputfields = (e) => {
        e.preventDefault();
        setCountInputs(state => [...state, state.length + 1]);

        values.photos.push({ link: '' });
    }

    const removeInputfields = (e) => {
        e.preventDefault();
        setCountInputs(state => state.slice(0, -1));
        values.photos = values.photos.slice(0, -1);
    }

    return {
        values, changeHandler, onSubmit, countInputs, addInputfields,
        removeInputfields, flNames, email, phoneNumber
    }

}


