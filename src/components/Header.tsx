import styles from './Header.module.css';

import projectLogo from '../assets/purpleLogo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={projectLogo} alt="App's logo" />
    </header>
  );
}
