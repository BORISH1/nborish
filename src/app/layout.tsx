// app/layout.tsx
import './globals.css';
import GlobalWaterBackground from '@/components/Animation/GlobalWaterBackground';
import { Poppins } from 'next/font/google';

// Optimize font loading with next/font
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Nborish - Full Stack Developer',
  description: 'Modern portfolio of N Borish, a Developer specializing in Next.js.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        {/* GLOBAL ANIMATED BACKGROUND */}
        <GlobalWaterBackground /> 
        
        {children}
      </body>
    </html>
  );
}