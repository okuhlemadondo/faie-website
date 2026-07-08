'use client';

import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import styles from './PageHeader.module.css';

export default function PageHeader({ title, subtitle, imagePath }) {
  const container = useGsap((root, gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top bottom',
        toggleActions: 'play reverse play reverse',
      }
    });

    if (imagePath) {
      tl.fromTo(root.querySelector(`.${styles.imageWrapper}`), 
        { scale: 1.03, filter: 'blur(2px)' },
        { scale: 1, filter: 'blur(0px)', duration: 1.8, ease: 'power2.out' },
        0.2
      );
    }

    tl.fromTo(root.querySelectorAll('.animate-up'), 
      { y: 15, opacity: 0, filter: 'blur(4px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1, stagger: 0.1, ease: 'power3.out' },
      0.45
    );
  });

  return (
    <section className={styles.header} ref={container}>
      {imagePath && (
        <div className={styles.imageWrapper}>
          <Image
            src={imagePath}
            alt={title}
            fill
            priority
            className={styles.image}
          />
          <div className={styles.overlay}></div>
        </div>
      )}
      
      <div className={styles.content}>
        <h1 className={`${styles.title} animate-up`}>{title}</h1>
        {subtitle && <p className={`${styles.subtitle} animate-up tracked-text`}>{subtitle}</p>}
      </div>
    </section>
  );
}
