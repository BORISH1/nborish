// app/layout.tsx (or your main layout file)
import { Inter } from 'next/font/google';
import Background from '@/components/Background';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} text-white overflow-x-hidden`}>
        <Background />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}