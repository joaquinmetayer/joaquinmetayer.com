import data from "../../../assets/data.json";

export default function ImageHero() {
  return (
    <>
      <img
        src={`/images/${data.heroImage}`}
        alt="joaquinmetayer"
        style={{ marginTop: "20px", filter: 'grayscale(1)', maxHeight:'400px', width:'auto' }}
      />
    </>
  );
}
