import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { CookieProvider } from "@/contexts/CookieContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://toflipop.com'),
  title: {
    template: '%s | Toflipop',
    default: 'Toflipop - Anotadores y Stickers Creativos',
  },
  description: 'Tienda online de anotadores personalizados y stickers únicos. Creatividad y estilo para tu día a día. Envío a toda España.',
  keywords: ['anotadores', 'stickers', 'personalizados', 'creativos', 'papelería', 'toflipop', 'cuadernos', 'planners'],
  authors: [{ name: 'Toflipop' }],
  creator: 'Toflipop',
  publisher: 'Toflipop',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Toflipop',
    title: 'Toflipop - Anotadores y Stickers Creativos',
    description: 'Tienda online de anotadores personalizados y stickers únicos. Creatividad y estilo para tu día a día.',
    url: 'https://toflipop.com',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Toflipop - Anotadores y Stickers Creativos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toflipop - Anotadores y Stickers Creativos',
    description: 'Tienda online de anotadores personalizados y stickers únicos.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <CookieProvider>
          <CartProvider>
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieBanner />
          </CartProvider>
          <GoogleAnalytics />
        </CookieProvider>
      </body>
    </html>
  );
}
