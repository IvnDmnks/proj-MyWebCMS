import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Section from '@/components/section';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-primary-color">
        <Navbar />
        <Section>{children}</Section>
        <Footer />
      </body>
    </html>
  );
}
