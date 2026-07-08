'use client';
import Image from 'next/image';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './ProductShowcase.module.css';

const products = [
  {
    id: 'bucket-occasional',
    name: 'Bucket Occasional Chair',
    price: 'R4,500.00',
    image: '/images/products/bucket-occasional.png',
  },
  {
    id: 'dining-chair',
    name: 'Classic Dining Chair',
    price: 'R2,200.00',
    image: '/images/products/dining-chair.png',
  },
  {
    id: 'custom-stool',
    name: 'Bespoke Bar Stool',
    price: 'R1,800.00',
    image: '/images/products/custom-stool.png',
  },
  {
    id: 'storage-ottoman',
    name: 'Tailored Storage Ottoman',
    price: 'R3,200.00',
    image: '/images/products/storage-ottoman.png',
  },
];

export default function ProductShowcase() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal variant="fadeUp">
          <div className={styles.headerRow}>
            <h2 className={`${styles.heading} tracked-text`}>NEW ARRIVALS</h2>
            <Button variant="outlined" href="/shop" className={styles.viewAllBtn}>
              VIEW ALL
            </Button>
          </div>
        </ScrollReveal>
        
        <ScrollReveal variant="scaleUp" stagger={0.12}>
          <div className={styles.grid}>
            {products.map((product) => (
              <Link href={`/shop/${product.id}`} key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className={styles.image}
                  />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.name}>{product.name}</h3>
                  <span className={styles.price}>{product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
