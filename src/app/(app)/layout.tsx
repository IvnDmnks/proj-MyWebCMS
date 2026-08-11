import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Section from '@/components/section';
import type { Metadata } from "next";
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: "Iván Domonkos",
  description: "iván domonkos website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-bgPrimary">
        <ThemeProvider defaultTheme='dark'>
          <Navbar />
            <Section>{children}</Section>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
