import NavItem from "./NavItem";

export default function Navigation() {
  return (
    <ul className="flex justify-between">
      <NavItem title="Home" />
      <NavItem title="Service" />
      <NavItem title="Feature" />
      <NavItem title="Product" />
      <NavItem title="Testimonial" />
      <NavItem title="FAQ" />
    </ul>
  );
}
