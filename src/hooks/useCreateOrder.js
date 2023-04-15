
import { useState, useContext, useEffect, } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useForm } from './useForm';
import { httpRequests } from '../services/httpRequests';
import { orderServiceRequests } from '../services/orderService';
import { useNavigate, useParams, redirect, Navigate } from 'react-router-dom';




export const useCreateOrder = ({ isEdit }) => {

    const { userContacts, token, userId } = useContext(AuthContext);
    const { email, phoneNumber, flNames } = userContacts;
    const { orderID } = useParams();



    const clientOrderTokenReq = orderServiceRequests(token);

    const navigateTo = useNavigate();

    const onSubmitHandler = async () => {

        const { problem, consumables, title, text,
            photos, brandModel, productDate, engine, km, imageUrl,
            flNames, email, phoneNumber, bookedDate, bookedHour } = values;

        const orderData = {
            typeOrder: { problem, consumables },
            statusOrder: 'not Accepted',
            description: { title, text, photos },
            carInfo: { brandModel, productDate, engine, km, imageUrl },
            user: { flNames, email, phoneNumber },
            carAbmissionDate: { date: bookedDate, hour: bookedHour }
        }


        if (isEdit) {
            const res = await clientOrderTokenReq.edit(orderID, orderData);
            return navigateTo(`/user/${userId}/orders`);
        }


        const result = await clientOrderTokenReq.create(orderData);
        navigateTo(`/user/${userId}/orders`);

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
        km: '0000000',
        imageUrl: ''
    };







    const { values, changeHandler, onSubmit, changeValues } = useForm(initValues, onSubmitHandler);

    function arrayFromNum(num) {
        let arr = [];
        for (let i = 1; i <= num; i++) {
            arr.push(i);
        }
        return arr;
    }

    const [countInputs, setCountInputs] = useState([]);


    useEffect(() => {
        if (isEdit) {

            clientOrderTokenReq.getOne(orderID)
                .then(currentOrder => {

                    console.log('rescr', currentOrder);

                    const currentData = {
                        flNames: currentOrder.user.flNames,
                        email: currentOrder.user.email,
                        phoneNumber: currentOrder.user.phoneNumber,
                        bookedDate: currentOrder.carAbmissionDate.date,
                        bookedHour: currentOrder.carAbmissionDate.hour,
                        problem: currentOrder.typeOrder.problem,
                        consumables: currentOrder.typeOrder.consumables,
                        title: currentOrder.description.title,
                        text: currentOrder.description.text,
                        photos: [...currentOrder.description.photos],
                        brandModel: currentOrder.carInfo.brandModel,
                        productDate: currentOrder.carInfo.productDate,
                        engine: currentOrder.carInfo.engine,
                        km: currentOrder.carInfo.km,
                        imageUrl: currentOrder.carInfo.imageUrl
                    }

                    changeValues(currentData);

                    const countPhotos = currentData.photos.length;
                    const photosArray= arrayFromNum(countPhotos);
                    setCountInputs(photosArray)
                })

        }


    }, [orderID])





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
        removeInputfields, flNames, email, phoneNumber, orderID
    }

}


