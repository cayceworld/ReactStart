import styles from './NavBar.module.scss';


const NavBar = () => {

  return (
    <div className={styles.nav}>
      <div className={styles.nav_container}>
        <div className={styles.ico}>
          <a href='/'><span className={styles.icon + ' fa fa-tasks'} ></span></a>
        </div>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/favorites'>Favorite</a></li>
          <li><a href='/about'>About</a></li>
        </ul>
      </div>
    </div >
  )
}
export default NavBar; 