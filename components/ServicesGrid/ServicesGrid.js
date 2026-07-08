'use client';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './ServicesGrid.module.css';

const services = [
  {
    id: '01',
    title: 'LUXURY INTERIORS',
    image: '/images/stock/luxury-interior.jpg',
  },
  {
    id: '02',
    title: 'INTERIOR STYLING',
    image: '/images/stock/interior-styling.jpg',
  },
  {
    id: '03',
    title: 'BESPOKE DESIGN',
    image: '/images/stock/bespoke-design.jpg',
  },
  {
    id: '04',
    title: 'PROJECT COORDINATION',
    image: '/images/stock/project-coord.jpg',
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal variant="scaleUp" stagger={0.2}>
          <div className={styles.grid}>
            {services.map((service) => (
              <div key={service.id} className={styles.card}>
                <div className={styles.label}>
                  <span className={styles.number}>{service.id}.</span>
                  <h3 className={`${styles.title} tracked-text`}>{service.title}</h3>
                </div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={styles.image}
                  />
                  <div className={styles.overlay}></div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
        
        {/* Simple carousel dots for aesthetic */}
        <div className={styles.dots}>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>
      </div>
    </section>
  );
}
