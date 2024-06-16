import { httpRequests } from "./httpRequests"; 

const prodhost = 'https://carserver-mitpf-dimitar-petkovs-projects-5073153f.vercel.app';
const localhost = 'http://localhost:3030';
const baseUrl = `${prodhost}/users`;


export const authServiceRequests = (token) => {
    const request = httpRequests(token);

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    }
};