import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar, Footer } from "../components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Loc'A Car",
  description: "Site de location de voiture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
