export default function Button({ title }) {
  return (
    <button
      className={`px-8 py-2 rounded bg-primary text-white hover:bg-secondary text-sm`}
    >
      {title}
    </button>
  );
}
