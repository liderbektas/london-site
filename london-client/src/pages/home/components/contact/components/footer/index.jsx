import Logo from "../../../../../../assets/img/D.png";

const Footer = () => {
  return (
    <div className="w-full pt-16 pb-8 mx-auto bg-black">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col w-full max-w-5xl px-4 gap-y-6">
          <div className="flex items-center justify-between">
            <div className="flex-1 border-t border-gray-300"></div>
            <img src={Logo} alt="logo" className="w-16 h-16 mx-4 md:w-24 md:h-24" />
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          <div className="flex justify-center">
            <p className="text-sm text-gray-400 text-center">
              © 2024 ALI BABA KEBAB, ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
