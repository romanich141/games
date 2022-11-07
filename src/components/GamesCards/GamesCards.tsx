import { ReactNode, useState } from 'react';
import type { IGame } from '@/store/reducers';
import { GameCard, Pagination, Spiner } from '@/components';
import { Col, Row, Divider, Space } from 'antd';
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
    return <Spiner />;
  }

  return (
    <Space
      direction='vertical'
      size='middle'
      style={{ display: 'flex', padding: '20px' }}
    >
      <Divider />
      <Row gutter={[16, 16]}>
        {Object.entries(currentGames).map((game) => {
          const [gameId, { title, provider, demo }] = game;

          return (
            <Col span={4} key={gameId}>
              <GameCard
                gameId={gameId}
                demo={String(demo)}
                title={String(title)}
                provider={String(provider)}
              />
            </Col>
          );
        })}
      </Row>
      <Divider />
      <Row justify='center' align='middle'>
        <Pagination
          gamesInPage={gamesInPage}
          totalGames={Object.keys(games).length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </Row>
      <Divider />
    </Space>
  );
};
