
import Link from "next/link";

export default function Blog({
  children,
}: {
  children: React.ReactNode;
}) {

  const header = (
      <Link href="/blog">
        <h1 className="text-xl font-bold">Joaquin Metayer</h1>
      </Link>
  );

  return (
    <div className="max-w-2xl px-5 py-2 blog">
      {header}
      {children}
    </div>
  );
}
