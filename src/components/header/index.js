import burger from '../../assets/images/burger.svg'


import styles from './index.module.css';


export const Header = () => {
    return (
        <header className={styles.wrapper}>
            <div className={styles.nav}>
                stock
                <br />
                 center
            </div>
            <div className={styles.title}>
                Items in stock
            </div>
            <div className={styles.burger}>
                <img className={styles.burgerIcon} src={burger} alt='burger'/>
            </div>
        </header>
    )
}