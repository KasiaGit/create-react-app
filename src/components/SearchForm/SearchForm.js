import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { updateSearch } from '../../redux/searchStringRedux';

const SearchForm = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(updateSearch(value));
    }, []);
    const handleSearch = e => {
        e.preventDefault();
        dispatch(updateSearch(value));
    }
   
    return(
        <form className={styles.searchForm} onSubmit={handleSearch}>
            <TextInput placeholder="Search..." value={value} onChange={e => setValue(e.target.value)}/>
            <Button><span className="fa fa-search" /></Button>
        </form>
    );
};
export default SearchForm;