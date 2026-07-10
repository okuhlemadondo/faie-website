'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import styles from './PageMotion.module.css';

const INTRO_HOLD = 1250;
const INTRO_EXIT = 560;
const MIN_COVER = 460;
const REVEAL = 760;

function isModifiedClick(event) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
}

function getInternalNavigation(anchor) {
  if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) {
    return null;
  }

  const destination = new URL(anchor.href, window.location.href);
  const current = new URL(window.location.href);

  if (destination.origin !== current.origin) {
    return null;
  }

  if (destination.pathname === current.pathname && destination.search === current.search) {
    return null;
  }

  return destination;
}

export default function PageMotion({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  
  const [introStage, setIntroStage] = useState('loading');
  const [coverStage, setCoverStage] = useState('idle');
  
  const previousPathname = useRef(pathname);
  const prefersReducedMotion = useRef(false);
  const timers = useRef([]);
  const isNavigating = useRef(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = media.matches;

    const updateMotionPreference = () => {
      prefersReducedMotion.current = media.matches;
    };

    media.addEventListener('change', updateMotionPreference);

    if (media.matches) {
      timers.current.push(window.setTimeout(() => setIntroStage('done'), 180));
    } else {
      timers.current.push(window.setTimeout(() => setIntroStage('exiting'), INTRO_HOLD));
      timers.current.push(window.setTimeout(() => setIntroStage('done'), INTRO_HOLD + INTRO_EXIT));
    }

    return () => {
      media.removeEventListener('change', updateMotionPreference);
      timers.current.forEach(window.clearTimeout);
    };
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      if (event.defaultPrevented || isModifiedClick(event) || prefersReducedMotion.current) {
        return;
      }

      const anchor = event.target.closest('a[href]');
      const destination = getInternalNavigation(anchor);
      if (!destination) {
        return;
      }

      // PREVENT INSTANT NEXT.JS ROUTING
      event.preventDefault();
      
      isNavigating.current = true;
      setCoverStage('covering');

      // Wait for the curtain to fall, then tell Next.js to navigate
      timers.current.push(
        window.setTimeout(() => {
          router.push(destination.href, { scroll: false });
        }, MIN_COVER)
      );
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, [router]);

  useEffect(() => {
    if (previousPathname.current === pathname) {
      return;
    }
    previousPathname.current = pathname;

    // Reset scroll position silently instantly when pathname changes
    const html = document.documentElement;
    const originalScrollBehavior = html.style.scrollBehavior;
    html.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    window.requestAnimationFrame(() => {
      html.style.scrollBehavior = originalScrollBehavior;
    });

    if (prefersReducedMotion.current) {
      setCoverStage('idle');
      return;
    }

    // If we initiated this navigation via a click, lift the curtain!
    if (isNavigating.current) {
      isNavigating.current = false;
      setCoverStage('revealing');
      
      timers.current.push(
        window.setTimeout(() => {
          setCoverStage('idle');
        }, REVEAL)
      );
    } else {
      // It's a back button or external navigation, no curtain.
      setCoverStage('idle');
    }
  }, [pathname]);

  return (
    <>
      <div className={styles.pageFrame}>
        {children}
      </div>

      {introStage !== 'done' && (
        <div className={styles.introOverlay} data-stage={introStage} role="status" aria-label="Loading FAIE">
          <div className={styles.introStack}>
            <div className={styles.threadMark} aria-hidden="true">
              <span className={styles.threadDot}></span>
            </div>
            <h1 className={`${styles.textWordmark} tracked-text`}>FAIE</h1>
          </div>
        </div>
      )}

      <div
        className={`${styles.routeCover} ${
          coverStage !== 'idle' ? styles.routeCoverActive : ''
        } ${coverStage === 'covering' ? styles.routeCovering : ''} ${
          coverStage === 'revealing' ? styles.routeRevealing : ''
        }`}
        aria-hidden="true"
      >
        <span className={styles.curtainLine}></span>
        <span className={styles.curtainMark}></span>
      </div>
    </>
  );
}
