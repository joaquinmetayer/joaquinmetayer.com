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
        <Link href="/">joaquinmetayer</Link> <Link href="/admin">admin</Link>
      </h1>
      <hr />
      {children}
    </>
  );
}
