import { IGame, IProvider } from '../../types';
import { ActionKind } from '../actions';

interface IAction {
  type: string;
  payload?: unknown;
}

export interface IStore {
  games: IGame;
  selectedProvider: IProvider | null;
  providers: IProvider[];
}

export const reducer = (store: IStore, action: IAction) => {
  switch (action.type) {
    case ActionKind.setGames:
      return {
        ...store,
        games: action.payload,
      };
    case ActionKind.setProviders:
      return {
        ...store,
        providers: action.payload,
      };
    case ActionKind.setSelectedProvider:
      return {
        ...store,
        selectedProvider: action.payload,
      };
    default:
      return store;
  }
};
