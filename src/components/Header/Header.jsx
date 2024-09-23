import { RiSearch2Line } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MyProfile from "../../assets/img/photo_2024-04-09_15-43-14.jpg";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="flex flex-col sm:flex-row justify-between items-center mx-4 sm:mx-[61px]">
          <div>
            <h1 className="font-normal text-coustmwhite text-[24px] sm:text-[30px] mt-[20px] sm:mt-[39px] font-serif">
              AROSHA
            </h1>
          </div>
          <div className="mt-4 sm:mt-0">
            <ul className="flex flex-col sm:flex-row text-coustmwhite space-y-2 sm:space-y-0 sm:space-x-[30px] sm:mt-[39px]">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
          </div>
          <div className="flex space-x-4 sm:space-x-[57px] items-center text-coustmwhite mt-4 sm:mt-[39px]">
            <RiSearch2Line className="w-5 h-5 sm:w-5 sm:h-5 cursor-pointer" />
            <HiOutlineShoppingBag className="w-5 h-5 sm:w-5 sm:h-5 cursor-pointer" />
            <img
              src={MyProfile}
              alt="Profile"
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
