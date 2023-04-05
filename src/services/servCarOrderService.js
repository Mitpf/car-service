
import { httpRequests } from "./httpRequests";

const baseUrl = 'http://localhost:3030/data/servcarorders';


export const servCarOrderService = (token) => {


    const httpReqToken = httpRequests(token);

    const create = async (orderData) => {
        const result = await httpReqToken.post(baseUrl, orderData);

        console.log('RESULT CREATE serv-ORDER', result);

        return result;
    }


    const getItemsByClientOrderID = async (clientOrderID) => {

        const query = encodeURIComponent(`clientOrderID="${clientOrderID}"`);

        const result = await httpReqToken.get(`${baseUrl}?where=${query}`);

        return result;
    }


    const checkIsAcceptedByID = async (clientOrderID) => {
        const query = encodeURIComponent(`clientOrderID="${clientOrderID}"`);

        const result = await httpReqToken.get(`${baseUrl}?where=${query}`);

        return result.length > 0;
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
        return data;
    }


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
        getItemsByQueryRelation
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