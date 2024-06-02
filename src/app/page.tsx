import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";
import Hero from "./hero";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <Hero / >
      {postPreviews}
      
    </>
  );
}
