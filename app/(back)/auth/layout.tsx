import '../../globals.css';

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
        {children}
      </body>
    </html>
  );
}
