import { DispatchWithoutAction } from 'react';
import { IStore } from '../reducers';

export interface IStoreContextProvider {
  store: IStore;
  dispatch: DispatchWithoutAction;
}
