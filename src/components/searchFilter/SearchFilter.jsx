import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import styles from './SearchFilter.module.css';

export const SearchFilter = () => {
  const dispatch = useDispatch();

  const filterValue = e => {
    e.preventDefault();
    const input = e.target.value.toLowerCase();
    dispatch(filterContacts(input));
  };

  const { search, label, input } = styles;

  return (
    <div className={search}>
      <label className={label}>
        Find contacts by name
        <input className={input} type="text" onChange={filterValue} />
      </label>
    </div>
  );
};
