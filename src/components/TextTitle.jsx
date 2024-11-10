export default function TextTitle({ title }) {
  const titleFiltered = title.split("\n").map((text) => (
    <>
      {text}
      <br></br>
    </>
  ));
  return (
    <h3 className="text-3xl text-d_grey font-semibold">{titleFiltered}</h3>
  );
}
