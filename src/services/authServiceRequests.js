import { httpRequests } from "./httpRequests"; 

const baseUrl = `http://localhost:3030/users`;

export const authServiceRequests = (token) => {
    const request = httpRequests(token);

    return {
        login: (data) => request.post(`${baseUrl}/login`, data),
        register: (data) => request.post(`${baseUrl}/register`, data),
        logout: () => request.get(`${baseUrl}/logout`),
    }
};