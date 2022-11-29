import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { updateSearchString } from '../../redux/store';
import { useState } from 'react';

const SearchForm = () => {
    const [searchString, setSearchString] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(updateSearchString(searchString));
        setSearchString('');
    }
    return(
        <form className={styles.searchForm}>
            <TextInput placeholder="Search…" />
            <Button>
            <span className="fa fa-search" />

            </Button>
        </form>
    );
};

export default SearchForm;