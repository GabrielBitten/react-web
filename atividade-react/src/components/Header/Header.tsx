
import React from 'react';
import styles from './Header.module.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <a href="/">
        <h1>{title}</h1>
      </a>
    </header>
  );
};

export default Header;
