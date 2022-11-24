import styles from './index.module.css';

export const Item = ({number, title, price, date}) => {
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.metaSection}>
                <div className={styles.number}><span>{number}</span></div>
                <div className={styles.centerBlock}>
                    <div className={styles.title}><span>{title}</span></div>
                    <div className={styles.price}><span>{price}</span></div>
                </div>
                <div className={styles.date}><span>{date}</span></div>
            </div>
            <div className={styles.line}></div>
        </div>
    )
}