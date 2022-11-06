import { createContext, ReactNode, useReducer } from 'react';
import { reducer } from '../reducers';
import { IStore } from '../reducers';
import { IStoreContextProvider } from './types';

interface IStoreProps {
  children: ReactNode;
}

const initialState: IStore = {
  games: [],
  providers: [],
  selectedProvider: null,
};

export const StoreContext = createContext<IStoreContextProvider | null>(null);

export const StoreProvider = ({ children }: IStoreProps): JSX.Element => {
  const [store, dispatch] = useReducer(reducer, initialState);

  const contextValue: IStoreContextProvider = {
    store,
    dispatch,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
