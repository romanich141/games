import { DispatchWithoutAction } from 'react';
import { useState } from '../../hooks';

export const useDispatch = (): DispatchWithoutAction => {
  const { dispatch } = useState();

  return dispatch;
};
