export default function NavItem({ title }) {
  return (
    <li className="px-4 py-1 text-black hover:text-primary">
      <a href="#" className="inline-block">
        {title}
      </a>
    </li>
  );
}
