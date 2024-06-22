import Link from "next/link";

const AdminPanel = () => {
  return (
    <>
      <ul>
        <li>
          <Link href="/admin/create-post">Create post</Link>
        </li>
        <li>
          <Link href="/admin/delete-post">Delete post</Link>
        </li>
        <li>
          <Link href="/admin/edit-links">Edit links</Link>
        </li>
        <li>
          <Link href="/admin/send-email">Send email</Link>
        </li>
      </ul>
    </>
  );
};

export default AdminPanel;
