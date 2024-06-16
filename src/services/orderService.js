import { httpRequests } from "./httpRequests";

const prodhost = 'https://carserver-mitpf-dimitar-petkovs-projects-5073153f.vercel.app';
const localhost = 'http://localhost:3030';
const baseUrl = `${prodhost}/data/clientorders`;


export const orderServiceRequests = (token) => {



    const httpReqToken = httpRequests(token);


    const getOne = async (orderId) => {
        const result = await httpReqToken.get(`${baseUrl}/${orderId}`);

        return result;
    };

    const getAll = async () => {
        const result = await httpReqToken.get(baseUrl);
        const orders = Object.values(result);

        return orders;
    }


    const create = async (orderData) => {
        const result = await httpReqToken.post(baseUrl, orderData);

        return result;
    }


    const getItemsByPropNameValue = async (propName, propValue) => {
        const query = encodeURIComponent(`${propName}="${propValue}"`);

        const result = await httpReqToken.get(`${baseUrl}?where=${query}`);

        return result;

    }





    const edit = (orderId, data) => httpReqToken.put(`${baseUrl}/${orderId}`, data);

    const update = (id, data) => httpReqToken.patch(`${baseUrl}/${id}`, data)

    const deleteOrder = (orderId) => httpReqToken.delete(`${baseUrl}/${orderId}`);


    return {
        create,
        getAll,
        getOne,
        edit,
        update,
        delete: deleteOrder,
        getItemsByPropNameValue
    }

}