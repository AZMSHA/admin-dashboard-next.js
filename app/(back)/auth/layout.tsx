import '../../globals.css';
import { Card, CardContent } from '@/components/ui/card';
import { Toaster } from '@/components/ui/toaster';

export const metadata = {
  title: 'Create an account',
  description: 'Registration Page'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex justify-center bg-gray-50 items-center h-screen">
        <Card>
          <CardContent className="pt-6">{children}</CardContent>
        </Card>
        <Toaster />
      </body>
    </html>
  );
}
