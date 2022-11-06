import { IGame, IProvider } from './../../types/index';

export enum ActionKind {
  setGames = 'SET_GAMES',
  setSelectedProvider = 'SET_SELECTED_PROVIDER',
  setProviders = 'SET_PROVIDERS',
}

export const setGamesAction = (payload: IGame) => ({
  type: ActionKind.setGames,
  payload,
});

export const setSelectedProviderAction = (payload: IProvider) => ({
  type: ActionKind.setSelectedProvider,
  payload,
});

export const setProvidersAction = (payload: IProvider[]) => ({
  type: ActionKind.setProviders,
  payload,
});
