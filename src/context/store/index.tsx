import { createContext, ReactNode, useReducer } from "react";
import { reducer } from '../../store/reducers';

interface IStoreProps {
    children: ReactNode
}

const initialState = {
    games: [],
    error: null,
};

export const StoreContext = createContext(initialState);

export const Store = ({ children}: IStoreProps): ReactNode => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <StoreContext.Provider value={{ state, dispatch }}>
            {children}
        </StoreContext.Provider>
    );
};
