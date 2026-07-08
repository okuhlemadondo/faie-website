'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useWishlist } from '@/lib/wishlistStore';
import { getProductById } from '@/lib/data';
import { useGsap } from '@/hooks/useGsap';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { isInWishlist, toggleItem } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const cardRef = useGsap((root, gsap) => {
    gsap.fromTo(
      root,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom-=50',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [product]);

  const handleWishlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Get full product data for the store
    const fullProduct = getProductById(product.id) || product;
    toggleItem(fullProduct);
  };

  return (
    <Link href={`/shop/${product.id}`} className={styles.productCard} ref={cardRef}>
      <div className={styles.imageContainer}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={styles.image}
        />
        {/* If there's an alt image, show it on hover */}
        {product.altImage && (
          <Image
            src={product.altImage}
            alt={`${product.name} alternate view`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`${styles.image} ${styles.imageHover}`}
          />
        )}
        <button
          className={`${styles.wishlistBtn} ${inWishlist ? styles.wishlistActive : ''}`}
          onClick={handleWishlistClick}
          aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{product.name}</h3>
        <span className={styles.price}>{product.price}</span>
      </div>
    </Link>
  );
}
