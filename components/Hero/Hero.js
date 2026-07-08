'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useGsap } from '@/hooks/useGsap';
import Button from '@/components/ui/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const container = useGsap((root, gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top bottom',
        toggleActions: 'play reverse play reverse',
      }
    });

    // Zoom out the background image slightly on load
    tl.fromTo(root.querySelector(`.${styles.imageWrapper}`), 
      { scale: 1.05, filter: 'blur(4px)' },
      { scale: 1, filter: 'blur(0px)', duration: 2, ease: 'power2.out' },
      0.2
    );

    // Stagger fade-up the content with cinematic blur
    tl.fromTo(root.querySelectorAll('.animate-up'), 
      { y: 30, opacity: 0, filter: 'blur(8px)' },
      { y: 0, opacity: 1, filter: 'blur(0px)', duration: 1.2, stagger: 0.2, ease: 'power3.out' },
      0.45
    );

  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!container.current) return;
      const wordmark = container.current.querySelector(`.${styles.wordmark}`);
      if (!wordmark) return;
      
      const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
      const yPos = (e.clientY / window.innerHeight - 0.5) * 2;
      
      // Move the wordmark slightly based on mouse position
      import('gsap').then(({ gsap }) => {
        gsap.to(wordmark, {
          x: xPos * 8,
          y: yPos * 8,
          duration: 1.5,
          ease: 'power2.out',
        });
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [container]);

  return (
    <section className={styles.hero} ref={container}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/stock/hero-kitchen.jpg"
          alt="Luxury modern kitchen interior"
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.logoGroup}>
          <div className="animate-up">
            <Image
              src="/images/logos/symbol-white.png"
              alt="FAIE Symbol"
              width={120}
              height={120}
              className={styles.symbol}
            />
          </div>
          <div className="animate-up">
            <Image
              src="/images/logos/wordmark-white.png"
              alt="FAIE Consulting"
              width={500}
              height={140}
              className={styles.wordmark}
            />
          </div>
        </div>

        <div className={`${styles.tagline} animate-up tracked-text`}>
          Designing Interiors That Elevate Everyday Living
        </div>

        <div className="animate-up">
          <Button variant="white" className={styles.cta}>
            BOOK A CONSULTATION
          </Button>
        </div>
      </div>
    </section>
  );
}
