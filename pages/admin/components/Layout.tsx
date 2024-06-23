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
        <Link href="/" target="_blank">
          joaquinmetayer
        </Link>
        {" / "}
        <Link href="/admin">admin</Link>
        {" / "}
        <Link href="/admin">logout</Link>
      </p>
      <hr />
      {children}
    </>
  );
}
