import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import links from "../../assets/links.json";

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
        <h1>
          <Link href="/">Joaquin Metayer</Link>
        </h1>
        <p>
          {links.links.map((link, index) => (
            <span key={index}>
              <Link key={index} href={link.url} target="_blank">
                {link.platform}
              </Link>{" "}
            </span>
          ))}
          <Link href="/admin">Admin</Link>
        </p>
        <hr />
        {children}
      </body>
    </html>
  );
}
