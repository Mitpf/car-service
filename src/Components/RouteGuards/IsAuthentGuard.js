import { Navigate, Outlet } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";

export const IsAuthentGuard = ({
    children,
}) => {
    const { isAuthenticated,userId } = useAuthContext();
    
    if (isAuthenticated) {
        return <Navigate to={`/user/${userId}/orders/*`} />;
    }

    return children ? children : <Outlet />
};