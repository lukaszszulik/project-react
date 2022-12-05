import styles from './List.module.scss';
import Column from '../Column/Column';
//import { useEffect } from 'react';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getListById, getColumnsByList } from '../../redux/store';


const List = () => {
	const columns = useSelector(getColumnsByList);

  const listData = useSelector(getListById);

return (
  <div className={styles.list}>
    <header className={styles.header}>
      <h2 className={styles.title}>
        dd
        
      </h2>
    </header>

    <p className={styles.description}>Interesting things I want to check out</p>

    <section className={styles.columns}>
      {columns.map(column => <Column key={column.id} {...column}  /> )}
    </section>
    <ColumnForm />
  </div>
  
);
};



export default List;