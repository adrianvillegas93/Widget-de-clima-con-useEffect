
import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
        <div className={styles.loader}>
            <div></div>
        </div>
    </div>
  )
}

export default Loading