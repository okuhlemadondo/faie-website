'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * ScrollReveal — wraps children and animates them on viewport entry.
 * 
 * Variants:
 *   'fadeUp'    — fade in + slide up
 *   'fadeIn'    — simple opacity fade
 *   'scaleUp'  — grow/sprout from 85% to 100%
 *   'slideLeft' — slide in from the right
 *   'slideRight' — slide in from the left
 * 
 * Props:
 *   variant   — animation type (default: 'fadeUp')
 *   delay     — seconds delay before animation (default: 0)
 *   duration  — animation duration (default: 1.2)
 *   stagger   — if wrapping multiple children, stagger between each (default: 0.15)
 *   threshold — how far into viewport to trigger (default: 'top 85%')
 *   className — extra class names
 *   tag       — HTML element to render (default: 'div')
 */
export default function ScrollReveal({ 
  children, 
  variant = 'fadeUp', 
  delay = 0, 
  duration = 1.2,
  stagger = 0.15,
  threshold = 'top 85%',
  className = '',
  tag: Tag = 'div',
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const childElements = el.children.length > 1 ? Array.from(el.children) : el;

    // Define animation start states based on variant
    // Added a subtle blur for a more elegant, cinematic fade-in
    const variants = {
      fadeUp: { 
        from: { y: 60, opacity: 0, filter: 'blur(8px)' }, 
        to: { y: 0, opacity: 1, filter: 'blur(0px)' } 
      },
      fadeIn: { 
        from: { opacity: 0, filter: 'blur(8px)' }, 
        to: { opacity: 1, filter: 'blur(0px)' } 
      },
      scaleUp: { 
        from: { scale: 0.85, opacity: 0, filter: 'blur(8px)' }, 
        to: { scale: 1, opacity: 1, filter: 'blur(0px)' } 
      },
      slideLeft: { 
        from: { x: 80, opacity: 0, filter: 'blur(8px)' }, 
        to: { x: 0, opacity: 1, filter: 'blur(0px)' } 
      },
      slideRight: { 
        from: { x: -80, opacity: 0, filter: 'blur(8px)' }, 
        to: { x: 0, opacity: 1, filter: 'blur(0px)' } 
      },
    };

    const v = variants[variant] || variants.fadeUp;

    // Set the initial state
    gsap.set(childElements, v.from);

    // Determine if the element is in the viewport on initial mount.
    // If it is, we add a delay so the animation syncs with the curtain lifting.
    // If it's further down the page, no delay is needed.
    const rect = el.getBoundingClientRect();
    const isInitialViewport = rect.top < window.innerHeight && rect.bottom > 0;
    const computedDelay = isInitialViewport ? Math.max(delay, 0.45) : delay;

    // Create the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: threshold,
        // Animates in when scrolling down (play)
        // Animates out when scrolling past it (reverse)
        // Animates in when scrolling back up (play)
        // Animates out when scrolling up past it (reverse)
        toggleActions: 'play reverse play reverse',
      }
    });

    tl.to(childElements, {
      ...v.to,
      duration,
      delay: computedDelay,
      stagger: el.children.length > 1 ? stagger : 0,
      ease: 'power3.out',
    });

    return () => {
      tl.kill();
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
    };
  }, [variant, delay, duration, stagger, threshold]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
