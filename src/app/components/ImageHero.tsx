import imageHero from "../../../assets/image-hero.json";

export default function ImageHero() {
  return (
    <>
      <img
        src={`/images/${imageHero.url}`}
        alt="joaquinmetayer"
        style={{ marginTop: "20px" }}
      />
    </>
  );
}
