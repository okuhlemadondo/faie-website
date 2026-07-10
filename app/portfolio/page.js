'use client';
import PageHeader from '@/components/ui/PageHeader';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

const services = [
  {
    id: '01',
    title: 'LUXURY INTERIORS',
    description: 'Comprehensive interior design services for discerning homeowners and developers. We handle everything from concept to completion, ensuring a cohesive and sophisticated result.',
    image: '/images/stock/luxury-interior.jpg',
  },
  {
    id: '02',
    title: 'INTERIOR STYLING',
    description: 'Curated styling services to elevate your existing space. We source the finest furniture, art, and accessories to bring balance and personality to your home.',
    image: '/images/stock/interior-styling.jpg',
  },
  {
    id: '03',
    title: 'BESPOKE DESIGN',
    description: 'Custom furniture and joinery design tailored to your specific needs and aesthetic preferences. We partner with master craftsmen to create unique, high-quality pieces.',
    image: '/images/stock/bespoke-design.jpg',
  },
  {
    id: '04',
    title: 'PROJECT COORDINATION',
    description: 'Seamless management of your design project. We liaise with contractors, suppliers, and architects to ensure the design vision is executed flawlessly and on schedule.',
    image: '/images/stock/project-coord.jpg',
  },
];

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

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          {services.map((service, index) => (
            <div key={service.id} className={`${styles.serviceRow} ${index % 2 !== 0 ? styles.serviceRowReverse : ''}`}>
              <div className={styles.serviceImageCol}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={styles.serviceTextCol}>
                <span className={styles.serviceNumber}>{service.id}.</span>
                <h2 className={`${styles.serviceTitle} tracked-text`}>{service.title}</h2>
                <p className={styles.serviceDesc}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <h2 className={styles.ctaTitle}>Ready to transform your space?</h2>
            <p className={styles.ctaText}>
              Schedule a consultation with our design team to discuss your vision.
            </p>
            <Button variant="filled" href="/contact">
              BOOK A CONSULTATION
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
