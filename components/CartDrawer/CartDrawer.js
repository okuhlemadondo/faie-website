'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cartStore';
import styles from './CartDrawer.module.css';

export default function CartDrawer({ isOpen, onClose }) {
  const { items, removeItem, updateQuantity, cartTotal } = useCart();
  const drawerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const formatCurrency = (amount) => {
    return `R${amount.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`;
  };

  return (
    <div className={`${styles.wrapper} ${isOpen ? styles.open : ''}`}>
      <div className={styles.overlay} onClick={onClose} ref={overlayRef} />
      <div className={styles.drawer} ref={drawerRef}>
        <div className={styles.header}>
          <h2 className={styles.title}>YOUR BAG</h2>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <p>Your bag is empty</p>
            <button className={styles.continueShopping} onClick={onClose}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className={styles.itemsList}>
              {items.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    <Image src={item.image} alt={item.name} fill className={styles.image} />
                  </div>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <span className={styles.itemPrice}>{item.price}</span>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className={styles.qty}>{item.quantity}</span>
                      <button
                        className={styles.qtyBtn}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeItem(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <div className={styles.subtotalRow}>
                <span className={styles.subtotalLabel}>SUBTOTAL</span>
                <span className={styles.subtotalValue}>{formatCurrency(cartTotal)}</span>
              </div>
              <p className={styles.shippingNote}>Shipping & taxes calculated at checkout</p>
              <Link href="/shop/checkout" className={styles.checkoutBtn} onClick={onClose}>
                PROCEED TO CHECKOUT
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
