'use client';
import ScrollReveal from '@/components/ui/ScrollReveal';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    quote: 'FAIE transformed our home into something we never imagined possible. Every detail was considered, every finish was perfect.',
    author: 'Naledi M.',
    role: 'Homeowner, Sandton',
  },
  {
    quote: 'Working with FAIE felt effortless. They understood our vision from day one and delivered a space that truly reflects who we are.',
    author: 'James & Priya K.',
    role: 'Residential Project, Cape Town',
  },
  {
    quote: 'The attention to detail is unmatched. Our boutique hotel lobby has become a talking point for every guest.',
    author: 'Thabo S.',
    role: 'Hospitality Project, Johannesburg',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal variant="fadeUp" stagger={0.2} className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.quoteIcon} aria-hidden="true">&ldquo;</span>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.author}>{t.author}</div>
              <div className={styles.role}>{t.role}</div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
