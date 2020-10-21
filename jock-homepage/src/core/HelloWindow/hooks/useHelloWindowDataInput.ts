import { useCallback, useState } from 'react';
import { DEFAULT_STATE, STATE_TYPES } from '../constatnts';

/** Хук управляет состоянием ввода в приветственном окне */
export function useHelloWindowDataInput() {
    const [state, setState] = useState(DEFAULT_STATE);

    const handleStateChange = useCallback((event, type: STATE_TYPES) => {
        const { value } = event.target;
        setState((prevState) => {
            return {
                ...prevState,
                [type.toString()]: value,
            }
        });
    }, []);

    return {
        state,
        handleStateChange,
    }
};
