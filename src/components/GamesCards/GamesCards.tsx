import { ReactNode, useState } from 'react';
import type { IGame } from '@/store/reducers';
import { GameCard, Pagination } from '@/components';

interface IGamesCardsProps {
  games: IGame;
  isLoading: boolean;
}

export const GamesCards = ({
  games = {},
  isLoading,
}: IGamesCardsProps): ReactNode => {
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesInPage] = useState(10);

  const indexOfLastGame = currentPage * gamesInPage;
  const indexOfFirstGame = indexOfLastGame - gamesInPage;
  const currentGames = Object.fromEntries(
    Object.entries(games).slice(indexOfFirstGame, indexOfLastGame),
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const whenEmptyGamesData = !games;

  if (whenEmptyGamesData) {
    return null;
  }

  if (isLoading) {
    return <div>{'Loading...'}</div>;
  }

  return (
    <div>
      {Object.entries(currentGames).map((game, i) => {
        const [gameId, { title, provider }] = game;

        return (
          <GameCard
            key={i}
            gameId={String(gameId)}
            title={String(title)}
            provider={String(provider)}
          />
        );
      })}
      <Pagination
        gamesInPage={gamesInPage}
        totalGames={Object.keys(games).length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};
