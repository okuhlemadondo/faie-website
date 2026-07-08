'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Only run on desktop/devices with a pointer
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    // Set initial position off-screen
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(dotRef.current, { xPercent: -50, yPercent: -50, opacity: 0 });

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      
      // Make them visible on first move
      gsap.to([cursorRef.current, dotRef.current], { opacity: 1, duration: 0.2 });

      // Move the dot instantly
      gsap.to(dotRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power3.out'
      });

      // Move the outer ring with a slight lag
      gsap.to(cursorRef.current, {
        x: clientX,
        y: clientY,
        duration: 0.5,
        ease: 'power3.out'
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if hovering over a clickable element or specific interactive elements
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('select') || 
        target.closest('textarea') ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
        gsap.to(cursorRef.current, { scale: 1.5, opacity: 0.5, duration: 0.3, ease: 'power2.out' });
        gsap.to(dotRef.current, { scale: 0, duration: 0.3, ease: 'power2.out' });
      } else {
        setIsHovering(false);
        gsap.to(cursorRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' });
        gsap.to(dotRef.current, { scale: 1, duration: 0.3, ease: 'power2.out' });
      }
    };

    const handleMouseLeave = () => {
      gsap.to([cursorRef.current, dotRef.current], { opacity: 0, duration: 0.3 });
    };

    const handleMouseEnter = () => {
      gsap.to([cursorRef.current, dotRef.current], { opacity: 1, duration: 0.3 });
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Add class to body to hide default cursor
    document.body.classList.add('has-custom-cursor');

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div ref={cursorRef} className={styles.cursorRing}></div>
      <div ref={dotRef} className={styles.cursorDot}></div>
    </>
  );
}
