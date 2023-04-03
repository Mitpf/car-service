import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useReqTokenService = (httpReqs) => {
    const { token } = useContext(AuthContext)

    const service = httpReqs(token);

    return service;
}