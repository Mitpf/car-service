import { Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


export const AdminGuard = ({
    children,
}) => {

    const { isAdmin } = useAuthContext();


    if (!isAdmin) {
        return <Navigate to={`/user/auth/login`} replace />
    }

    return children ? children : <Outlet />
};