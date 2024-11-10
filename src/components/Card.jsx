export default function Card({ icon, title, description }) {
  return (
    <div className="rounded-lg shadow-md p-5 flex flex-col items-center m-4 max-w-80 hover:shadow-lg">
      <div>
        <img src={icon} alt="Club Group" className="size-14" />
      </div>
      <h3 className="text-d_grey text-2xl font-semibold py-2">{title}</h3>
      <p className="text-grey text-sm py-2">{description}</p>
    </div>
  );
}
