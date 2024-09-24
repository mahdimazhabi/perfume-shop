import { useState } from "react";
import { RiSearch2Line, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import MyProfile from "../../assets/img/photo_2024-04-09_15-43-14.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r  py-4">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* نام برند */}
          <div>
            <h1 className="font-serif text-white text-2xl sm:text-3xl">
              AROSHA
            </h1>
          </div>

          {/* منوی دسکتاپ */}
          <div>
            <ul className="  space-x-6 lg:flex hidden justify-center text-white ">
              <li className="cursor-pointer ">Home</li>
              <li className="cursor-pointer ">Shop</li>
              <li className="cursor-pointer ">About</li>
              <li className="cursor-pointer ">Blog</li>
            </ul>
          </div>
          <div className="flex space-x-6 items-center">
            <RiSearch2Line className="w-5 h-5 cursor-pointer    text-coustmwhite            " />
            <HiOutlineShoppingBag className="w-5 h-5 cursor-pointer  text-coustmwhite " />
            <img
              src={MyProfile}
              alt="Profile"
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>

          {/* منوی موبایل */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? (
                <RiCloseLine className="w-6 h-6" />
              ) : (
                <RiMenu3Line className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* نمایش منوی موبایل */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col space-y-4 text-right text-white">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">Shop</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Blog</li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
