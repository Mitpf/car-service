import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';


export const OwnerOrder = ({
    children,
}) => {
    const { userID: userIdParam } = useParams();

    const { userId } = useAuthContext();


    if (userIdParam !== userId) {
        return <Navigate to={`/user/auth/login`} replace />
    }

    return children ? children : <Outlet />
};