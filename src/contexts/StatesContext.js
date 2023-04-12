import { createContext, useState } from 'react';




export const StatesContext = createContext();


export const StateProvider = ({
    children,
}) => {


    const [toggledAcceptedState, setToggledAcceptedState] = useState(false);

    function toggleAcceptedState() {
        console.log('cliiiiicked');
        setToggledAcceptedState((oldState)=>!oldState);
    }

    const contextValues = {

        toggledAcceptedState,
        toggleAcceptedState

    };



    return (
        <>
            <StatesContext.Provider value={contextValues}>
                {children}
            </StatesContext.Provider>
        </>
    );
};