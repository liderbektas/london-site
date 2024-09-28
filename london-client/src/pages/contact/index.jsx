import Footer from "./components/footer";
import Info from "./components/info";

const Contact = () => {
  return (
    <div className="w-full h-[full] bg-black flex flex-col pt-48">
      <div className="w-[1100px] mx-auto flex justify-between items-center">
        <Info
          title="Contact Us"
          info="📞 +4402089641014"
          extraInfo="📧 alibabakebap1212@gmail.com"
        />
        <div className="px-32 border-x">
          <Info
            title="Address"
            info="330 KILBURN LANE , QUEENS PARK W9 3EF"
          />
        </div>
        <Info
          title="Opening Hours"
          info="Everyday : From 11.30 To 23.30"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
