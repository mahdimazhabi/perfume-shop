import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import Products from "../components/Products/Products";
import PartnerCompanies from "../components/PartnerCompanies/PartnerCompanies";
import Footer from "../components/Footer/Footer";
import HotDeals from "../components/HotDeals/HotDeals";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands value={"AROSHA"} />
      <Products />
      <Brands value={"FESTIVAL"} />
      <HotDeals />
      <Brands value={"ASSIST"} />

      <PartnerCompanies />
      <Brands value={"ABOUT"} />
      <Footer />
    </>
  );
};

export default Home;
