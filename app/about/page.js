import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';
import styles from './page.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'About | FAIE',
  description: 'Learn more about FAIE, our history, and our core values.',
};



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
          <AnimatedSection className={styles.storyTextContainer}>
            <div className="animate-up">
              <SectionHeading align="center" subtitle="OUR PHILOSOPHY">
                Driven by Human Experience
              </SectionHeading>
            </div>
            <div className={styles.storyContent}>
              <p className="animate-up">
                Established in 2020, FAIE is a 100% black female-owned and managed multidisciplinary firm providing professional services in the interior design and project management environment. We work comprehensively, driven by human experience, compelling narratives, and a belief in the profound power of beauty—style and substance working in tandem to nurture a well-lived life.
              </p>
              <p className="animate-up">
                We collaborate with interior designers, architects, landscape designers, artisans, and craftspeople to provide a full turnkey design solution. Applying traditional building methods and local craft traditions to new construction and furnishings, we specialize in full-scale renovations, efficient spatial planning, and effective project management. We aim to exceed expectations seamlessly, fusing functionality with exquisite finishes beyond aesthetics.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.container}>
          <AnimatedSection className={styles.founderGrid}>
            <div className={styles.founderImageColumn}>
              <div className={`${styles.founderImageWrapper} animate-up`}>
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
              <div className="animate-up">
                <SectionHeading align="left" subtitle="THE FOUNDER">
                  A Passion for Purposeful Design
                </SectionHeading>
              </div>
              <div className={styles.content}>
                <p className="animate-up">
                  FAIE was founded on the belief that exceptional design should be accessible, personal, and transformative. With a background rooted in architecture, spatial planning, and a deep appreciation for craftsmanship, our founder set out to create a firm that bridges the gap between aspiration and reality.
                </p>
                <p className="animate-up">
                  Every project at FAIE begins with a conversation — understanding not just what a space should look like, but how it should feel. This human-centred philosophy is woven into every decision, from the first sketch to the final styling detail.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className={styles.pillarsSection}>
        <div className={styles.container}>
          <AnimatedSection>
            <div className="animate-up">
              <SectionHeading subtitle="THE THREE PILLARS OF FAIE">
                Where Form, Function, and Beauty Intertwine
              </SectionHeading>
            </div>
          </AnimatedSection>
          
          <AnimatedSection className={styles.pillarsGrid}>
            <div className={`${styles.pillarCard} animate-up`}>
              <h3 className={`${styles.pillarTitle} tracked-text`}>DESIGN</h3>
              <p className={styles.pillarText}>
                Thoughtful and intentional solutions that transform ideas into sophisticated living experiences. Every project begins with understanding the client's vision and translating it into a cohesive spatial narrative.
              </p>
            </div>
            <div className={`${styles.pillarCard} animate-up`}>
              <h3 className={`${styles.pillarTitle} tracked-text`}>DETAIL</h3>
              <p className={styles.pillarText}>
                Luxury is found in the details. From material selection and spatial planning to finishes and styling, every element is carefully considered to achieve excellence.
              </p>
            </div>
            <div className={`${styles.pillarCard} animate-up`}>
              <h3 className={`${styles.pillarTitle} tracked-text`}>ELEGANCE</h3>
              <p className={styles.pillarText}>
                Timeless, refined, and effortlessly sophisticated. FAIE creates interiors that transcend trends and remain beautiful, functional, and relevant for years to come.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
