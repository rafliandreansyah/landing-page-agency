import FooterMenuItem from "./FooterMenuItem";

export default function FooterMenu() {
  return (
    <div className="flex gap-20">
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-semibold">Company</h3>
        <div className="flex flex-col gap-3 mt-6">
          <FooterMenuItem title="About Us" />
          <FooterMenuItem title="Blog" />
          <FooterMenuItem title="Contact us" />
          <FooterMenuItem title="Pricing" />
          <FooterMenuItem title="Testimonials" />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-semibold">Support</h3>
        <div className="flex flex-col gap-3 mt-6">
          <FooterMenuItem title="Help center" />
          <FooterMenuItem title="Terms of service" />
          <FooterMenuItem title="Legal" />
          <FooterMenuItem title="Privacy policy" />
          <FooterMenuItem title="Status" />
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-white text-xl font-semibold">Stay up to date</h3>
        <div className="flex flex-col gap-3 mt-6">
          <div className="relative">
            <div className="rounded-lg py-2 px-4 bg-white bg-opacity-20 flex">
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                className="text-sm min-w-52 border-none bg-transparent text-white autofill:!bg-transparent placeholder:text-white auto focus:outline-none"
                autoComplete="off"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 ms-2 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
