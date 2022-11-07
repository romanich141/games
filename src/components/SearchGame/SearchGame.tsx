import { ChangeEvent } from 'react';
import { useDispatch } from '@/store/hooks';
import { setSearchGameAction } from '@/store/actions';
import { useSearchTextSelector } from '@/store/selectors';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export const SearchGame = () => {
  const dispatch = useDispatch();
  const searchText = useSearchTextSelector();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchGameAction(event.target.value));
  };

  return (
    <Input
      style={{
        height: '48px',
        fontFamily: 'Inter var',
        border: '2px solid #d5d5d5',
      }}
      prefix={<SearchOutlined />}
      size='large'
      type='text'
      placeholder='Search games'
      value={searchText}
      onChange={handleOnChange}
    />
  );
};
