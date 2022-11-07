import { Spin } from 'antd';

export const Spiner = (): JSX.Element => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minWidth: '100vw',
      minHeight: '100vh',
    }}
  >
    <Spin size='large' />
  </div>
);
