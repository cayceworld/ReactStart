import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { filterCard } from '../../redux/searchStringReducer';

const SearchForm = () => {

  const [searchValue, setSearchValue] = useState('');




  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch( filterCard({ searchValue }));
    setSearchValue('');
    console.log(searchValue);
  }

  useEffect(() =>{
    dispatch(filterCard({searchValue: ''}))
  }, []);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput value={searchValue} onChange={e => setSearchValue(e.target.value)} placeholder="Search…" />
      <Button><span className="fa fa-search" /></Button>
    </form>
  );
};

export default SearchForm;