import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'MediaCast | 24/7 Live Broadcast Network',
  description: 'Stop letting your back-catalog gather dust. Configure a dedicated cloud podcast server.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans" suppressHydrationWarning>{children}</body>
    </html>
  );
}
