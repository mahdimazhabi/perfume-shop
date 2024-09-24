import { useEffect, useState } from "react";
import { LuSparkle } from "react-icons/lu";

const Brands = ({ value }) => {
  const brand = {
    id: "1",
    title: value, // مقدار مستقیم
    icons: <LuSparkle className="text-coustmBlue w-8 h-6" />,
  };

  const BrandsTitle = Array(8).fill(brand); // آرایه با 8 آیتم

  // ایجاد state برای ذخیره تعداد آیتم‌های نمایش داده شده
  const [displayBrands, setDisplayBrands] = useState(
    window.innerWidth < 640 ? BrandsTitle.slice(0, 3) : BrandsTitle
  );

  // بررسی عرض صفحه و تنظیم آرایه
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setDisplayBrands(BrandsTitle.slice(0, 3)); // در حالت موبایل فقط 3 آیتم
      } else {
        setDisplayBrands(BrandsTitle); // در حالت دسکتاپ تمام آیتم‌ها
      }
    };

    // اضافه کردن event listener برای تغییر سایز صفحه
    window.addEventListener("resize", handleResize);

    // پاکسازی event listener در هنگام unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [BrandsTitle]); // آرایه وابستگی

  return (
    <section className="grid grid-cols-3 sm:grid-cols-8 gap-4 lg:w-full h-auto bg-coustm p-4">
      {displayBrands.map((item, index) => (
        <div
          key={index}
          className="flex  sm:flex-row items-center justify-center  sm:space-x-[19px] font-serif"
        >
          <span className="font-bold text-[16px] sm:text-[20px] text-coustmwhite">
            {item.title}
          </span>
          <span>{item.icons}</span>
        </div>
      ))}
    </section>
  );
};

export default Brands;
