import blue from "../../assets/img/imgs products/blue.png";
import sauvage from "../../assets/img/imgs products/sauvage.png";
import rouge from "../../assets/img/imgs products/rouge.png";
import chanel from "../../assets/img/imgs products/chanel.png";
import block from "../../assets/img/imgs products/block.png";
import Creedgreenirish from "../../assets/img/imgs products/Creed green irish.png";

const Products = () => {
  const products = [
    {
      id: 1,
      title: "versace dylan blue",
      img: blue,
      size: "100ML",
      Description:
        "for men - cold fragrance - Fern - grapefruit - wood - bergamot",
      price: "$107.00",
    },
    {
      id: 2,
      title: "dior sauvage elixir ",
      img: sauvage,
      size: "100ML",
      Description:
        "for men - Spicy fragrance - Lavender,white sandalwood,Aromatic Spices",
      price: "$263.00",
    },
    {
      id: 3,
      title: "bakarat rouge 540",
      img: rouge,
      size: "70ML",
      Description:
        "for men and women - warm fragrance - Saffron - Cashmeran - Cedar,Jasmine",
      price: "$435.00",
    },
    {
      id: 4,
      title: "Chanel Coco",
      img: chanel,
      size: "100ML",
      Description: "for women - mild fragrance - bergamot - orange - jasmine",
      price: "$170.00",
    },
    {
      id: 5,
      title: "Tom ford black orchid",
      img: block,
      size: "50ML",
      Description:
        "for women - warm fragrance - vanilla - jasmine - bergamot - lemon",
      price: "$168.00",
    },
    {
      id: 6,
      title: "Creed green irish",
      img: Creedgreenirish,
      size: "100ML",
      Description:
        "for men - cold fragrance - Aloysia citrodora -Lily - Violet leaf",
      price: "$389.00",
    },
  ];

  return (
    <section className="grid lg:grid-cols-3 grid-cols-1 gap-y-[96px] lg:gap-x-[100px] lg:mx-[115px]  my-20 h-auto">
      {products.map((items) => (
        <div className="max-w-[336px] max-h-[486px] mx-auto" key={items.id}>
          <div className="border-2 border-coustm rounded-tl-[500px] rounded-tr-[500px] rounded-bl-none rounded-br-none relative flex flex-col items-center justify-center">
            <img
              src={items.img}
              alt="perfume blue"
              className=" max-h-[265px] mt-4"
            />
            <hr className="w-full my-4 border-1 border-coustm" />
            <div className="space-y-2 p-4">
              <span className="font-bold text-[24px] block">{items.title}</span>
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
    </section>
  );
};

export default Products;
