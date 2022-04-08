import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { deleteCard, toggleFavorite } from '../../redux/cardsReducer';

const Card = props => {

  const dispatch = useDispatch();

  const toggle = e => {
    e.preventDefault();
    dispatch(toggleFavorite({ id: props.id, isFavorite: props.isFavorite }))
  }

  const handleDelete = e => {
    e.preventDefault();
    dispatch(deleteCard({ id: props.id }))

  }


  return (
    <li className={styles.card}>{props.title}
      <div>
        <button onClick={toggle}>
          <span className={clsx(' fa fa-star-o', props.isFavorite && styles.isFavorite)}></span>
        </button>
        <button onClick={handleDelete}>
          <span className={'fa fa-trash'}></span>
        </button>
      </div>
    </li>
  );
};

export default Card;