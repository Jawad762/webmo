import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "WebmBo",
  description: "Welcome To WebMo: a Lebanon-based agency specializing in custom Web and Mobile development."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={montserrat.className + ' bg-black'}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
