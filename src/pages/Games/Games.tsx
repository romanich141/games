import { useEffect } from 'react';
import { GamesCards, ProviderFilter } from '../../components';

import { GAMES_URL } from '../../constants';
import { useFetch } from '../../hooks';
import { setGamesAction } from '../../store/actions';
import { useState } from '../../store/hooks';

import type { IGame } from '../../types';

export const Games = () => {
  const { store, dispatch } = useState();
  const { data = {}, error, isLoading } = useFetch<IGame>(GAMES_URL);

  useEffect(() => {
    if (data) {
      dispatch(setGamesAction(data));
    }
  }, [data]);

  if (isLoading) {
    return <div>{'Loading...'}</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <ProviderFilter />
      <GamesCards games={data} />
    </div>
  );
};
