import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";
import data from "../../assets/data.json";

export default function Home() {
  const postMetadataPublic = getPostMetadata("posts");
  const postPreviewsPublic = postMetadataPublic.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  const postMetadataPinned = getPostMetadata("pinned");
  const postPreviewsPinned = postMetadataPinned.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
      {data.description.length > 0 && (
        <>
          <p>{data.description}</p>
          <hr />
        </>
      )}

      {postMetadataPublic.length === 0 && (// cambiar a !== para que se vea
        <>
          <h3>Posts destacados</h3>
          <hr />
          {postPreviewsPinned}
          <hr />
        </>
      )}

      <h3>Total {postMetadataPublic.length} posts</h3>
      <hr />
      {postPreviewsPublic}
    </>
  );
}
