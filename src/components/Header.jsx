import styles from './Header.module.css';
import projectLogo from '../assets/projectLogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
        <img src={projectLogo} alt='Developer Feed logo'/>
    </header>
  );
}