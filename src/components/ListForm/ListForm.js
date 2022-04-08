import styles from '../ColumnForm/ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsReducer';

const ListForm = props => {
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');


  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description }));
    setTitle('');
    setDescription('');
  }


  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      Title: <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      Description: <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <Button >Add list</Button>
    </form>
  )
};
export default ListForm;