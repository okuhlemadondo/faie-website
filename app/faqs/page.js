'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

const faqs = [
  {
    question: 'What is the typical lead time for custom furniture orders?',
    answer: 'As our pieces are meticulously crafted to order, standard lead times range from 6 to 8 weeks. Specialized bespoke items may require up to 10 weeks to ensure uncompromising quality and attention to detail.'
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Currently, we offer complimentary white-glove delivery within South Africa for orders over R10,000. For international inquiries, please contact our team directly to arrange specialized freight and logistics.'
  },
  {
    question: 'Can I customize the fabrics and finishes of your pieces?',
    answer: 'Absolutely. We believe luxury is personal. Most of our seating and cabinetry can be tailored with a curated selection of premium fabrics, leathers, and wood finishes. Contact our design consultants to view physical swatches or arrange a studio visit.'
  },
  {
    question: 'How do your interior design consultation services work?',
    answer: 'Our process begins with an initial discovery meeting to understand your vision, lifestyle, and spatial requirements. From there, we provide comprehensive mood boards, architectural spatial planning, and a curated selection of bespoke furniture and finishes.'
  },
  {
    question: 'What is your return policy on furniture?',
    answer: 'Because our luxury items are made to order to your specific requirements, we cannot accept returns for a change of mind. However, if a piece arrives damaged or presents a manufacturing defect, our team will ensure it is repaired or replaced immediately.'
  },
  {
    question: 'Do you work on both residential and commercial projects?',
    answer: 'Yes, our expertise spans across high-end residential homes, luxury boutique hotels, and premium corporate environments. We tailor our design approach to suit the specific functional and aesthetic demands of each space.'
  }
];

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div className={`${styles.faqItem} ${isOpen ? styles.open : ''}`}>
      <button className={styles.questionBtn} onClick={onClick}>
        <span className={styles.question}>{faq.question}</span>
        <span className={styles.icon}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className={styles.answerWrapper}>
        <div className={styles.answer}>
          {faq.answer}
        </div>
      </div>
    </div>
  );
}

export default function FaqsPage() {
  const [openIndex, setOpenIndex] = useState(0); // Open first one by default

  return (
    <div className={styles.pageWrapper}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <div className={styles.container}>
          <Link href="/" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSeparator}>/</span>
          <span className={styles.breadcrumbCurrent}>FAQs</span>
        </div>
      </div>

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1 className={styles.title}>FREQUENTLY ASKED QUESTIONS</h1>
            <p className={styles.subtitle}>
              Everything you need to know about our products, services, and policies. 
              If you have any other questions, please don't hesitate to reach out.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <FaqItem 
                key={index} 
                faq={faq} 
                isOpen={index === openIndex}
                onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
              />
            ))}
          </div>

          <div className={styles.contactPrompt}>
            <h2 className={`${styles.contactTitle} tracked-text`}>STILL HAVE QUESTIONS?</h2>
            <Link href="/contact" className={styles.contactBtn}>
              CONTACT OUR TEAM
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
