import styles from './ToggleButton.module.scss';
import { clsx } from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/cardsRedux';
const ToggleButton = ( { isFavorite, id } ) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        dispatch(toggleCardFavorite({isFavorite: !isFavorite, id: id}))
    }
    return(
        <form>
            <button onClick={handleClick} value={isFavorite} className={clsx(styles.toggleSwitch, 'fa fa-star-o', isFavorite === true && styles.toggleSwitchTrue )}>
            </button>
        </form>
    );
}
export default ToggleButton;