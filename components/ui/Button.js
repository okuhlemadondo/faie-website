import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({ 
  children, 
  variant = 'filled', 
  href, 
  onClick, 
  className = '',
  ...props 
}) {
  const btnClass = `${styles.button} ${styles[variant]} ${className} tracked-text`;

  if (href) {
    return (
      <Link href={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={btnClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
