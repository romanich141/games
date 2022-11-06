import { useEffect } from 'react';
import SelectSearch from 'react-select-search';
import { PROVIDERS_URL } from '../../constants';
import { useFetch } from '../../hooks';
import { setProvidersAction } from '../../store/actions';
import { useState } from '../../store/hooks';
import { IProvider } from '../../types';
import 'react-select-search/style.css';

export const ProviderFilter = () => {
  const { data = [], isLoading, error } = useFetch<IProvider[]>(PROVIDERS_URL);
  const { store, dispatch } = useState();

  useEffect(() => {
    if (data) {
      dispatch(setProvidersAction(data));
    }
  }, [data]);

  const opts = store.providers.map((provider) => ({
    name: provider.title,
    value: provider.id,
  }));

  const value = store.selectedProvider?.id ?? null;

  return (
    <SelectSearch options={opts} value={value} placeholder='Choose provider' />
  );
};
