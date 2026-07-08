import React from 'react';
import styles from './FeaturedIn.module.css';

const publications = [
  'ELLE DECORATION',
  'ARCHITECTURAL DIGEST',
  'HOUSE & LEISURE',
  'VISI MAGAZINE',
  'CONDÉ NAST',
];

export default function FeaturedIn() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <p className={styles.subtitle}>AS FEATURED IN</p>
        <div className={styles.logos}>
          {publications.map((name, i) => (
            <React.Fragment key={name}>
              <span className={styles.name}>{name}</span>
              {i < publications.length - 1 && (
                <span className={styles.separator} aria-hidden="true" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
