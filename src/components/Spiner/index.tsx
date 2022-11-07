import { Spin, Row, Col } from 'antd';

export const Spiner = (): JSX.Element => (
  <Row justify='center'>
    <Col span={24}>
      <Spin size='large' />
    </Col>
  </Row>
);
