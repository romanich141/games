import { IProvider } from '../reducers/types';
import { useState } from '../hooks';

interface IProviderSelector {
  name: string;
  value: string;
}

export const useProvidersSelector = (): IProviderSelector => {
  const { store } = useState();

  return store.providers.map(({ title: name, id: value }: IProvider) => ({
    name,
    value,
  }));
};
