'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export function useGsap(callback, deps = []) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const ctx = gsap.context(() => {
      callback(ref.current, gsap);
    }, ref);

    return () => ctx.revert();
  }, deps);

  return ref;
}
