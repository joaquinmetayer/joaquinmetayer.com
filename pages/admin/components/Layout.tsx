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
        joaquinmetayer admin
      </p>
      {children}
    </>
  );
}
