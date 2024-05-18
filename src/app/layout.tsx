import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@/ELEMENTX/abstract/abstract.css'
import Nav from "@/components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Superior",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Nav />
        {children}
        </body>
    </html>
  );
}
