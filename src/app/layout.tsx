import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import data from "../../assets/data.json";

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
        <img src={`/images/${data.heroImage}`} alt="joaquinmetayer"/>
        <p>
          <Link href="/">joaquinmetayer</Link>{" / "}
          {data.links.map((link, index) => (
            <span key={index}>
              <Link key={index} href={link.url} target="_blank">
                {link.platform}
              </Link>{" "}
            </span>
          ))}
        </p>
        <hr />

        {children}
      </body>
    </html>
  );
}
