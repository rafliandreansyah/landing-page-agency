import TextTitle from "./TextTitle";
import TextSubtitle from "./TextSubtitle";
import Button from "./Button";

export default function LearnMoreInfo({
  title,
  subtitle,
  ctaTitle,
  illustration,
}) {
  return (
    <div className="w-full flex py-20 justify-betwee items-center">
      <div className="flex-shrink-0">
        <img src={illustration} alt="Illustration" className="size-[440px]" />
      </div>
      <div className="text-start px-20 ms-5">
        <TextTitle title={title} />
        <div className="mt-3"></div>
        <TextSubtitle text={subtitle} />
        <div className="mt-5"></div>
        <Button title={ctaTitle} />
      </div>
    </div>
  );
}
