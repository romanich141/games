import { IGame, IProvider } from '../reducers/index';

export enum ActionKind {
  setGames = 'SET_GAMES',
  setSelectedProvider = 'SET_SELECTED_PROVIDER',
  setProviders = 'SET_PROVIDERS',
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
