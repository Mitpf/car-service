
import { useState, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useForm } from './useForm';
import { httpRequests } from '../services/httpRequests';
import { orderServiceRequests } from '../services/orderService';




export const useCreateOrder = () => {

    const { userContacts, token } = useContext(AuthContext);
    const { email, phoneNumber, flNames } = userContacts;
    const orderServiceToken = orderServiceRequests(token);

    const onSubmitHandler = async () => {

        const { problem, consumables, title, text,
            photos, brandModel, productDate, engine, km, imageUrl,
            flNames, email, phoneNumber, bookedDate, bookedHour } = values;

        const orderData = {
            typeOrder: { problem, consumables },
            statusOrder:'not Accepted',
            description: { title, text, photos },
            carInfo: { brandModel, productDate, engine, km, imageUrl },
            user: { flNames, email, phoneNumber },
            carAbmissionDate: { date: bookedDate, hour: bookedHour }
        }

        const result = await orderServiceToken.create(orderData);
    }


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


