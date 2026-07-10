import { bodoniModa, manrope, abel } from '@/lib/fonts';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CustomCursor from '@/components/CustomCursor/CustomCursor';
import PageMotion from '@/components/PageMotion/PageMotion';
import SmoothScrolling from '@/components/ui/SmoothScrolling';
import { CartProvider } from '@/lib/cartStore';
import { WishlistProvider } from '@/lib/wishlistStore';
import { ToastProvider } from '@/components/ui/Toast';
import CookieConsent from '@/components/CookieConsent/CookieConsent';
import Script from 'next/script';

export const metadata = {
  title: 'FAIE | Design · Detail · Elegance',
  description: 'Luxury interiors thoughtfully designed to combine timeless elegance, functionality and refined craftsmanship.',
  openGraph: {
    title: 'FAIE | Luxury Interiors',
    description: 'Luxury interiors thoughtfully designed to combine timeless elegance, functionality and refined craftsmanship.',
    url: 'https://faie.co.za',
    siteName: 'FAIE',
    images: [
      {
        url: '/images/stock/luxury-interior.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_ZA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAIE',
    description: 'Luxury interior design and bespoke furniture.',
    images: ['/images/stock/luxury-interior.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${bodoniModa.variable} ${manrope.variable} ${abel.variable}`}>
      <body suppressHydrationWarning>
        {/* Google Analytics — Replace GA_MEASUREMENT_ID with the client's actual ID */}
        {/* 
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </Script>
        */}
        <CartProvider>
          <WishlistProvider>
            <ToastProvider>
              <SmoothScrolling>
                <CustomCursor />
                <Navbar />
                <PageMotion>
                  <main>{children}</main>
                  <Footer />
                </PageMotion>
              </SmoothScrolling>
              <CookieConsent />
            </ToastProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
