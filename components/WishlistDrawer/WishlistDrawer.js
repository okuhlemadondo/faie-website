'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useWishlist } from '@/lib/wishlistStore';
import { useCart } from '@/lib/cartStore';
import styles from './WishlistDrawer.module.css';

export default function WishlistDrawer({ isOpen, onClose }) {
  const { items, removeItem } = useWishlist();
  const { addItem } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleMoveToCart = (item) => {
    addItem(item);
    removeItem(item.id);
  };

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : ''}`}>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.drawer}>
        <div className={styles.header}>
          <h2 className={styles.title}>WISHLIST</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <p>Your wishlist is empty</p>
            <button className={styles.continueShopping} onClick={onClose}>Browse Collection</button>
          </div>
        ) : (
          <div className={styles.itemsList}>
            {items.map((item) => (
              <div key={item.id} className={styles.wishlistItem}>
                <div className={styles.itemImage}>
                  <Image src={item.image} alt={item.name} fill className={styles.image} />
                </div>
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <span className={styles.itemPrice}>{item.price}</span>
                  <div className={styles.itemActions}>
                    <button className={styles.moveToCartBtn} onClick={() => handleMoveToCart(item)}>
                      ADD TO BAG
                    </button>
                    <button
                      className={styles.removeBtn}
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                    >
                      REMOVE
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
