import { useEffect } from 'react';
import SelectSearch from 'react-select-search';
import { PROVIDERS_URL } from '../../constants';
import { useFetch } from '../../hooks';
import {
  setProvidersAction,
  setSelectedProviderAction,
} from '../../store/actions';

import { useDispatch } from '../../store/hooks';
import { ISelectedProvider, IProvider } from '../../store/reducers/types';
import {
  useSelectedProviderSelector,
  useProvidersSelector,
} from '../../store/selectors';

export const ProviderFilter = (): JSX.Element => {
  const { data = [] } = useFetch<IProvider[]>(PROVIDERS_URL);

  const selectedProvider = useSelectedProviderSelector();
  const providers = useProvidersSelector();
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setProvidersAction(data));
    }
  }, [data]);

  const handleOnChange = (id: ISelectedProvider) => {
    dispatch(setSelectedProviderAction(id));
  };

  return (
    <SelectSearch
      value={selectedProvider}
      onChange={handleOnChange}
      options={providers}
      placeholder='Choose provider'
      emptyMessage='Provider not found'
      debounce={200}
      search
    />
  );
};
