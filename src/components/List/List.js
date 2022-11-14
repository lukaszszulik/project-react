import styles from './List.module.scss';
import Column from '../Column/Column';

function List() {
    return (
        <div className={styles.name}>
            <header className={styles.header}>
                <h3 className={styles.title}>Things to do<span>soon</span></h3>
            </header>
            <p className={styles.description}>Interesting things I want to check out</p>
            <section className={styles.columns}>
            <Column icon="book" title="Books" />
            <Column icon="film" title="Movies" />
            <Column icon="gamepad" title="Games" />
        </section>
        </div>
    );
}


export default List;