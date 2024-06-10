import '../globals.css';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import { Logo, SettingsIcon, UsersIcon, VercelLogo } from '@/components/icons';
export const metadata = {
  title: 'Home Page',
  description: 'Welcome to the homepage'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body>
        <h1>This is the homepage</h1>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
