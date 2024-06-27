"use client";
import Link from "next/link";
import data from "../../../assets/data.json";

export default function Hero() {
  return (
    <>
      <h1>
        <Link href="/">joaquinmetayer</Link>
      </h1>
      <p>
        {data.links.map((link, index) => (
          <span key={index}>
            <Link key={index} href={link.url} target="_blank">
              {link.platform}
            </Link>{" "}
          </span>
        ))}
        <Link href="/admin">Admin</Link>
      </p>

      <hr />
    </>
  );
}