
import { useState, useContext, useEffect, } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useForm } from './useForm';
import { httpRequests } from '../services/httpRequests';
import { orderServiceRequests } from '../services/orderService';
import { useNavigate, useParams, redirect, Navigate } from 'react-router-dom';

import { allertError } from '../utils/allertMessage';




export const useCreateOrder = ({ isEdit }) => {

    const { userContacts, token, userId } = useContext(AuthContext);
    const { email, phoneNumber, flNames } = userContacts;
    const { orderID } = useParams();



    const clientOrderTokenReq = orderServiceRequests(token);

    const navigateTo = useNavigate();

    const onSubmitHandler = async () => {

        try {

            const { problem, consumables, title, text,
                photos, brandModel, productDate, engine, km, imageUrl,
                flNames, email, phoneNumber, bookedDate, bookedHour } = values;

            if (flNames.length < 2) {
                allertError('Name should be at least 2 characters');
                return;
            }

            if (phoneNumber.length < 6) {
                allertError('Phone number should be at least 6 digits');
                return;
            }

            if (bookedDate == '' || bookedHour == '') {
                allertError('Should choose date and hour for appoitment');
                return;
            }


            if (problem == false && consumables == false) {
                allertError('checkmark at least one type of Order');
                return;
            }

            if (title.length < 3) {
                return allertError('need title of description, at least 3 characters')
            }

            if (text.length < 10) {
                return allertError('description text minimum 10 characters')
            }

            if (brandModel.length < 3) {
                return allertError('fill brandmodel name car, at least 3 characters')
            }

            if (productDate == '') {
                return allertError('choose date of production')
            }

            if (engine == '') {
                return allertError('choose type engine')
            }

            console.log(productDate);

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

            console.log('problem', problem);
            const result = await clientOrderTokenReq.create(orderData);
            navigateTo(`/user/${userId}/orders`);
        }
        catch (error) {
            console.log('catched error is ', error );
            allertError(error)
        }



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
        try {

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
                        const photosArray = arrayFromNum(countPhotos);
                        setCountInputs(photosArray)
                    })

            }
        }
        catch (error) {
            console.log('catched error is ', error );
            allertError(error);
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


