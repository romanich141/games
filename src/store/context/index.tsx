import { createContext, ReactNode, useReducer } from 'react';
import { reducer } from '../reducers';

interface IStoreProps {
  children: ReactNode;
}

const initialState = {
  games: [],
  providers: [],
  selectedProvider: null,
};

export const StoreContext = createContext(initialState);

export const StoreProvider = ({ children }: IStoreProps): JSX.Element => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
