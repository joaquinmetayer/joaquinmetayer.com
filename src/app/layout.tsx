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
  //<input type="email" placeholder="tuemail@email.com"/>
  //<p><button >Subscribirme</button></p>
  return (
    <html lang="es">
      <body>
        <img src={`/images/${data.heroImage}`} alt="joaquinmetayer" style={{width:`${data.heroWidth}`}}/>
        <p>
          <Link href="/">Joaquin Metayer</Link>{" / "}
          {data.links.map((link, index) => (
            <span key={index}>
              <Link key={index} href={link.url} target="_blank">
                {link.platform}
              </Link>{" "}
            </span>
          ))}
        </p>
        <div style={{width:`${data.heroWidth}`}}>
        
        </div>
        <hr />
        {children}
      </body>
    </html>
  );
}
