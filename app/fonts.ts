import { Inter, Jersey_10, Jersey_15, Jersey_20, Jersey_25, Playfair_Display, Press_Start_2P } from 'next/font/google';

export const jersey10 = Jersey_10({ subsets: ['latin'], weight: '400' });
export const jersey15 = Jersey_15({ subsets: ['latin'], weight: '400' });
export const jersey20 = Jersey_20({ subsets: ['latin'], weight: '400' });
export const jersey25 = Jersey_25({ subsets: ['latin'], weight: '400' });
export const inter = Inter({ subsets: ['latin'] });
export const playfair = Playfair_Display({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-playfair',
  });
  export const pressStart = Press_Start_2P({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-press",
  });