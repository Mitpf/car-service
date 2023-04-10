import { createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

import { authServiceRequests } from '../services/authServiceRequests';
import { orderServiceRequests } from '../services/orderService';

import { loadData } from '../loadData/loadData';

export const AuthContext = createContext();


export const AuthProvider = ({
    children,
}) => {

    /* INIT functions, states */

    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigateTo = useNavigate();
    
    const authServTokenReq = authServiceRequests();


    /* -----Auth reqs--------- */

    /* LOGIN */
    const onLoginSubmit = async (data) => {
        try {
            console.log('logindata', data);
            const result = await authServTokenReq.login(data);
console.log('rrres', result);
            setAuth(result);
            if (result.email == 'admin@abv.bg') {
                navigateTo('/orders/list');
            }else{
                navigateTo(`/user/${result._id}/orders`)
            }

        } catch (error) {
            console.log('There is a problem', error);
        }
    };


    /* LOGOUT */
    const onLogout = async () => {

        try {
            await authServTokenReq.logout();

            setAuth({});
        }
        catch (error) {
            console.log('ERROR', error);

            if (error.code === 403 && error.message === 'Invalid access token') {
                // The token is no longer valid, prompt the user to log in again
                console.log('Token expired, please log in again');
                setAuth({});

                navigateTo('/user/auth/login');
            } else {
                // Other error, clear localStorage
                console.log('logout clearing LocalStorage');
                localStorage.clear();
                setAuth({});
                navigateTo('/errors/serverdisconnected');
            }

        }

    };


    /* REGISTER */

    const onRegisterSubmit = async (values) => {

        const { repassword, ...registerData } = values;
        if (repassword !== registerData.password) {
            return;
        }
        console.log('regdata', registerData);
        try {
            const result = await authServTokenReq.register(registerData);
            setAuth(result);
            console.log("result registri", result);
            navigateTo('/');
        }
        catch (error) {
            console.log('There is a problem', error);
        }

    };


    /* LOAD EXTERNAL DATA in DB with authorized requests */

    const loadXdata = async () => {
        const dataArr = loadData();

        dataArr.forEach(async x => {
            try {

                const result = await authServTokenReq.register(x.user);

                setAuth(result);
                const orderServiceReqToken = orderServiceRequests(result.accessToken);

                x.records.forEach(async z => await orderServiceReqToken.create(z))

            }
            catch (error) {
                console.log('There is a problem', error);
            }

        })

    }


    const contextValues = {

        onLoginSubmit,
        onLogout,
        onRegisterSubmit,
        userId: auth._id,
        token: auth.accessToken,
        userEmail: auth.email,
        isAuthenticated: !!auth.accessToken,
        isAdmin: 'admin@abv.bg' === auth.email,
        userContacts: {
            email: auth.email,
            phoneNumber: auth.phoneNumber,
            flNames: auth.firstLastNames
        },
        loadXdata

    };



    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};