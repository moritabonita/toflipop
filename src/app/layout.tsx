import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ToFlipop - Anotadores y Stickers Creativos",
  description: "Tienda online de anotadores personalizados y stickers únicos. Creatividad y estilo para tu día a día.",
  keywords: ["anotadores", "stickers", "personalizados", "creativos", "papelería", "toflipop"],
  authors: [{ name: "ToFlipop" }],
  openGraph: {
    title: "ToFlipop - Anotadores y Stickers Creativos",
    description: "Tienda online de anotadores personalizados y stickers únicos.",
    type: "website",
    locale: "es_ES",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
