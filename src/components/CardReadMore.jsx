import ArrowRight from "../assets/icons/arrow-right.svg";

export default function CardReadMore({ title }) {
  return (
    <div className="bg-silver rounded-lg shadow-lg p-4 max-w-72 text-center">
      <p className="font-semibold text-grey">{title}</p>
      <a href="#" className="text-primary font-semibold mt-6 inline-block">
        Read More
        <span className="items-center">
          <img src={ArrowRight} className="inline-block ms-2" />
        </span>
      </a>
    </div>
  );
}
