import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = props => {

  const [searchValue, setSearchValue] = useState(''); 




  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({type: 'FILTER_CARD', filteredCard: {searchValue}})
    setSearchValue('');
    console.log(searchValue);
  }

  return (
      <form className={styles.searchForm} onSubmit={handleSubmit}>
          <TextInput value={searchValue} onChange={e => setSearchValue(e.target.value)}    placeholder="Search…"  />
          <Button><span className="fa fa-search" /></Button>
      </form>
  );
};

export default SearchForm;