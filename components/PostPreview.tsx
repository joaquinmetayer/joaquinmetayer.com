import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
  return (
    <p>
      <Link href={`/posts/${props.slug}`}>
        {props.title}
      </Link>
    </p>
  );
};

export default PostPreview;