import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

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
          <Link href={"/"}>Joaquin Metayer</Link>
        </h1>
        <p>
          <a
            href="https://www.youtube.com/channel/UChepHxgZmukOteW-6c796wQ"
            target="_blank"
          >
            YouTube
          </a>{" "}
          <a href="https://www.linkedin.com/in/joaquinmetayer/" target="_blank">
            LinkedIn
          </a>{" "}
          <a href="https://github.com/joaquinmetayer" target="_blank">
            GitHub
          </a>{" "}
          <a href="https://www.instagram.com/joaquinmetayer/" target="_blank">
            Instagram
          </a>{" "}
          <a href="mailto:joaquinmetayer@gmail.com" target="_blank">
            Email
          </a>{" "}
          <Link href={"/admin"}>Admin</Link>
        </p>
        <hr />
        {children}
        
      </body>
    </html>
  );
}
