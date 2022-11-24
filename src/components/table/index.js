import styles from './index.module.css'

export const Table = () => {
    return (
        <div className={styles.tableWrapper}>
            <div className={styles.topLine}/>
            <div className={styles.metaSection}>
                <div className={styles.number}><span>#</span></div>
                <div className={styles.title}><span>Title</span></div>
                <div className={styles.price}>
                    <span>
                        Price,<br/>
                        USD
                    </span>
                </div>
                <div className={styles.date}>
                    <span>
                        Date and<br/>
                        time 
                    </span>
                </div>
            </div>
            <div className={styles.bottomLine}/>
        </div>
    )
}