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
              <SectionHeading align="left" subtitle="OUR PHILOSOPHY">
                Driven by Human Experience
              </SectionHeading>
              <div className={styles.content}>
                <p>
                  Established in 2020, FAIE is a 100% black female-owned and managed multidisciplinary firm providing professional services in the interior design and project management environment. We work comprehensively, driven by human experience, compelling narratives, and a belief in the profound power of beauty—style and substance working in tandem to nurture a well-lived life.
                </p>
                <p>
                  We collaborate with interior designers, architects, landscape designers, artisans, and craftspeople to provide a full turnkey design solution. Applying traditional building methods and local craft traditions to new construction and furnishings, we specialize in full-scale renovations, efficient spatial planning, and effective project management. We aim to exceed expectations seamlessly, fusing functionality with exquisite finishes beyond aesthetics.
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
          <div className={styles.founderGrid}>
            <div className={styles.founderImageColumn}>
              <div className={styles.founderImageWrapper}>
                {/* Placeholder for the founder's image you shared. You can save your image as /public/images/stock/founder.jpg */}
                <Image 
                  src="/images/stock/founder.png"
                  alt="FAIE Founder"
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className={styles.founderTextColumn}>
              <SectionHeading align="left" subtitle="THE FOUNDER">
                A Passion for Purposeful Design
              </SectionHeading>
              <div className={styles.content}>
                <p>
                  FAIE was founded on the belief that exceptional design should be accessible, personal, and transformative. With a background rooted in architecture, spatial planning, and a deep appreciation for craftsmanship, our founder set out to create a firm that bridges the gap between aspiration and reality.
                </p>
                <p>
                  Every project at FAIE begins with a conversation — understanding not just what a space should look like, but how it should feel. This human-centred philosophy is woven into every decision, from the first sketch to the final styling detail.
                </p>
              </div>
            </div>
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
