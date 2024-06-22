import Link from "next/link";
import "../admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <>
        <h2>
          <Link href="/admin">Admin Joaquin Metayer</Link>
        </h2>
        <hr />
        {children}
      </>
  );
}
