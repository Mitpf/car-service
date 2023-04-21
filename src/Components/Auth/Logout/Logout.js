import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { allertError } from '../../../utils/allertMessage';

import { AuthContext } from '../../../contexts/AuthContext';


export const Logout = () => {

    const { onLogout } = useContext(AuthContext);

    useEffect(() => {

        try { onLogout(); }
        catch (error) {
            console.log('catched error is ', error );
            allertError(error);
        }


    }, [onLogout]);

    return <Navigate to="/" />


}