import Logo from "../../../../../../assets/img/D.png";
import { RiFacebookBoxFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full pt-32 pb-12 mx-auto">
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-y-4 w-[1250px]">
          <div className="flex items-center justify-between">
            <div className="flex-1 border-t border-gray-300"></div>
            <img src={Logo} alt="logo" className="w-24 h-24 mx-8" />
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-x-4">
              <div className="flex items-center cursor-pointer gap-x-2">
                <RiFacebookBoxFill />
                <span>Facebook</span>
              </div>
              <div className="flex items-center cursor-pointer gap-x-2">
                <AiFillInstagram />
                <span>Instagram</span>
              </div>
            </div>
            <p className="text-sm">
              © 2024 QODE INTERACTIVE, ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
