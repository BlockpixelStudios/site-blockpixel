// app/layout.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-blockpixel-bg antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

