import logo from "../assets/icons/logo.svg";
import Navigation from "./Navigation";
import TextButton from "./TextButton";
import Button from "./Button";
import Jumbotron from "./Jumbotron";

export default function Header() {
  return (
    <div className="h-full px-6 max-w-screen-2xl mx-auto">
      <header className="w-full flex justify-between align-middle p-6 bg-silver">
        <div>
          <img src={logo} alt="Logo App" className="w-40" />
        </div>
        <div>
          <Navigation />
        </div>
        <div>
          <TextButton title="Login" />
          <Button title="Sign Up" />
        </div>
      </header>
      <Jumbotron />
    </div>
  );
}
