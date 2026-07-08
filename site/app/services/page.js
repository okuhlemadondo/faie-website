import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'Services | FAIE Consulting',
  description: 'Bespoke interior design experiences that combine luxury, functionality, and timeless elegance.',
};

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

export default function ServicesPage() {
  return (
    <>
      <PageHeader 
        title="OUR SERVICES" 
        subtitle="THE FAIE EXPERIENCE"
        imagePath="/images/stock/interior-styling.jpg"
      />

      <section className={styles.introSection}>
        <div className={styles.container}>
          <SectionHeading subtitle="BESPOKE SOLUTIONS">
            Elevating Everyday Living
          </SectionHeading>
          <div className={styles.introText}>
            <p>
              FAIE Consulting delivers bespoke interior design experiences that combine luxury, functionality, and timeless elegance, ensuring every space reflects the unique identity of its owner.
            </p>
          </div>
        </div>
      </section>

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

      <section className={styles.processSection}>
        <div className={styles.container}>
          <SectionHeading subtitle="HOW IT WORKS">
            Our Design Process
          </SectionHeading>
          <div className={styles.processGrid}>
            {[
              { step: '01', title: 'Discovery', desc: 'We begin with a detailed consultation to understand your lifestyle, preferences, and vision for the space.' },
              { step: '02', title: 'Concept', desc: 'Our team develops a comprehensive design concept including mood boards, material palettes, and spatial layouts.' },
              { step: '03', title: 'Design', desc: 'Detailed drawings, 3D renders, and specifications are produced. Every element is refined until the design is perfected.' },
              { step: '04', title: 'Delivery', desc: 'We manage procurement, coordinate with contractors, and oversee installation to ensure flawless execution.' },
            ].map((item) => (
              <div key={item.step} className={styles.processStep}>
                <span className={styles.stepNumber}>{item.step}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                <p className={styles.stepDesc}>{item.desc}</p>
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
