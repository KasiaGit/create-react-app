import { useState } from "react";
import Button from '../Button/Button';
import styles from './ListForm.module.scss';
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsRedux";

const ListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({title, description}));
        setTitle('');
        setDescription('');
        console.log(title);
        console.log(description);
    }

    return(
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title:</span><input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span>Description:</span><input type="text" value={description} onChange={e => setDescription(e.target.value)} />
            <Button>Add List</Button>
        </form>
    );
}

export default ListForm;