import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import styles from './page.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'About | FAIE',
  description: 'Learn more about FAIE, our history, and our core values.',
};

const values = [
  { id: '01', title: 'Timeless Elegance', desc: 'We create spaces that transcend trends, delivering enduring beauty that remains relevant and refined for years to come.' },
  { id: '02', title: 'Intentional Design', desc: 'Every element serves a purpose. We approach each project with deliberate thought, ensuring form and function work in harmony.' },
  { id: '03', title: 'Exceptional Craftsmanship', desc: 'We partner with master artisans and source the finest materials to ensure every detail meets the highest standards of quality.' },
  { id: '04', title: 'Client-Centred Collaboration', desc: 'Your vision drives our process. We listen deeply, communicate openly, and design spaces that are uniquely yours.' },
  { id: '05', title: 'Attention To Detail', desc: 'From material selection to spatial flow, no element is overlooked. It is in the details that luxury truly lives.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader 
        title="ABOUT FAIE" 
        subtitle="DESIGNING SPACES WITH PURPOSE"
        imagePath="/images/stock/luxury-interior.jpg"
      />

      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.textColumn}>
              <SectionHeading align="left" subtitle="WHO WE ARE">
                A Luxury Interior Design Consultancy
              </SectionHeading>
              <div className={styles.content}>
                <p>
                  FAIE is a luxury interior design consultancy dedicated to creating refined, purposeful, and timeless spaces. Through thoughtful design, meticulous attention to detail, and a client-centred approach, we transform environments into elevated experiences that inspire how people live, work, and connect.
                </p>
                <p>
                  We believe thoughtfully designed spaces have the power to elevate experiences, improve wellbeing, and inspire meaningful living.
                </p>
              </div>
            </div>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image 
                  src="/images/stock/hero-kitchen.jpg"
                  alt="FAIE Interior"
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.container}>
          <SectionHeading subtitle="THE FOUNDER">
            A Passion for Purposeful Design
          </SectionHeading>
          <div className={styles.founderContent}>
            <p>
              FAIE was founded on the belief that exceptional design should be accessible, personal, and transformative. With a background rooted in architecture, spatial planning, and a deep appreciation for craftsmanship, our founder set out to create a consultancy that bridges the gap between aspiration and reality.
            </p>
            <p>
              Every project at FAIE begins with a conversation — understanding not just what a space should look like, but how it should feel. This human-centred philosophy is woven into every decision, from the first sketch to the final styling detail.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <SectionHeading subtitle="OUR CORE VALUES">
            The Principles That Guide Us
          </SectionHeading>
          
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.id} className={styles.valueCard}>
                <span className={styles.valueNumber}>{value.id}.</span>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDesc}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <SectionHeading subtitle="THE THREE PILLARS OF FAIE">
            Where Form, Function, and Beauty Intertwine
          </SectionHeading>
          
          <div className={styles.pillarsGrid}>
            <div className={styles.pillarCard}>
              <h3 className={`${styles.pillarTitle} tracked-text`}>DESIGN</h3>
              <p className={styles.pillarText}>
                Thoughtful and intentional solutions that transform ideas into sophisticated living experiences. Every project begins with understanding the client's vision and translating it into a cohesive spatial narrative.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <h3 className={`${styles.pillarTitle} tracked-text`}>DETAIL</h3>
              <p className={styles.pillarText}>
                Luxury is found in the details. From material selection and spatial planning to finishes and styling, every element is carefully considered to achieve excellence.
              </p>
            </div>
            <div className={styles.pillarCard}>
              <h3 className={`${styles.pillarTitle} tracked-text`}>ELEGANCE</h3>
              <p className={styles.pillarText}>
                Timeless, refined, and effortlessly sophisticated. FAIE creates interiors that transcend trends and remain beautiful, functional, and relevant for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
