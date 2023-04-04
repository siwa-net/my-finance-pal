import { useCallback, useState } from 'react';

/**
 * Custom hook to toggle a boolean value.
 * @param initialValue
 */
export const useToggle = (initialValue: boolean) => {
    const [state, setState] = useState(initialValue);
    const toggleState = useCallback(() => {
        setState((oldValue) => !oldValue);
    }, []);

    return [state, toggleState] as const;
};
