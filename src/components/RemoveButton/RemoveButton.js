import { useDispatch } from "react-redux";
import { removeCard } from "../../redux/cardsRedux";
import styles from './RemoveButton.module.scss';

const RemoveButton = props => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        console.log('kliknieto', props.id)
        dispatch(removeCard({id:props.id}))
    }

    return(
        <button onClick={handleClick} className='fa fa-trash'></button>
    );    
}

export default RemoveButton;