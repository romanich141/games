import { useContext } from 'react';
import { StoreContext } from '@/store/context';

export const useState = () => {
  return useContext(StoreContext);
};
