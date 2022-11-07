import { Link } from 'react-router-dom';
import { Card, Button, Divider, Space } from 'antd';
interface IGameCardProps {
  gameId: string;
  demo: string;
  title: string;
  provider: string;
}

const { Meta } = Card;

export const GameCard = ({
  gameId,
  title,
  demo,
}: IGameCardProps): JSX.Element => {
  return (
    <Space>
      <Card
        hoverable
        style={{ width: 240, textAlign: 'center' }}
        cover={
          <img
            alt={title}
            src={`https://cdn.softswiss.net/i/s3/${gameId}.png`}
          />
        }
      >
        <Meta title={title} />
        <Divider />
        <Link to={`${gameId}`} state={{ demo }}>
          <Button className='' type='primary' danger size='large'>
            {'Play'}
          </Button>
        </Link>
      </Card>
    </Space>
  );
};
