import Logo from "../../../../../../assets/img/D.png";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

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
        
          <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
            <div className="flex text-white gap-x-6">
              <div className="flex items-center cursor-pointer gap-x-2">
                <FaTiktok size={24} />
                <span>Facebook</span>
              </div>
              <div className="flex items-center cursor-pointer gap-x-2">
                <AiFillInstagram size={24} />
                <span>Instagram</span>
              </div>
            </div>
            <p className="text-sm text-center text-gray-400">
              © 2024 ALI BABA KEBAB, ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
