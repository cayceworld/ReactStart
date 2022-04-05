import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <div className={styles.nav}>
      <div className={styles.nav_container}>
        <div className={styles.ico}>
          <a href='/'><span className={styles.icon + ' fa fa-tasks'} ></span></a>
        </div>
        <ul>
          <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined}
            to="/">Home</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? styles.linkActive : undefined}
           to="/favorites">Favorite</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? styles.linkActive: undefined} 
          to="/about">About</NavLink></li>
        </ul>
      </div>
    </div >
  )
}
export default NavBar; 