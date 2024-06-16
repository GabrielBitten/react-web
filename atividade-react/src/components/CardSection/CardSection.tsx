import React from 'react';
import styles from './CardSection.module.css';

interface CardSectionProps {
  titulo: string;
  children: React.ReactNode;
}

const CardSection: React.FC<CardSectionProps> = ({ titulo, children }) => {
  return (
    <section className={styles.cardSection} id={titulo.toLowerCase().replace(/\s/g, '-')}>
      <h2>{titulo}</h2>
      <div>
        {children}
      </div>
    </section>
  );
};

export default CardSection;
