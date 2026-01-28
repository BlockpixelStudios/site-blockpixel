// app/layout.tsx
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-blockpixel-bg antialiased text-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
