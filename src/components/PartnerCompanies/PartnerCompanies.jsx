const PartnerCompanies = () => {
  const Companies = [
    { id: 1, title: "DIOR" },
    { id: 2, title: "VERSACE" },
    { id: 3, title: "CHANEL" },
    { id: 4, title: "LANCOME" },
    { id: 5, title: "TOM FORD" },
    { id: 6, title: "CREED" },
    { id: 7, title: "BVLGARI" },
    { id: 8, title: "ZARA" },
    { id: 9, title: "DOLCE & GABBANA" },
    { id: 10, title: "LACOSTE" },
    { id: 11, title: "LALIQUE" },
  ];

  return (
    <section className="mt-[40px] lg:mx-[118px] mb-[40px]">
      <div>
        <h1 className="lg:text-[40px] text-[25px] text-center lg:text-left font-bold">
          Companies that cooperate with us:
        </h1>
      </div>
      <div
        className="mt-[67px] flex 
      flex-wrap justify-center lg:space-x-[80px]  text-center"
      >
        {Companies.map((items) => (
          <span
            className="text-coustmBluetext lgtext-[48px] text-[35px] font-semibold leading-[77px] py-[45px] px-[20px] font-serif"
            key={items.id}
          >
            {items.title}
          </span>
        ))}
      </div>
    </section>
  );
};

export default PartnerCompanies;
