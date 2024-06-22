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
        <Link href="/admin">Admin</Link> <Link href="/">Home</Link>
      </p>
      <hr />
      {children}
    </>
  );
}
