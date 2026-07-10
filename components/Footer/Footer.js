'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useToast } from '@/components/ui/Toast';
import styles from './Footer.module.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const { showToast } = useToast();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    showToast('Thank you for subscribing ✓');
    setEmail('');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Logo & Socials */}
          <div className={styles.brandColumn}>
            <div className={styles.logoGroup}>
              <Image 
                src="/images/logos/symbol-white.png" 
                alt="FAIE" 
                width={70} 
                height={70}
                className={styles.symbol}
              />
              <div className={styles.wordmark}>
                <span className={styles.textWordmark}>FAIE</span>
              </div>
              <p className={styles.tagline}>DESIGN &middot; DETAIL &middot; ELEGANCE</p>
            </div>
            <div className={styles.socials}>
              <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
              <a href="#" aria-label="Twitter"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
              <a href="#" aria-label="Pinterest"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.63 7.85 6.35 9.31-.09-.79-.16-2 .03-2.87.18-.78 1.15-4.88 1.15-4.88s-.29-.59-.29-1.46c0-1.37.8-2.39 1.79-2.39.84 0 1.25.63 1.25 1.39 0 .85-.54 2.12-.82 3.3-.23.99.5 1.8 1.47 1.8 1.76 0 3.12-1.86 3.12-4.54 0-2.38-1.71-4.04-4.15-4.04-2.83 0-4.49 2.12-4.49 4.31 0 .85.33 1.77.74 2.27.08.1.09.19.07.29l-.25 1.05c-.03.14-.11.16-.25.1-1.12-.52-1.82-2.15-1.82-3.46 0-2.82 2.05-5.4 5.9-5.4 3.09 0 5.49 2.2 5.49 5.14 0 3.08-1.94 5.56-4.64 5.56-1.17 0-2.27-.61-2.65-1.33l-.72 2.76c-.26 1-.96 2.24-1.43 3C10.05 21.82 10.99 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"></path></svg></a>
              <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.48L15.5 11.75l-5.75 3.27z"></path></svg></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={`${styles.heading} tracked-text`}>Quick links</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* About */}
          <div className={styles.column}>
            <h4 className={`${styles.heading} tracked-text`}>About</h4>
            <ul className={styles.linkList}>
              <li><Link href="/services">How It Works</Link></li>
              <li><Link href="/services">Our Packages</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
            </ul>
          </div>

          {/* Help Centre */}
          <div className={styles.column}>
            <h4 className={`${styles.heading} tracked-text`}>Help Centre</h4>
            <ul className={styles.linkList}>
              <li><Link href="/contact">Payments</Link></li>
              <li><Link href="/contact">Shipping</Link></li>
              <li><Link href="/contact">Product Returns</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterColumn}>
            <h4 className={`${styles.heading} tracked-text`}>Our newsletter</h4>
            <p className={styles.newsletterText}>Subscribe to our newsletter to get updates about our grand offers.</p>
            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your email-address" 
                className={styles.input} 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className={styles.submitBtn}>SEND</button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© 2026 FAIE. All rights reserved.</p>
          <p>Design by <strong>AETHER</strong></p>
        </div>
      </div>
    </footer>
  );
}
