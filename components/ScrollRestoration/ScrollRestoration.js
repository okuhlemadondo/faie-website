'use client';
import { useEffect } from 'react';

export default function ScrollRestoration() {
  useEffect(() => {
    // Disable the browser's default scroll restoration on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    // Force scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return null;
}
