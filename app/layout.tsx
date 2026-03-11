import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "FENES BH d.o.o. | ALU i PVC Stolarija Živinice",
  description:
    "Premium ALU i PVC stolarija, ograde i sistemi staklenih balkona. Isporuka i ugradnja diljem BiH i EU. Zatražite besplatnu ponudu danas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bs" className={`${inter.variable} ${playfair.variable}`}>
      <body className="overflow-x-hidden antialiased">{children}</body>
    </html>
  );
}
