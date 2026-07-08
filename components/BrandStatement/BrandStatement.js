'use client';
import { useGsap } from '@/hooks/useGsap';
import SectionHeading from '@/components/ui/SectionHeading';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './BrandStatement.module.css';

export default function BrandStatement() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal variant="fadeIn" duration={1.5}>
          <SectionHeading subtitle="DESIGNING SPACES WITH PURPOSE">
            <div className={styles.statement}>
              Luxury interiors thoughtfully designed to combine timeless elegance, functionality and refined craftsmanship. Every space is curated to reflect your lifestyle while elevating the way you live, work and connect.
            </div>
          </SectionHeading>
        </ScrollReveal>
      </div>
    </section>
  );
}
