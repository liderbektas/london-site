import Footer from "./components/footer";
import Info from "./components/info";

const Contact = () => {
  return (
    <div className="w-full h-[full] bg-black flex flex-col pt-48">
      <div className="w-[1100px] mx-auto flex justify-between items-center">
        <Info
          title="Contact Us"
          info="T. +05467438785"
          extraInfo="M. cinkoscode@example.com"
        />
        <div className="px-32 border-x">
          <Info
            title="Address"
            info="England Mahallesi Nato yolu caddesi"
            extraInfo="21562 . Umraniye / England"
          />
        </div>
        <Info
          title="Opening Hours"
          info="Everyday : From 11.30 To 23.30"
          extraInfo="Kitchen Closes At 22.00"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
