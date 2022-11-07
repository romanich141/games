import { useContext } from 'react';
import { StoreContext } from '../../context';

export const useState = () => {
  return useContext(StoreContext);
};
