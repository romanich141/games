import { useEffect } from 'react';
import { GamesCards, Header } from '@/components';

import { GAMES_URL } from '@/constants';
import { useFetch } from '@/hooks';
import { setGamesAction } from '@/store/actions';
import { useDispatch } from '@/store/hooks';
import { useSearchGamesSelector } from '@/store/selectors';
import type { IGame } from '@/types';

export const MainPage = () => {
  const { data = {}, isLoading } = useFetch<IGame>(GAMES_URL);

  const dispatch = useDispatch();
  const games = useSearchGamesSelector();

  useEffect(() => {
    if (data) {
      dispatch(setGamesAction(data));
    }
  }, [data]);

  return (
    <div>
      <Header />
      <GamesCards games={games} isLoading={isLoading} />
    </div>
  );
};
