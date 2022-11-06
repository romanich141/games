import { IGame, IProvider, TSearchGame } from '@/store/reducers/types';

export enum ActionKind {
  setGames = 'SET_GAMES',
  setSelectedProvider = 'SET_SELECTED_PROVIDER',
  setProviders = 'SET_PROVIDERS',
  setSearchGame = 'SET_SEARCH_GAME',
}

export const setGamesAction = (payload: IGame) => ({
  type: ActionKind.setGames,
  payload,
});

export const setSelectedProviderAction = (payload: string) => ({
  type: ActionKind.setSelectedProvider,
  payload,
});

export const setProvidersAction = (payload: IProvider[]) => ({
  type: ActionKind.setProviders,
  payload,
});

export const setSearchGameAction = (payload: TSearchGame) => ({
  type: ActionKind.setSearchGame,
  payload,
});
