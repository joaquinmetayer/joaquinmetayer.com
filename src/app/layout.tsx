import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import data from "../../assets/data.json";
import ImageHero from "./components/ImageHero";

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
        <ImageHero/>
        <h1>
          <Link href="/">Joaquin Metayer</Link>
        </h1>
        <p>
          {data.links.map((link, index) => (
            <span key={index}>
              <Link key={index} href={link.url} target="_blank" style={{color: '#000'}}>
                {link.platform}
              </Link>{" "}
            </span>
          ))}
          <Link href="/admin" style={{color: '#000'}}>Admin</Link>
        </p>
        <hr />
        {children}
      </body>
    </html>
  );
}
