'use client';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export default function SmoothScrolling({ children }) {
  const lenisRef = useRef(null);

  const initLenis = () => {
    if (!window.Lenis) return;
    
    // Initialize Lenis using linear interpolation (lerp) instead of fixed duration 
    // This creates a natural momentum curve that never feels "slow then fast"
    const lenis = new window.Lenis({
      lerp: 0.08, // 0.1 is default. 0.08 adds a tiny bit of luxurious weight.
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });
    
    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger so animations stay perfectly aligned
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP's ticker to drive Lenis's requestAnimationFrame
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Disable GSAP's lag smoothing to prevent stuttering
    gsap.ticker.lagSmoothing(0);
  };

  useEffect(() => {
    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      gsap.ticker.remove((time) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time * 1000);
        }
      });
    };
  }, []);

  return (
    <>
      <Script 
        src="https://unpkg.com/lenis@1.1.18/dist/lenis.min.js" 
        strategy="afterInteractive"
        onLoad={initLenis}
      />
      {children}
    </>
  );
}
