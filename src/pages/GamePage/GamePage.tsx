import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PageHeader, Divider, Row } from 'antd';
import { API } from '../../constants';

export const GamePage = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();
  const { provider, game } = useParams();
  const goHome = () => navigate('/');
  const demoSrc = location.state?.demo;

  return (
    <>
      <Row>
        <PageHeader
          className='site-page-header'
          onBack={goHome}
          title='Back'
          subTitle={`Provider: ${provider} | Game: ${game}`}
        />
      </Row>
      <Divider />
      <Row justify='center'>
        <div
          style={{
            display: 'flex',
            minWidth: '800px',
            aspectRatio: '16/9',
          }}
        >
          <iframe
            src={`http://test-proxy-server-lup-env.eba-2ipxdf96.ap-southeast-2.elasticbeanstalk.com/${demoSrc}`}
            style={{
              display: 'block',
              minWidth: '100%',
              margin: '0 auto',
              textAlign: 'center',
            }}
          />
        </div>
        <Divider />
      </Row>
    </>
  );
};
