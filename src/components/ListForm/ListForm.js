import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import styles from './ListForm.module.scss';
import { addList } from "../../redux/store";

const ListForm = props => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addList({ title, description}));
        setTitle('');
        setDescription('');
    };

    return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
        <label className={styles.space}>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />

        <label className={styles.space}>Description:</label>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)}/>
            <Button>Add List</Button>
    </form>
    );
};


export default ListForm;