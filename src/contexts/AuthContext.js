
import { allertError } from '../utils/allertMessage';

import { createContext, useContext, useState } from 'react';
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
            } else {
                navigateTo(`/user/${result._id}/orders`)
            }

        } catch (error) {
            console.log('There is a problem', error);
            allertError('not valid username or password', error);
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
            allertError(error);

            if (error.code === 403 && error.message === 'Invalid access token') {
                // The token is no longer valid, prompt the user to log in again
                console.log('Token expired, please log in again');
                allertError('Token expired, please log in again');
                setAuth({});

                navigateTo('/user/auth/login');
            } else {
                // Other error, clear localStorage
                console.log('logout clearing LocalStorage');
                allertError('logout clearing LocalStorage');
                localStorage.clear();
                setAuth({});
                navigateTo('/errors/serverdisconnected');
            }

        }

    };


    /* REGISTER */

    const onRegisterSubmit = async (values) => {

        const { repassword, ...registerData } = values;

        if (registerData.email.length < 6) {
            allertError(`insert email must be minumum 6 characters`);
            return;
        }

        if (repassword !== registerData.password) {
            allertError('passwords did not match');
            return;
        }

        if (registerData.password.length < 6) {
            allertError(`insert password should be minimum 6 characters`);
            return;
        }



        try {
            const result = await authServTokenReq.register(registerData);
            setAuth(result);
            console.log("result registri", result);
            navigateTo('/');
        }
        catch (error) {
            console.log('There is a problem', error);
            allertError(`Server problem`, error);
        }

    };


    /* LOAD EXTERNAL DATA in DB with authorized requests */

    /* const loadXdata = async () => {
        const dataArr = loadData();



        const promises = dataArr.forEach(async x => {
            try {

                const result = await authServTokenReq.register(x.user);

                setAuth(result);
                const orderServiceReqToken = orderServiceRequests(result.accessToken);

                x.records.forEach(async z => await orderServiceReqToken.create(z))

            }
            catch (error) {
                console.log('There is a problem', error.message);
                allertError(`There is a problem \n ${error.message}`);
            }

        })
        await Promise.all(promises);

        await authServTokenReq.register({ email: 'admin@abv.bg', password: 'admin' });
    } */


    const loadXdata = async () => {

        try {
          const dataArr = loadData();
      
          const promises = dataArr.map(async (x, index) => {
            const result = await authServTokenReq.register(x.user);
            setAuth(result);
            const orderServiceReqToken = orderServiceRequests(result.accessToken);
      
            await Promise.all(
              x.records.map(async (z) => {
                

                if(index==dataArr.length-1){
                    const authServiceTokenReq = authServiceRequests(result.accessToken)
                    await Promise.all([
                        orderServiceReqToken.create(z), localStorage.clear(),setAuth({}),
                        authServiceTokenReq.login({ email: 'admin@abv.bg', password: 'admin' })
                      ]);
                  }

                await orderServiceReqToken.create(z);  

              })
            );

           

          });
      
          await Promise.all(promises);

         
          
        } catch (error) {
          console.log('There is a problem', error.message);
          allertError(`There is a problem \n ${error.message}`);
        }



      };

/* authServTokenReq.login(data); */

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
        loadXdata,


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