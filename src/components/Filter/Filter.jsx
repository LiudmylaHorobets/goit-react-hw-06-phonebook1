import { useDispatch, useSelector } from 'react-redux';
import setFilter from 'redux/contactsSlice';

import css from './Filter.module.css';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={css.filter}>
      <p className={css.titleFilter}>Find contacts by name:</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        name="filter"
        onChange={handleFilterChange}
        placeholder="Contact name"
      />
    </div>
  );
};
