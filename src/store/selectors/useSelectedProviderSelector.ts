import { ISelectedProvider } from '../reducers/types';
import { useState } from '../hooks';

export const useSelectedProviderSelector = (): ISelectedProvider => {
  const { store } = useState();

  return store.selectedProvider ?? null;
};
