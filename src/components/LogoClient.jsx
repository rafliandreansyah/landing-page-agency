import LogoClientItem from "./LogoClientItem";
import LogoClient1 from "../assets/icons/logo-client1.png";
import LogoClient2 from "../assets/icons/logo-client2.png";
import LogoClient3 from "../assets/icons/logo-client3.png";
import LogoClient4 from "../assets/icons/logo-client4.png";
import LogoClient5 from "../assets/icons/logo-client5.png";
import LogoClient6 from "../assets/icons/logo-client6.png";
import LogoClient7 from "../assets/icons/logo-client7.png";

export default function LogoClient() {
  return (
    <div className="flex justify-between py-12">
      <LogoClientItem src={LogoClient1} />
      <LogoClientItem src={LogoClient2} />
      <LogoClientItem src={LogoClient3} />
      <LogoClientItem src={LogoClient4} />
      <LogoClientItem src={LogoClient5} />
      <LogoClientItem src={LogoClient6} />
      <LogoClientItem src={LogoClient7} />
    </div>
  );
}
