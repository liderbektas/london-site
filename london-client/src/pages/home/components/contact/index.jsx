import Footer from "./components/footer";
import Info from "./components/info";

const Contact = () => {
  return (
    <div className="flex flex-col w-full h-auto pt-24 bg-black md:pt-48">
      <div className="flex flex-col items-center justify-between w-full max-w-5xl gap-8 px-4 mx-auto md:flex-row">
        <Info
          title="Contact Us"
          info="📞 +4402089641014"
          extraInfo="📧 alibabakebap1212@gmail.com"
        />
        <div className="px-8 border-gray-700 md:px-32 md:border-x">
          <Info
            title="Address"
            info="330 Kilburn Lane, Queens Park W9 3EF"
          />
        </div>
        <Info
          title="Opening Hours"
          info="Everyday: From 11:30 To 23:30"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
