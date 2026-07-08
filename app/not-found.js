'use client';
import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.errorCode}>404</span>
        <h1 className={styles.title}>PAGE NOT FOUND</h1>
        <p className={styles.text}>
          The page you are looking for does not exist or has been moved. 
          Please return to our shop to continue browsing our collection.
        </p>
        <Link href="/shop" className={styles.button}>
          BACK TO SHOP
        </Link>
      </div>
    </div>
  );
}
