import 'font-awesome/css/font-awesome.min.css';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(   
    <nav className={styles.navBar}>
        <Link to="/"><span className="fa fa-tasks" /></Link>
        <ul className={styles.navBar}>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/">Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/Favorite">Favorite</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? styles.linkActive : undefined} to="/About">About</NavLink></li>
        </ul>
    </nav>);
}

export default NavBar;