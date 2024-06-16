import type { Metadata } from "next";
import "./globals.css";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: "joaquinmetayer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Hero />
        {children}
      </body>
    </html>
  );
}
