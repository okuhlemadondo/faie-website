'use client';
import PageHeader from '@/components/ui/PageHeader';
import Image from 'next/image';
import { useState } from 'react';
import styles from './page.module.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Modern Luxury Kitchen',
    category: 'Residential',
    image: '/images/stock/hero-kitchen.jpg',
  },
  {
    id: 2,
    title: 'Minimalist Dining Area',
    category: 'Residential',
    image: '/images/stock/luxury-interior.jpg',
  },
  {
    id: 3,
    title: 'Bespoke Office Space',
    category: 'Commercial',
    image: '/images/stock/interior-styling.jpg',
  },
  {
    id: 4,
    title: 'Contemporary Living Room',
    category: 'Residential',
    image: '/images/stock/bespoke-design.jpg',
  },
  {
    id: 5,
    title: 'Boutique Hotel Lobby',
    category: 'Hospitality',
    image: '/images/stock/project-coord.jpg',
  },
  {
    id: 6,
    title: 'Zen Bathroom Retreat',
    category: 'Residential',
    image: '/images/stock/modern-room.jpg',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Hospitality'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <>
      <PageHeader 
        title="PORTFOLIO" 
        subtitle="WHERE VISION TAKES SHAPE"
        imagePath="/images/stock/vision-interior.jpg"
      />

      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          
          <div className={styles.filterNav}>
            {categories.map((category) => (
              <button 
                key={category}
                className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ''} tracked-text`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filteredItems.map((item) => (
              <div key={item.id} className={styles.portfolioCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.itemCategory}>{item.category}</span>
                      <h3 className={styles.itemTitle}>{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
