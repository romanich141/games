import { ISelectedProvider } from '@/store/reducers/types';
import { useState } from '@/store/hooks';

export const useSelectedProviderSelector = (): ISelectedProvider => {
  const { store } = useState();

  return store.selectedProvider ?? null;
};
