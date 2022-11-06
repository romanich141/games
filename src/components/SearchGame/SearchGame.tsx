import { useDispatch } from '@/store/hooks';
import { setSearchGameAction } from '@/store/actions';
import { useSearchTextSelector } from '../../store/selectors';

export const SearchGame = () => {
  const dispatch = useDispatch();
  const searchText = useSearchTextSelector();

  const handleOnChange = (event) => {
    console.log(event.target.value);

    dispatch(setSearchGameAction(event.target.value));
  };

  return <input type='text' value={searchText} onChange={handleOnChange} />;
};
