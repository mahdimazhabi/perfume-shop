import { PiTelegramLogoThin } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { PiInstagramLogoLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-coustmbgcomponentsabout w-full ">
      <div className="flex justify-between mx-[120px] pb-[120px] ">
        <div className="flex space-x-[70px] ">
          <ul className="mt-[80px]  ">
            <li className="text-[30px] font-bold text-coustmwhite mb-3">
              Resources
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Blog
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Newsletter
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Support
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Help centre
            </li>
          </ul>
          <ul className="mt-[80px] ">
            <li className="text-[30px] font-bold text-coustmwhite mb-3">
              Company
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              About us
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              News
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Contact
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Best seller
            </li>
          </ul>
          <ul className="mt-[80px] ">
            <li className="text-[30px] font-bold text-coustmwhite mb-3">
              Legal
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Terms of service
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Privacy policy
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Cookies policy
            </li>
            <li className="text-coustmwhite text-[20px] font-thin mb-[22px]">
              Data processing
            </li>
          </ul>
        </div>
        <div className="mt-[80px] w-[383px] h-[202px] rounded-3xl border border-coustocolorborder p-6 bg-coustmwhite/5 text-coustmwhite flex flex-col justify-center">
          <p className="text-[24px] leading-tight mb-4">
            "Perfume is the art
            <span className="block">that makes memory speak."</span>
          </p>
          <span className="text-coustmwhite text-lg">
            Francis Kurkdjian,<span className="block">Master Perfumer</span>
          </span>
        </div>
      </div>
      <hr className="w-[84%] mx-auto border-t-1 border-coustmwhite pb-6" />
      <div className=" flex justify-between mx-[120px]">
        <div>
          <span className="text-coustmwhite">
            Designed by Reza Dadgar . 2023
          </span>
        </div>

        <div className="flex space-x-[35px] text-coustmwhite ">
          <PiTelegramLogoThin className="cursor-pointer w-5 h-5" />
          <BsTelephone className="cursor-pointer w-5 h-5" />
          <PiInstagramLogoLight className="cursor-pointer w-5 h-5" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
