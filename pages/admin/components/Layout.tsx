import Link from "next/link";
import "../admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>
        <Link href="/">joaquinmetayer</Link>
      </h1>
      <p>
        <Link href="/admin">Admin</Link>
      </p>
      <hr />
      {children}
    </>
  );
}
