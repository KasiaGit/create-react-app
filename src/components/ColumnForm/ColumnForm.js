import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addColumn } from '../../redux/columnRedux';

const ColumnForm = props => {
    const dispatch = useDispatch();
    const selectedList = useSelector(state => props.listId);
    const [title, setTitle] = useState('');
    const [icon, setIcon] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addColumn({ title, icon, listId: selectedList}));
        setTitle('');
        setIcon('');
    };
	return (
        <form className={styles.columnForm} onSubmit={handleSubmit}>
            <span>Title: </span><input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <span>Icon: </span><input type="text" value={icon} onChange={e => setIcon(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;