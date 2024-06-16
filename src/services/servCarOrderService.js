
import { httpRequests } from "./httpRequests";


const prodhost = 'https://carserver-mitpf-dimitar-petkovs-projects-5073153f.vercel.app';
const localhost = 'http://localhost:3030';

const baseUrl = `${prodhost}/data/servcarorders`;


export const servCarOrderService = (token) => {


    const httpReqToken = httpRequests(token);

    const getOne = async (orderID) => {
        try {
            const result = await httpReqToken.get((`${baseUrl}/${orderID}`));

            return result;
        }
        catch (error) {
            console.log('error in getOne', error);
        }


    }

    const create = async (orderData) => {
        const result = await httpReqToken.post(baseUrl, orderData);

        console.log('RESULT CREATE serv-ORDER', result);

        return result;
    }


    const getItemsByClientOrderID = async (clientOrderID) => {

        const query = encodeURIComponent(`clientOrderID="${clientOrderID}"`);
        try {
            const result = await httpReqToken.get(`${baseUrl}?where=${query}`);

            return result;

        }
        catch (error) {
            console.log('clientOrder is not copied/accepted to servcar collection :', error);
        }

    }


    const checkIsAcceptedByID = async (clientOrderID) => {
        const query = encodeURIComponent(`clientOrderID="${clientOrderID}"`);

        try {
            const result = await httpReqToken.get(`${baseUrl}?where=${query}`);

            if (result) {

                return result.length > 0;
            }
            else { throw new Error(`check isaccepted error`) }

        }
        catch (error) {
            console.log('error in ChecIsAccepted', error);
        }

    }

    const getItemsByPropNameValue = async (propName, propValue) => {
        const query = encodeURIComponent(`${propName}="${propValue}"`);

        const result = await httpReqToken.get(`${baseUrl}?where=${query}`);

        return result;

    }

    const getItemsByQueryRelation = async (search, relation) => {

        const idRelationName = Object.keys(relation)[0];
        const nameRelationDB = relation[idRelationName];

        const propName = Object.keys(search)[0];
        const propValue = search[propName];
        const searchQuery = encodeURIComponent(`${propName}="${propValue}"`);
        const relationQuery = encodeURIComponent(`author=${idRelationName}:${nameRelationDB}`);

        const result = await httpReqToken.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);

        const data = Object.values(result);
        console.log('res relate', result, "data", data);
        return data;
    }

    const edit = (orderId, data) => httpReqToken.put(`${baseUrl}/${orderId}`, data);

    /* 
    const searchQuery = encodeURIComponent(`gameId="${gameId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
    */

    return {
        create,
        getItemsByClientOrderID,
        checkIsAcceptedByID,
        getItemsByQueryRelation,
        getItemsByPropNameValue,
        getOne,
        edit
    }

}



/* const getItemsByPropNameValue = async (propName,propValue) => {
        const query = encodeURIComponent(`${propName}="${propValue}"`);

        const result = await httpReqToken.get(`${baseUrl}?where=${query}`);

        return result;

    } */

/* 

 const searchQuery = encodeURIComponent(`clientOrderID="${clientOrderID}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);


        const response = await fetch(`${'http://localhost:3030/data/servcarorders'}?where=${searchQuery}&load=${relationQuery}`);
        const fdata = await response.json();

*/