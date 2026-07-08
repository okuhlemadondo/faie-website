'use client';
import { useState, useEffect } from 'react';
import styles from './CookieConsent.module.css';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('faie-cookie-consent');
    if (!consent) {
      // Small delay so the banner slides in after page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('faie-cookie-consent', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('faie-cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <p className={styles.text}>
          We use cookies to enhance your browsing experience and analyse site traffic. 
          By continuing to use our site, you consent to our use of cookies.
        </p>
        <div className={styles.actions}>
          <button className={styles.declineBtn} onClick={handleDecline}>
            DECLINE
          </button>
          <button className={styles.acceptBtn} onClick={handleAccept}>
            ACCEPT
          </button>
        </div>
      </div>
    </div>
  );
}
