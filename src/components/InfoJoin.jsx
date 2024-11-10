export default function InfoJoin({ icon, totalCount, type }) {
  return (
    <div className="flex items-center">
      <img src={icon} alt="Icon" className="size-12" />
      <div className="ms-4">
        <h3 className="text-2xl font-semibold text-d_grey">{totalCount}</h3>
        <p className="text-sm text-grey">{type}</p>
      </div>
    </div>
  );
}
