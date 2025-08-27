import {CategoriesSection,} from "../components";
import DesignerShowcase from "../components/DesginerSection";
import FourSectionLayout from "../components/FourSectionLayout";
import HeroSection from "./Hero-section";
const Landing = () => {
  return (
    <>
      {/* <VideoPlayer videoWidth={"max-w-[100rem] mx-auto"}/> */}
      {/* <Banner /> */}
      <HeroSection />
      <FourSectionLayout/>
      <DesignerShowcase/>
      {/* <HeroSection /> */}
      
      <CategoriesSection /> 
      <HeroSection />
      {/* <BestSellingProducts/> */}
      {/* <HomeCollectionSection /> */}
    </>
  );
};
export default Landing;
