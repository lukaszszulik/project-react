import styles from './ErrorBoundary.module.scss';

const ErrorBoundary = () => {
    return (
        <div className={styles.title} >
        404 NOT FOUND
        </div>
    );
};

export default ErrorBoundary;