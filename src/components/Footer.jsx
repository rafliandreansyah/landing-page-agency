import Logo from "../assets/icons/logo-white.svg";
import FooterMenu from "./FooterMenu";
import SocialMedia from "./SocialMedia";

export default function Footer() {
  return (
    <div className="bg-black py-12">
      <div className="max-w-screen-2xl m-auto px-12 flex justify-between">
        <div>
          <img src={Logo} alt="Logo" />
          <p className="mt-12 text-sm text-white">
            Copyright © 2020 Nexcent ltd.
          </p>
          <p className="mt-1 text-sm text-white">All rights reserved</p>
          <div className="mt-12">
            <SocialMedia />
          </div>
        </div>
        <FooterMenu />
      </div>
    </div>
  );
}
