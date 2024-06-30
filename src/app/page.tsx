import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      <img
        src="images/c4384d10-24c1-4da5-810e-823d0d9650cc.png"
        alt="joaquinmetayer"
        className="hero"
      />
      {postPreviews}
    </>
  );
}
