export default function TextButton({ title }) {
  return (
    <button className="px-4 py-2 text-primary mx-4 hover:text-secondary">
      {title}
    </button>
  );
}
