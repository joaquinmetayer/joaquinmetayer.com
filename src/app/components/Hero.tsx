"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <h2>
        <Link href="/">joaquinmetayer</Link>
      </h2>
      <p>
        <a href="https://linkedin.com/in/joaquinmetayer/" target="_blank">LinkedIn</a>{' '}
        <a href="https://github.com/joaquinmetayer" target="_blank">GitHub</a>{' '}
        <a href="https://youtube.com/channel/UChepHxgZmukOteW-6c796wQ" target="_blank">YouTube</a>{' '}
        <a href="https://instagram.com/joaquinmetayer" target="_blank">Instagram</a>{' '}
      </p>
      <hr />
    </>
  );
}
