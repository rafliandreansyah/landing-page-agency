export default function SocialMediaItem({ logo }) {
  return (
    <a className="inline-block" href="#">
      <img src={logo} className="size-8" />
    </a>
  );
}
