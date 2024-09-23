import { LuSparkle } from "react-icons/lu";

const Brands = ({ value }) => {
  console.log(value);

  const brand = {
    id: "1",
    title: value, // مقدار مستقیم
    icons: <LuSparkle className="text-coustmBlue w-8 h-6" />,
  };

  const BrandsTitle = Array(8).fill(brand);

  return (
    <section className="flex items-center justify-around w-full h-[60px] bg-coustm">
      {BrandsTitle.map((item, index) => (
        <div
          key={index}
          className="flex items-center space-x-[19px] font-serif "
        >
          <span className="font-bold text-[20px] text-coustmwhite">
            {item.title} {/* مقدار title به صورت متن */}
          </span>
          <span>{item.icons}</span>
        </div>
      ))}
    </section>
  );
};

export default Brands;
