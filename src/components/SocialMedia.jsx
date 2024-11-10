import SocialMediaItem from "./SocialMediaItem";
import IconInstagram from "../assets/icons/ic-ig.svg";
import IconDribble from "../assets/icons/ic-dribble.svg";
import IconTwitter from "../assets/icons/ic-twitter.svg";
import IconYoutube from "../assets/icons/ic-youtube.svg";

export default function SocialMedia() {
  return (
    <div className="flex gap-4">
      <SocialMediaItem logo={IconInstagram} />
      <SocialMediaItem logo={IconDribble} />
      <SocialMediaItem logo={IconTwitter} />
      <SocialMediaItem logo={IconYoutube} />
    </div>
  );
}
