import Hero from "../components/Hero/Hero";
import Brands from "../components/Brands/Brands";
import Products from "../components/Products/Products";
import PartnerCompanies from "../components/PartnerCompanies/PartnerCompanies";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands value={"AROSHA"} />
      <Products />
      <Brands value={"FESTIVAL"} />
      <PartnerCompanies />
      <Brands value={"ABOUT"} />
      <Footer />
    </>
  );
};

export default Home;
