const Footer = () => {
  return (
    <footer className="bg-coustmbgcomponentsabout w-full ">
      <div className="flex justify-between mx-[120px] ">
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
        <div className="mt-[80px] w-[383px] h-[180px] rounded-3xl border border-coustocolorborder px-8 py-4   font-normal bg-coustmwhite/5">
          <p className="text-[20px] mx-auto  text-coustmwhite mb-[13px]">
            Perfume is the art{" "}
            <span className="block"> that makes memory speak.</span>
          </p>
          <span className="text-white">
            Francis Kurkdjian,<span className="block"> Master Perfumer</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
