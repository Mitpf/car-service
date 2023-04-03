
import { httpRequests } from "./httpRequests";

import { useReqTokenService } from "../hooks/useReqTokenService";

const baseUrl = 'http://localhost:3030/data/servcarorders';


export const servCarOrderService = (token) => {


    const httpReqToken = httpRequests(token);

    const create = async (orderData) => {
        const result = await httpReqToken.post(baseUrl, orderData);

        console.log('RESULT CREATE serv-ORDER', result);

        return result;
    }


    return {
        create
    }

}