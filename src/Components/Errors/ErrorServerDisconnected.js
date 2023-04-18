import { useLocation } from 'react-router-dom';




export const ErrorServerDisconnected = () => {


    const location = useLocation();
    const message = location.state.message;


    return (
        <>

            <h1>{message}!!!</h1>


        </>

    );
}