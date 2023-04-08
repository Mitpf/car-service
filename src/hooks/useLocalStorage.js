import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // const key = useId();

  const checkIsPersStateSerialized = () => {

    const persistedStateSerialized = localStorage.getItem(key);
    if (persistedStateSerialized) {
        const persistedState = JSON.parse(persistedStateSerialized);

        return persistedState;
    }

    return false;
}


    const [state, setState] = useState(checkIsPersStateSerialized() || initialValue);

    const setLocalStorageState = (value) => {
        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState,
    ];
};
