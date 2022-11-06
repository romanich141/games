import { DispatchWithoutAction } from 'react';
import { useState } from '@/store/hooks';

export const useDispatch = (): DispatchWithoutAction => {
  const { dispatch } = useState();

  return dispatch;
};
