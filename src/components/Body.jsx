import Card from "./Card";
import LogoClient from "./LogoClient";
import Product1 from "../assets/icons/member-organisations.svg";
import Product2 from "../assets/icons/national-associations.svg";
import Product3 from "../assets/icons/club-group.svg";
import Illustration from "../assets/images/Illustration2.png";
import Illustration2 from "../assets/images/Illustration3.png";
import TextTitle from "./TextTitle";
import TextSubtitle from "./TextSubtitle";
import InfoJoin from "./InfoJoin";
import IconMember from "../assets/icons/ic-member.png";
import IconClub from "../assets/icons/ic-club.png";
import IconPayment from "../assets/icons/ic-payment.png";
import IconEvent from "../assets/icons/ic-event.png";
import LearnMoreInfo from "./LearnMoreInfo";
import LogoClient1 from "../assets/icons/logo-client1.png";
import LogoClient2 from "../assets/icons/logo-client2.png";
import LogoClient3 from "../assets/icons/logo-client3.png";
import LogoClient4 from "../assets/icons/logo-client4.png";
import LogoClient5 from "../assets/icons/logo-client5.png";
import LogoClient6 from "../assets/icons/logo-client6.png";
import LogoClient7 from "../assets/icons/logo-client7.png";
import LogoClientItem from "./LogoClientItem";
import ArrowRight from "../assets/icons/arrow-right.svg";
import CardReadMore from "./CardReadMore";
import Button from "./Button";

export default function Body() {
  return (
    <>
      <div className="p-12 text-center max-w-screen-2xl mx-auto">
        <TextTitle title="Our Client" />
        <TextSubtitle text="We have been working with some Fortune 500+ clients" />
        <LogoClient />
        <div className="mt-10"></div>
        <TextTitle title={`Manage your entire community\nin a single system`} />
        <TextSubtitle text="Who is Nextcent suitable for?" />
        <div className="flex justify-around">
          <Card
            icon={Product1}
            title="Membership Organisations"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
          <Card
            icon={Product2}
            title="National Associations"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
          <Card
            icon={Product3}
            title="Clubs And Groups"
            description="Our membership management software provides full automation of membership renewals and payments"
          />
        </div>
        <LearnMoreInfo
          illustration={Illustration}
          title="The unseen of spending three years at Pixelgrade"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
          ctaTitle="Learn More"
        />
      </div>
      <div className="py-16 bg-silver">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex w-full justify-around items-center">
            <div>
              <h3 className="text-3xl text-d_grey font-semibold">
                Helping a local<br></br>
                <span className="text-primary">business reinvent itself</span>
              </h3>
              <p className="py-2 text-sm">
                We reached here with our hard work and dedication
              </p>
            </div>
            <div className="flex flex-row items-center">
              <div className="flex flex-col">
                <div className="px-10 py-5">
                  <InfoJoin
                    icon={IconMember}
                    totalCount="2,245,341"
                    type="Members"
                  />
                </div>
                <div className="px-10 py-5">
                  <InfoJoin
                    icon={IconEvent}
                    totalCount="828,867"
                    type="Event Bookings"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="px-10 py-5">
                  <InfoJoin icon={IconClub} totalCount="46,328" type="Clubs" />
                </div>
                <div className="px-10 py-5">
                  <InfoJoin
                    icon={IconPayment}
                    totalCount="1,926,436"
                    type="Payments"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto p-12">
        <LearnMoreInfo
          illustration={Illustration2}
          title="How to design your site footer like we did"
          subtitle="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida."
          ctaTitle="Learn More"
        />
      </div>
      <div className="py-12 bg-silver">
        <div className="max-w-screen-2xl mx-auto p-12 flex place-content-end w-full">
          <div className="w-2/3">
            <TextSubtitle text="Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna." />
            <h3 className="text-primary font-semibold text-lg mt-2">
              Tim Smith
            </h3>
            <p className="text-sm text-l_grey mt-1">
              British Dragon Boat Racing Association
            </p>
            <div className="flex gap-10 mt-4 items-center">
              <LogoClientItem src={LogoClient1} />
              <LogoClientItem src={LogoClient2} />
              <LogoClientItem src={LogoClient3} />
              <LogoClientItem src={LogoClient4} />
              <LogoClientItem src={LogoClient5} />
              <LogoClientItem src={LogoClient6} />
              <LogoClientItem src={LogoClient7} />
              <a href="#" className="text-primary font-semibold">
                Meet all customers
                <span className="items-center">
                  <img src={ArrowRight} className="inline-block ms-2" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto p-12 flex items-center justify-center">
        <div className="w-1/2 p-10 text-center">
          <TextTitle title="Caring is the new marketing" />
          <TextSubtitle text="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​" />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto p-12 mt-20 flex justify-center gap-20">
        <CardReadMore title="Creating Streamlined Safeguarding Processes with OneRen" />
        <CardReadMore title="Creating Streamlined Safeguarding Processes with OneRen" />
        <CardReadMore title="Creating Streamlined Safeguarding Processes with OneRen" />
      </div>
      <div className="py-12 bg-silver mt-10">
        <div className="max-w-screen-2xl m-auto flex flex-col justify-center items-center w-full">
          <h1 className="text-6xl text-black text-center w-1/2">
            Pellentesque suscipit fringilla libero eu.
          </h1>
          <div className="mt-10">
            <Button title="Get a Demo" />
          </div>
        </div>
      </div>
    </>
  );
}
