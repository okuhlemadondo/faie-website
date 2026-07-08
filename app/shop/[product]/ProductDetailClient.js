'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cartStore';
import { useWishlist } from '@/lib/wishlistStore';
import { useToast } from '@/components/ui/Toast';
import ProductCard from '@/components/ProductCard/ProductCard';
import { products } from '@/lib/data';
import { useGsap } from '@/hooks/useGsap';
import styles from './page.module.css';

export default function ProductDetailClient({ product }) {
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();
  const { showToast } = useToast();

  const inWishlist = isInWishlist(product.id);

  const handleAddToCart = () => {
    addItem(product);
    showToast('Added to your bag ✓');
  };

  const handleToggleWishlist = () => {
    toggleItem(product);
    showToast(inWishlist ? 'Removed from wishlist' : 'Added to wishlist ♡');
  };

  const containerRef = useGsap((root, gsap) => {
    gsap.fromTo(
      root.querySelectorAll('.animate-up'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
    );
  }, [product]);

  return (
    <div className={styles.pageWrapper} ref={containerRef}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/shop" className={styles.breadcrumbLink}>Shop</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>{product.name}</span>
        </div>
      </div>

      <section className={styles.productSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Image Gallery */}
            <div className={styles.imageGallery}>
              <div className={styles.mainImageWrapper}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className={styles.image}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {product.altImage && (
                <div className={styles.thumbnails}>
                  <div className={styles.thumbnailWrapper}>
                    <Image
                      src={product.image}
                      alt={`${product.name} view 1`}
                      fill
                      className={styles.thumbnail}
                    />
                  </div>
                  <div className={styles.thumbnailWrapper}>
                    <Image
                      src={product.altImage}
                      alt={`${product.name} view 2`}
                      fill
                      className={styles.thumbnail}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className={styles.productInfo}>
              <div className={styles.header}>
                <span className={`${styles.category} tracked-text animate-up`}>{product.category}</span>
                <div className={`${styles.titleRow} animate-up`}>
                  <h1 className={styles.title}>{product.name}</h1>
                  <button
                    className={`${styles.wishlistBtn} ${inWishlist ? styles.wishlistActive : ''}`}
                    onClick={handleToggleWishlist}
                    aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill={inWishlist ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <span className={`${styles.price} animate-up`}>{product.price}</span>
              </div>
              
              <div className={`${styles.description} animate-up`}>
                <p>{product.description}</p>
              </div>
              
              <div className={`${styles.details} animate-up`}>
                <h3 className={`${styles.detailsTitle} tracked-text`}>DETAILS</h3>
                <ul className={styles.detailsList}>
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
              
              <div className={`${styles.actions} animate-up`}>
                <button className={styles.addToCartBtn} onClick={handleAddToCart}>
                  ADD TO BAG
                </button>
                <Link href="/contact" className={styles.inquireBtn}>
                  INQUIRE
                </Link>
              </div>
              
              <div className={`${styles.shippingInfo} animate-up`}>
                <p>Complimentary white-glove delivery on all orders over R10,000.</p>
                <p>Estimated delivery: 2-4 weeks (made to order).</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      <section className={styles.relatedSection}>
        <div className={styles.container}>
          <h2 className={`${styles.relatedTitle} tracked-text`}>YOU MAY ALSO LIKE</h2>
          <div className={styles.relatedGrid}>
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
