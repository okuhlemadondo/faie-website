import { Bodoni_Moda, Manrope, Abel } from 'next/font/google';

export const bodoniModa = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-accent',
  display: 'swap',
});
