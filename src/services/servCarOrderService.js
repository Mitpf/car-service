
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


    return {
        create,
        getItemsByClientOrderID,
        checkIsAcceptedByID
    }

}





/* 

 const searchQuery = encodeURIComponent(`clientOrderID="${clientOrderID}"`);
        const relationQuery = encodeURIComponent(`author=_ownerId:users`);


        const response = await fetch(`${'http://localhost:3030/data/servcarorders'}?where=${searchQuery}&load=${relationQuery}`);
        const fdata = await response.json();

*/