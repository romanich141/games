import { ReactNode } from 'react';
import type { IGame } from '../../types';
import { GameCard } from '../GameCard';

interface IGamesCardsProps {
  games: IGame;
}

export const GamesCards = ({ games = {} }: IGamesCardsProps): ReactNode => {
  const whenEmptyGamesData = !games;

  if (whenEmptyGamesData) {
    return null;
  }

  return Object.entries(games).map((game, i) => {
    const [gameId, { title, provider }] = game;
    return (
      <GameCard
        key={i}
        gameId={String(gameId)}
        title={String(title)}
        provider={String(provider)}
      />
    );
  });
};
