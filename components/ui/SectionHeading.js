import styles from './SectionHeading.module.css';

export default function SectionHeading({ 
  children, 
  subtitle, 
  align = 'center', 
  className = '' 
}) {
  return (
    <div className={`${styles.container} ${styles[align]} ${className}`}>
      {subtitle && <p className={`${styles.subtitle} tracked-text`}>{subtitle}</p>}
      <h2 className={styles.heading}>{children}</h2>
    </div>
  );
}
