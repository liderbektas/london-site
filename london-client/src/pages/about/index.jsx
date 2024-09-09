import Desc from "./components/desc";
import Content from "./content";

const About = () => {
  return (
    <div className="w-screen h-full pb-32 bg-black">
      <div className="flex flex-col gap-y-24 items-center">
        <div className="w-[660px] flex flex-col gap-y-2 mx-auto">
          <h2 className="text-3xl pt-32">About Our Story</h2>
          <p className="text-md">
            No gas costs, minimal maintenance, zero emissions. Owning a Tesla
            fleet is better for your business, your drivers and your community.
            Tesla vehicles have a low cost of ownership compared to gas
            vehicles, meaning your fleet can pay for itself over time.
          </p>
        </div>
        <Content />
        <div className="flex gap-x-24 mt-12 justify-between items-center w-[1116px] mx-auto">
          <Desc
            title="Business Benefits"
            desc="With state and local incentives and no annual required maintenance, Tesla vehicles cost less to own. Private businesses and tax-exempt organizations alike are eligible for fleet benefits."
          />
          <Desc
            title="Business Benefits"
            desc="With state and local incentives and no annual required maintenance, Tesla vehicles cost less to own. Private businesses and tax-exempt organizations alike are eligible for fleet benefits."
          />
          <Desc
            title="Business Benefits"
            desc="With state and local incentives and no annual required maintenance, Tesla vehicles cost less to own. Private businesses and tax-exempt organizations alike are eligible for fleet benefits."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
