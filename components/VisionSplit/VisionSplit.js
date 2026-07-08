'use client';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import styles from './VisionSplit.module.css';

export default function VisionSplit() {
  const container = useGsap((root, gsap) => {
    // Parallax effect on the image
    gsap.to(root.querySelector(`.${styles.image}`), {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });

  return (
    <section className={styles.section} ref={container}>
      <div className={styles.grid}>
        {/* Left Side: Image */}
        <div className={styles.imageColumn}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/stock/vision-interior.jpg"
              alt="Where your vision takes shape"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={styles.image}
            />
          </div>
        </div>

        {/* Right Side: Text */}
        <div className={styles.textColumn}>
          <ScrollReveal variant="slideLeft" duration={1.4}>
            <div className={styles.textContent}>
              <h2 className={styles.heading}>
                WHERE YOUR<br />VISION TAKES<br />SHAPE
              </h2>
              <p className={styles.description}>
                Exceptional interiors begin with understanding how you experience space. Through thoughtful planning, timeless design and meticulous attention to detail, FAIE transforms ideas into environments that feel effortless, elegant and uniquely yours.
              </p>
              <div className={styles.actions}>
                <Button variant="outlined" href="/shop">
                  View Collection
                </Button>
                <Button variant="filled" href="/shop">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
