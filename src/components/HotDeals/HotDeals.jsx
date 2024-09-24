import TomFord from "../../assets/img/imgs products/Tom Ford oud wood.png";
import versace from "../../assets/img/imgs products/versace eros.png";
import davidoff from "../../assets/img/imgs products/davidoff cool water.png";

const HotDeals = () => {
  const products = [
    {
      id: 1,
      title: "versace eros",
      img: versace,
      size: "100ML",
      Description: "for men - mild fragrance - Lemon - Mint - Vanilla - Cedar",
      price: "$82.00",
    },
    {
      id: 2,
      title: "Tom Ford oud wood ",
      img: TomFord,
      size: "50ML",
      Description:
        "for men and women - mild fragrance - Amber - Vanilla - Cinnamon - Incense",
      price: "$295.00",
    },
    {
      id: 3,
      title: "davidoff cool water",
      img: davidoff,
      size: "70ML",
      Description:
        "for men - cold fragrance - Lavender - Rosemary - Citrus aurantium - musk",
      price: "$60.00",
    },
  ];

  return (
    <section>
      <div className=" bg-coustmbgcomponentsabout pb-[31px] w-full  ">
        <div className="lg:mx-[116px] text-center lg:text-left  pt-[31px] ">
          <h1 className="text-coustmwhite text-[32px] font-normal mb-4 ">
            Hot deals for you
          </h1>
          <span className=" font-normal text-coustmsilvelr  lg:text-[28px] text-[20px]">
            Experience the best price at the festival
          </span>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-[96px] lg:gap-x-[100px] lg:mx-[115px]  my-20 h-auto">
          {products.map((items) => (
            <div
              className="max-w-[336px] max-h-[486px] mx-auto "
              key={items.id}
            >
              <div className="border-2 bg-coustmwhite border-coustm rounded-tl-[500px] rounded-tr-[500px] rounded-bl-none rounded-br-none relative flex flex-col items-center justify-center">
                <img
                  src={items.img}
                  alt="perfume blue"
                  className=" max-h-[265px] mt-4"
                />
                <hr className="w-full my-4 border-1 border-coustm" />
                <div className="space-y-2 p-4">
                  <span className="font-bold text-[24px] block">
                    {items.title}
                  </span>
                  <span className="text-sm text-coustmBlue">{items.size}</span>
                  <p className="text-[13.5px] font-medium text-gray-500">
                    {items.Description}
                  </p>
                  <span className="font-bold text-left text-[24px]">
                    {items.price}
                  </span>
                </div>
                <button className="absolute bottom-0 right-0 bg-coustm text-white w-[110px] h-[48px]">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDeals;
