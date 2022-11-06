import { IGame, IProvider } from '@/store/reducers/types';
import { ActionKind } from '@/store/actions';

interface IAction {
  type: string;
  payload?: unknown;
}

export interface IStore {
  games: IGame;
  selectedProvider: IProvider | null;
  providers: IProvider[];
  searchGame: string;
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
    case ActionKind.setSearchGame:
      return {
        ...store,
        searchGame: action.payload,
      };
    default:
      return store;
  }
};
