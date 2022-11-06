import { useEffect } from 'react';
import { GamesCards, Header } from '@/components';

import { GAMES_URL } from '@/constants';
import { useFetch } from '@/hooks';
import { setGamesAction } from '@/store/actions';
import { useDispatch } from '@/store/hooks';
import { useGamesByProvider } from '@/store/selectors';
import type { IGame } from '@/types';
import { useInfiniteScroll } from '@/hooks';

export const MainPage = () => {
  const { data = {}, isLoading } = useFetch<IGame>(GAMES_URL);

  const dispatch = useDispatch();
  const games = useGamesByProvider();

  useEffect(() => {
    if (data) {
      dispatch(setGamesAction(data));
    }
  }, [data]);

  const [] = useInfiniteScroll({
    hasMore: true,
    reset: false,
    distance: 250,
  });

  return (
    <div>
      <Header />
      <GamesCards games={games} isLoading={isLoading} />
    </div>
  );
};
