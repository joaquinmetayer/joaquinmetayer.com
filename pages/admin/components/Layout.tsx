import Link from "next/link";
import "../admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>
        <Link href="/">joaquinmetayer</Link> <Link href="/admin">admin</Link>
      </p>
      {children}
    </>
  );
}
