import type { Metadata } from "next";

import "./globals.css";
import { Header } from "@/components/header";



export const metadata: Metadata = {
  title: "Daly Games",
  description: "Mais de 10 mil jogos sepados e organizados.",
  keywords: ['games', 'jogos', 'steam'],
  openGraph:{
    images: [`${process.env.PROJECT_URL}/preview.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot:{
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
