import styles from './Favorites.module.scss';
import PageTitle from '../PageTitle/PageTitle';


const Favorites = () => {
  return(
    <div className={styles.favorites}>
      <PageTitle>Favorites</PageTitle>
      <p className={styles.about_favorites}>Lorem ipsum</p>
    </div>
  )
}

export default Favorites; 