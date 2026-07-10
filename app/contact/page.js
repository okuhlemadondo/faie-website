'use client';
import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { useToast } from '@/components/ui/Toast';
import styles from './page.module.css';

export default function ContactPage() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast('Thank you. A member of our team will be in touch shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <PageHeader 
        title="CONTACT US" 
        subtitle="START YOUR DESIGN JOURNEY"
        imagePath="/images/stock/luxury-interior.jpg"
      />

      <AnimatedSection className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.grid}>
            
            {/* Contact Information */}
            <div className={styles.infoCol}>
              <div className="animate-up">
                <h2 className={styles.heading}>Get In Touch</h2>
              </div>
              <div className="animate-up">
                <p className={styles.intro}>
                  We would love to hear from you. Whether you have a question about our services, want to discuss a new project, or need assistance with a product order, our team is ready to assist.
                </p>
              </div>
              
              <div className={`${styles.infoBlock} animate-up`}>
                <h3 className={`${styles.infoTitle} tracked-text`}>INQUIRIES</h3>
                <a href="mailto:info@faieconsulting.co.za" className={styles.infoLink}>
                  info@faieconsulting.co.za
                </a>
              </div>
              
              <div className={`${styles.infoBlock} animate-up`}>
                <h3 className={`${styles.infoTitle} tracked-text`}>PHONE</h3>
                <a href="tel:+2710XXXXXXX" className={styles.infoLink}>
                  +27 (0) 10 XXX XXXX
                </a>
              </div>
              
              <div className={`${styles.infoBlock} animate-up`}>
                <h3 className={`${styles.infoTitle} tracked-text`}>OFFICE HOURS</h3>
                <p className={styles.infoText}>
                  Monday - Friday: 09:00 - 17:00<br />
                  Saturday - Sunday: Closed
                </p>
              </div>

              <div className={`${styles.infoBlock} animate-up`}>
                <h3 className={`${styles.infoTitle} tracked-text`}>STUDIO</h3>
                <p className={styles.infoText}>
                  Johannesburg, Gauteng<br />
                  South Africa
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formCol}>
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={`${styles.formGroup} animate-up`}>
                  <label htmlFor="name" className={styles.label}>Full Name</label>
                  <input type="text" id="name" className={styles.input} required value={formData.name} onChange={handleChange} />
                </div>
                
                <div className={`${styles.formGroup} animate-up`}>
                  <label htmlFor="email" className={styles.label}>Email Address</label>
                  <input type="email" id="email" className={styles.input} required value={formData.email} onChange={handleChange} />
                </div>
                
                <div className={`${styles.formGroup} animate-up`}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <select id="subject" className={styles.select} required value={formData.subject} onChange={handleChange}>
                    <option value="">Select a subject...</option>
                    <option value="interior-design">Interior Design Inquiry</option>
                    <option value="product">Product Support / Returns</option>
                    <option value="press">Press / Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className={`${styles.formGroup} animate-up`}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea id="message" rows="5" className={styles.textarea} required value={formData.message} onChange={handleChange}></textarea>
                </div>
                
                <div className="animate-up">
                  <Button type="submit" variant="filled" className={styles.submitBtn}>
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </div>
            
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
