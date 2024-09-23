import Header from "../Header/Header";
import imgprefume from "../../assets/img/image.png";

const Hero = () => {
  return (
    <section className="bg-custom-gradient w-full  ">
      <Header />

      <div className="flex justify-between mt-[184px] mx-[61px] pb-40 ">
        <div>
          <h1 className="text-coustmwhite text-[120px] font-bold font-serif mb-[29px]">
            best prefume <span className="block ">for you</span>
          </h1>
          <span className="text-coustmwhite text-2xl font-normal ">
            Discover the perfect fragrance for you{" "}
            <span className="block">with our wide selection of perfumes.</span>
          </span>
          <div className="mt-[37px] space-x-[21px]">
            <button className="bg-coustmBlue  rounded-xl  text-[21px] w-[149px] h-16">
              order now
            </button>
            <button className="rounded-xl text-coustmwhite  text-[21px] border border-coustmwhite w-[149px] h-16">
              watch video
            </button>
          </div>
          <div className="flex mt-[70px] text-coustmwhite items-center space-x-[50px]">
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
        <div>
          <img
            src={imgprefume}
            alt="imgprefume"
            className="w-[460px] h-[580px] border-2 border-white rounded-tl-[500px] rounded-tr-[500px] rounded-bl-[0px] rounded-br-[0px] p-1 mt-20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
