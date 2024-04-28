import getPostMetadata from "../../components/getPostMetadata";
import PostPreview from "../../components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  const Hero = (
    <div>
      <h2>
        <a href="/">Joaquin Metayer</a>
      </h2>
      <p>Software engineer building on the internet.</p>
      <p>Find me on <a href="https://github.com/joaquinmetayer" target="_blank">GitHub</a>, <a href="https://linkedin.com/in/joaquinmetayer" target="_blank">LinkedIn</a>, <a href="https://instagram.com/joaquinmetayer" target="_blank">Instagram</a> or joaquinmetayer@gmail.com.
      </p>
      <hr/>
    </div>
  )

  return (
    <>
      {Hero}
      {postPreviews}
    </>
  );
}
