import Header from "../Header/Header";
import imgprefume from "../../assets/img/image.png";

const Hero = () => {
  return (
    <section className="bg-custom-gradient w-full  ">
      <Header />

      <div className="lg:flex lg:justify-between justify-center text-center lg:text-left  mt-[184px] lg:mx-[61px] pb-40 ">
        <div>
          <h1 className="text-coustmwhite lg:text-[120px] text-[48px]   font-bold font-serif mb-[29px]">
            best prefume <span className="block ">for you</span>
          </h1>
          <span className="text-coustmwhite text-lg  font-normal ">
            Discover the perfect fragrance for you{" "}
            <span className="block ">with our wide selection of perfumes.</span>
          </span>
          <div className="mt-[37px] space-x-[21px]">
            <button className="bg-coustmBlue  rounded-xl  text-[21px] w-[149px] h-16">
              order now
            </button>
            <button className="rounded-xl text-coustmwhite  text-[21px] border border-coustmwhite w-[149px] h-16">
              watch video
            </button>
          </div>
          <div className="flex mt-[70px] text-coustmwhite items-center justify-center lg:justify-start space-x-[50px]">
            <span className="text-[48px]">
              500K <span className="block text-[24px]">customers</span>
            </span>

            {/* خط جداکننده */}
            <div className="h-[60px] border-l-4 border-coustmwhite"></div>

            <span className="text-[48px]">
              2K <span className="block text-[24px]">Perfumes</span>
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={imgprefume}
            alt="imgprefume"
            className="lg:w-[460px] lg:h-[580px] w-[250px] h-[300px] border-2 border-white rounded-tl-[500px] rounded-tr-[500px] rounded-bl-[0px] rounded-br-[0px] p-1 mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
