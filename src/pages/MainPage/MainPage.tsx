import { useEffect } from 'react';
import { Col, Row } from 'antd';
import { GamesCards, ProviderFilter, SearchGame } from '@/components';
import { useFetch } from '@/hooks';
import { setGamesAction } from '@/store/actions';
import { useDispatch } from '@/store/hooks';
import { useSearchGamesSelector } from '@/store/selectors';
import { GAMES_URL } from '@/constants';
import type { IGame } from '@/types';

import { Layout } from 'antd';

const { Header, Content } = Layout;

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
    <Layout>
      <Header>
        <Row gutter={[16, 16]} align='middle' justify='space-between'>
          <Col span={12}>
            <SearchGame />
          </Col>
          <Col span={12}>
            <ProviderFilter />
          </Col>
        </Row>
      </Header>
      <Content>
        <GamesCards games={games} isLoading={isLoading} />
      </Content>
    </Layout>
  );
};
