import { useMemo } from 'react';
import { IGame } from '@/store/types/index';
import {
  useGamesSelector,
  useSelectedProviderSelector,
} from '@/store/selectors';

export const useGamesByProvider = (): IGame => {
  const allGames = useGamesSelector();
  const selectedProvider = useSelectedProviderSelector();
  const whenProviderFilterNotChoosed = !selectedProvider;

  return useMemo(() => {
    if (whenProviderFilterNotChoosed) {
      return allGames;
    }

    return Object.fromEntries(
      Object.entries(allGames).filter(
        ([_, game]: IGame) => game.provider === selectedProvider,
      ),
    );
  }, [allGames, selectedProvider]);
};
