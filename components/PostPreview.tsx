import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <p className="post-list">
      <span className="text-slate-400">
        {props.date}
      </span>
      {' - '}
      <Link href={`/blog/posts/${props.slug}`}>
        {props.title}
      </Link>
    </p>
  );
};

export default PostPreview;