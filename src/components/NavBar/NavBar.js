import 'font-awesome/css/font-awesome.min.css';
import styles from './NavBar.module.scss';

const NavBar = () => {
    return(   
    <nav className={styles.navBar}>
        <a href="/"><span className="fa fa-tasks" /></a>
        <div>
            <a href="/">Home</a>
            <a href="/About">About</a>
            <a href="/Favorite">Favorite</a>
        </div>
    </nav>);
}

export default NavBar;