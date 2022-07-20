import styles from './Card.module.scss';
import ToggleButton from '../ToggleButton/ToggleButton';
import RemoveButton from '../RemoveButton/RemoveButton';

const Card = props => {
   
    return (
            <li className={styles.card}>{props.title}
                <div className={styles.cardButtons}>
                    <ToggleButton isFavorite={props.isFavorite} id={props.id}/>
                    <RemoveButton id={props.id}/>
                </div>
            </li>
        );
};

export default Card;