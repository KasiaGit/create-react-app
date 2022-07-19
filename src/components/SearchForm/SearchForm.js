import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { updateSearch } from '../../redux/store';

const SearchForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleSearch = e => {
        e.preventDefault();
        dispatch(updateSearch(value));
        setValue('')
    }
   
    return(
        <form className={styles.searchForm} onSubmit={handleSearch}>
            <TextInput placeholder="Search..." onChange={e => setValue(e.target.value)}/>
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
};
export default SearchForm;