import "./globals.css";
import type { Metadata } from "next";
import Hero from "./components/Hero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Joaquin Metayer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="es">
      <body>
        <Hero/>
        {children}
        <Link href="/login">Login</Link>
      </body>
    </html>
  );
}
