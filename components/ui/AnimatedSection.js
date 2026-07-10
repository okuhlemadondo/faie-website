'use client';
import { useGsap } from '@/hooks/useGsap';

export default function AnimatedSection({ children, className = '' }) {
  const containerRef = useGsap((root, gsap) => {
    // Select all elements with the animate-up class inside this section
    const elements = root.querySelectorAll('.animate-up');
    
    if (elements.length === 0) return;

    gsap.fromTo(elements, 
      { 
        y: 30, 
        opacity: 0, 
        filter: 'blur(8px)' 
      },
      { 
        y: 0, 
        opacity: 1, 
        filter: 'blur(0px)', 
        duration: 1.2, 
        stagger: 0.15, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom-=50',
          toggleActions: 'play none none none',
        }
      }
    );
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
