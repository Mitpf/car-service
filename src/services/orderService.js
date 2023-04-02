import { httpRequests } from "./httpRequests";

const baseUrl = 'http://localhost:3030/data/clientorders'


export const orderService = (token) => {
    const httpreqToken = httpRequests(token)

    const create = async (orderData) => {
        const result = await httpreqToken.post(baseUrl, orderData);
        console.log('result', result);
        return result;
    }


    return {
    create

    } 
    
}