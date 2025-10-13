// app/layout.tsx

import './globals.css';
import GlobalWaterBackground from '@/components/Animation/GlobalWaterBackground'; // Re-added

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* GLOBAL ANIMATED BACKGROUND */}
        <GlobalWaterBackground /> 
        
        {children}
      </body>
    </html>
  );
}