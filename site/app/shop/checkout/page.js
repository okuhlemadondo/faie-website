'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cartStore';
import { useToast } from '@/components/ui/Toast';
import styles from './page.module.css';

const provinces = [
  'Eastern Cape',
  'Free State',
  'Gauteng',
  'KwaZulu-Natal',
  'Limpopo',
  'Mpumalanga',
  'Northern Cape',
  'North West',
  'Western Cape',
];

export default function CheckoutPage() {
  const { items, cartTotal, clearCart } = useCart();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const formatCurrency = (amount) => {
    return `R${amount.toLocaleString('en-ZA', { minimumFractionDigits: 2 })}`;
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Thank you! Your order has been received ✓');
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.confirmationContainer}>
          <div className={styles.confirmation}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h1 className={styles.confirmationTitle}>ORDER CONFIRMED</h1>
            <p className={styles.confirmationText}>
              Thank you, {formData.firstName}! Your order has been received.
              Our team will contact you shortly to confirm delivery details.
            </p>
            <Link href="/shop" className={styles.backToShopBtn}>
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className={styles.pageWrapper}>
        <div className={styles.confirmationContainer}>
          <div className={styles.confirmation}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <h1 className={styles.confirmationTitle}>YOUR BAG IS EMPTY</h1>
            <p className={styles.confirmationText}>
              Add some items to your bag before checking out.
            </p>
            <Link href="/shop" className={styles.backToShopBtn}>
              BROWSE COLLECTION
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.container}>
        <div className={styles.breadcrumbs}>
          <Link href="/shop" className={styles.breadcrumbLink}>Shop</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>Checkout</span>
        </div>

        <h1 className={styles.pageTitle}>CHECKOUT</h1>

        <form onSubmit={handleSubmit} className={styles.checkoutGrid}>
          {/* Left Column - Form */}
          <div className={styles.formColumn}>
            <h2 className={`${styles.sectionTitle} tracked-text`}>CONTACT INFORMATION</h2>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
            </div>

            <h2 className={`${styles.sectionTitle} tracked-text`} style={{ marginTop: '48px' }}>DELIVERY ADDRESS</h2>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="address">Street Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="province">Province</label>
                <select
                  id="province"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className={styles.select}
                >
                  <option value="">Select province</option>
                  {provinces.map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className={styles.formGroup} style={{ maxWidth: '200px' }}>
              <label className={styles.label} htmlFor="postalCode">Postal Code</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className={styles.summaryColumn}>
            <div className={styles.summaryCard}>
              <h2 className={`${styles.sectionTitle} tracked-text`}>ORDER SUMMARY</h2>
              <div className={styles.summaryItems}>
                {items.map((item) => (
                  <div key={item.id} className={styles.summaryItem}>
                    <div className={styles.summaryItemImage}>
                      <Image src={item.image} alt={item.name} fill className={styles.summaryImg} />
                      <span className={styles.qtyBadge}>{item.quantity}</span>
                    </div>
                    <div className={styles.summaryItemInfo}>
                      <span className={styles.summaryItemName}>{item.name}</span>
                      <span className={styles.summaryItemPrice}>{formatCurrency(item.numericPrice * item.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className={styles.summaryDivider} />
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>{formatCurrency(cartTotal)}</span>
              </div>
              <div className={styles.summaryRow}>
                <span>Delivery</span>
                <span>{cartTotal >= 10000 ? 'Complimentary' : 'R500.00'}</span>
              </div>
              <div className={styles.summaryDivider} />
              <div className={`${styles.summaryRow} ${styles.totalRow}`}>
                <span>TOTAL</span>
                <span>{formatCurrency(cartTotal + (cartTotal >= 10000 ? 0 : 500))}</span>
              </div>
              <button type="submit" className={styles.placeOrderBtn}>
                PLACE ORDER
              </button>
              <p className={styles.paymentNote}>
                Payment processing coming soon. Our team will contact you to arrange payment.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
