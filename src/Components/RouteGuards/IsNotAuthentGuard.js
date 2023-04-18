import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

export const IsNotAuthentGuard = ({
    children,
}) => {
    const { isAuthenticated } = useAuthContext();
    
    if (!isAuthenticated) {
        return <Navigate to="/user/auth/login" />;
    }

    return children ? children : <Outlet />
};