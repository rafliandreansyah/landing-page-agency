import Button from "./Button";
import JumbotronImage from "../assets/images/Illustration.png";

export default function Jumbotron() {
  return (
    <div className="w-full h-full flex justify-between p-6">
      <div className="my-14">
        <h1 className="text-4xl font-semibold py-4 text-d_grey">
          Lessons and insights<br></br>
          <span className="text-primary">from 8 years</span>
        </h1>
        <p className="py-2 text-sm text-grey mb-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <Button title="Register" />
      </div>
      <div className="my-14 p-6">
        <img src={JumbotronImage} alt="Jumbotron Image" className="size-96" />
      </div>
    </div>
  );
}
